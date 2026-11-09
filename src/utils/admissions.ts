export interface InquiryData {
  parentName: string;
  phone: string;
  email?: string;
  childName?: string;
  childAge?: string;
  program: 'creche' | 'nursery' | 'kindergarten';
  needsAfterCare?: boolean;
}

export interface ProvisionalFeeBreakdown {
  formFeeGHS: number;
  isProvisional: boolean;
  programName: string;
  ageBracket: string;
  afterCareIncluded: boolean;
  notes: string;
}

/**
 * Calculates provisional fee structure with clear transparency flags
 */
export function calculateProvisionalFees(
  program: 'creche' | 'nursery' | 'kindergarten',
  needsAfterCare: boolean = false
): ProvisionalFeeBreakdown {
  const formFee = 100; // Physical admission form fee GHS 100 (Provisional)

  const programNames: Record<'creche' | 'nursery' | 'kindergarten', { name: string; age: string }> = {
    creche: { name: 'Crèche & Daycare', age: '0–2 years' },
    nursery: { name: 'Montessori Nursery', age: '2–4 years' },
    kindergarten: { name: 'Kindergarten', age: '4–6 years' },
  };

  const meta = programNames[program] || programNames.nursery;

  return {
    formFeeGHS: formFee,
    isProvisional: true,
    programName: meta.name,
    ageBracket: meta.age,
    afterCareIncluded: needsAfterCare,
    notes: 'Admission form fee is GH₵100 (provisional). Termly tuition and feeding fees are confirmed in person during school visit.',
  };
}

/**
 * Validates parental enquiry form input
 */
export function validateInquiryForm(data: Partial<InquiryData>): { isValid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  if (!data.parentName || data.parentName.trim().length < 2) {
    errors.parentName = 'Please provide your full name.';
  }

  // Ghana phone regex or international phone
  const cleanPhone = (data.phone || '').replace(/[\s\-\(\)]/g, '');
  if (!cleanPhone || cleanPhone.length < 9) {
    errors.phone = 'Please provide a valid telephone or WhatsApp number.';
  }

  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please provide a valid email address.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Formats WhatsApp direct click-to-chat URL for Queensbury Montessori
 */
export function formatWhatsAppInquiry(data: Partial<InquiryData>): string {
  const baseNumber = '233241133632'; // School WhatsApp 024 113 3632
  const greeting = `Hello Queensbury Montessori School,`;
  const namePart = data.parentName ? ` My name is ${data.parentName.trim()}.` : '';
  const childPart = data.childName ? ` I am inquiring about admission for my child ${data.childName.trim()}` : ' I am inquiring about admissions';
  const agePart = data.childAge ? ` (Age: ${data.childAge.trim()})` : '';
  const programPart = data.program ? ` for the ${data.program} programme.` : '.';
  const afterCarePart = data.needsAfterCare ? ' We also request after-care until 4:00 PM.' : '';

  const message = `${greeting}${namePart}${childPart}${agePart}${programPart}${afterCarePart} Please provide details on forms and campus visit.`;
  return `https://wa.me/${baseNumber}?text=${encodeURIComponent(message)}`;
}
