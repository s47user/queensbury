import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const isProd = process.env.NODE_ENV === 'production';

// Body parser
app.use(express.json());

// 1. Admission Inquiry Submission (direct WhatsApp generator & registration)
app.post('/api/admission-inquiry', (req, res) => {
  const { parentName, phone, email, childName, childAge, program, preferredStartDate, message } = req.body;
  if (!parentName || !phone) {
    return res.status(400).json({ error: 'Parent name and phone number are required.' });
  }

  // Pre-generate WhatsApp message
  const waMessage = encodeURIComponent(
    `Hello Queensbury Montessori School, my name is ${parentName}. I would like to inquire about admission for my child ${childName || ''} (${childAge || ''}) for the ${program || 'programme'}. Preferred start date: ${preferredStartDate || 'immediate'}. Phone: ${phone}.${message ? ` Message: ${message}` : ''}`
  );

  return res.json({
    success: true,
    admissionFee: 'GH₵100 (Physical Admission Form Fee — Provisional)',
    whatsAppUrl: `https://wa.me/233241133632?text=${waMessage}`,
    message: 'Inquiry registered successfully. Our admissions team will reach out promptly via WhatsApp or phone.',
  });
});

// Health check endpoint
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', school: 'Queensbury Montessori School', campus: 'Santa Maria, Accra' });
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
    console.log(`Queensbury Montessori Server running at http://localhost:${PORT}`);
  });
}

startServer();
