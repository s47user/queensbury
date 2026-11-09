import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const isProd = process.env.NODE_ENV === 'production';

// Body parser with 25MB limit for image uploads
app.use(express.json({ limit: '25mb' }));

const apiKey = process.env.GEMINI_API_KEY || '';
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

// 1. Animate images into video using gemini-omni-1.2-flash via Interactions API
app.post('/api/animate-video', async (req, res) => {
  try {
    const { imageBase64, mimeType = 'image/jpeg', motionPrompt = 'Children gently exploring Montessori wooden materials with natural golden daylight and subtle gentle movement', aspectRatio = '16:9' } = req.body;

    if (!ai) {
      return res.status(503).json({
        error: 'Gemini API key is not configured. Please ensure GEMINI_API_KEY is available.',
      });
    }

    if (!imageBase64) {
      return res.status(400).json({ error: 'Missing imageBase64 data' });
    }

    const cleanBase64 = imageBase64.replace(/^data:[^;]+;base64,/, '');
    const validAspectRatio = aspectRatio === '9:16' ? '9:16' : '16:9';

    const interaction = await ai.interactions.create({
      model: 'gemini-omni-1.2-flash',
      input: [
        {
          type: 'image',
          mime_type: mimeType,
          data: cleanBase64,
        },
        {
          type: 'text',
          text: motionPrompt,
        },
      ],
      background: false,
      store: false,
      stream: false,
      response_format: {
        type: 'video',
        aspect_ratio: validAspectRatio,
      },
    }, { timeout: 300000 });

    const videoPart = interaction.output_video;
    if (videoPart && videoPart.data) {
      return res.json({
        success: true,
        videoData: videoPart.data,
        mimeType: videoPart.mime_type || 'video/mp4',
      });
    } else {
      return res.status(502).json({
        error: 'The video generation completed without returning video data.',
      });
    }
  } catch (error: any) {
    console.error('Error generating video with gemini-omni-1.2-flash:', error);
    return res.status(500).json({
      error: error?.message || 'Failed to animate image into video',
    });
  }
});

// 2. High Thinking Mode for Complex Pedagogical & Developmental Inquiries using gemini-4-argon with thinkingLevel: HIGH
app.post('/api/pedagogy-advisor', async (req, res) => {
  try {
    const { childAge, parentQuery, topic } = req.body;

    if (!ai) {
      return res.status(503).json({
        error: 'Gemini API key is not configured. Please ensure GEMINI_API_KEY is available.',
      });
    }

    if (!parentQuery) {
      return res.status(400).json({ error: 'Missing parent query' });
    }

    const systemPrompt = `You are the Lead Pedagogical Director at Queensbury Montessori School in Santa Maria (Auntie Aku / Last Stop), Accra, Ghana.
You have decades of Montessori training (AMI/AMS philosophy) and deep experience supporting Ghanaian families.
Queensbury Montessori serves children in Crèche (0-2 years), Nursery (2-4 years), and Kindergarten (4-6 years).
Approach every inquiry with high-level pedagogical reasoning, calm empathy, structured Montessori advice (Prepared Environment, Sensitive Periods, Freedom within Limits, Practical Life), and culturally resonant guidance for homes in Accra.
Format your answer with clear headers, key developmental milestones, practical at-home activities, and compassionate encouragement.`;

    const userPrompt = `Child Age / Stage: ${childAge || 'Early Childhood'}
Topic: ${topic || 'Montessori Learning & Development'}
Parent Query: ${parentQuery}`;

    // gemini-4-argon with thinkingLevel: HIGH (do not set maxOutputTokens)
    const response = await ai.models.generateContent({
      model: 'gemini-4-argon',
      contents: userPrompt,
      config: {
        thinkingConfig: {
          thinkingLevel: 'HIGH' as any,
        },
        systemInstruction: systemPrompt,
      },
    });

    const outputText = response.text || '';
    return res.json({
      success: true,
      advice: outputText,
    });
  } catch (error: any) {
    console.error('Error in pedagogy-advisor with gemini-4-argon:', error);
    return res.status(500).json({
      error: error?.message || 'Failed to generate pedagogical advice',
    });
  }
});

// 3. Google Maps Grounding using gemini-3.8-flash (with googleMaps tool)
app.post('/api/maps-guide', async (req, res) => {
  try {
    const { userOrigin, travelMode = 'driving' } = req.body;

    if (!ai) {
      return res.status(503).json({
        error: 'Gemini API key is not configured. Please ensure GEMINI_API_KEY is available.',
      });
    }

    const prompt = `Queensbury Montessori School is located in Santa Maria (Auntie Aku / Last Stop), near North Deseret Hospital, in Accra, Ghana.
A parent is asking for location context, verified landmarks, travel guidance, and route recommendations from: "${userOrigin || 'Lapaz / Sowutuom / Mallam area'}".
Travel mode preferred: ${travelMode}.
Use Google Maps grounding to provide accurate, grounded navigation details, notable landmarks near Auntie Aku Last Stop and North Deseret Hospital, road conditions/corridors (e.g. George Walker Bush Highway / N1, Kwashieman-Santa Maria Road), and practical arrival advice for morning drop-off (7:00 AM) and pickup (3:00 PM).`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        tools: [{ googleMaps: {} }],
      },
    });

    const outputText = response.text || '';
    return res.json({
      success: true,
      guide: outputText,
    });
  } catch (error: any) {
    console.error('Error in maps-guide with gemini-3.8-flash:', error);
    return res.status(500).json({
      error: error?.message || 'Failed to retrieve grounded map directions',
    });
  }
});

// 4. Admission Inquiry Submission
app.post('/api/admission-inquiry', (req, res) => {
  const { parentName, phone, email, childName, childAge, program, preferredStartDate, message } = req.body;
  if (!parentName || !phone) {
    return res.status(400).json({ error: 'Parent name and phone number are required.' });
  }

  // Pre-generate WhatsApp message
  const waMessage = encodeURIComponent(
    `Hello Queensbury Montessori School, my name is ${parentName}. I would like to inquire about admission for my child ${childName || ''} (${childAge || ''}) for the ${program || 'programme'}. Preferred start date: ${preferredStartDate || 'immediate'}. Phone: ${phone}.`
  );

  return res.json({
    success: true,
    admissionFee: 'GH₵100 (Physical Admission Form Fee — Provisional)',
    whatsAppUrl: `https://wa.me/233241133632?text=${waMessage}`,
    message: 'Inquiry registered successfully. Our admissions team will reach out promptly via WhatsApp or phone.',
  });
});

// Dev server or Production static serving
async function startServer() {
  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

startServer();
