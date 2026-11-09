import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateProvisionalFees, validateInquiryForm, formatWhatsAppInquiry } from './admissions';

test('calculateProvisionalFees returns GH₵100 form fee marked provisional', () => {
  const result = calculateProvisionalFees('nursery', true);
  assert.equal(result.formFeeGHS, 100);
  assert.equal(result.isProvisional, true);
  assert.equal(result.programName, 'Montessori Nursery');
  assert.equal(result.ageBracket, '2–4 years');
  assert.equal(result.afterCareIncluded, true);
});

test('validateInquiryForm detects missing or invalid fields', () => {
  const invalid = validateInquiryForm({ parentName: '', phone: '123' });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.parentName);
  assert.ok(invalid.errors.phone);

  const valid = validateInquiryForm({
    parentName: 'Ama Mensah',
    phone: '0241133632',
    email: 'ama.mensah@example.com',
  });
  assert.equal(valid.isValid, true);
  assert.deepEqual(valid.errors, {});
});

test('formatWhatsAppInquiry formats proper wa.me link with encoded text', () => {
  const url = formatWhatsAppInquiry({
    parentName: 'Kofi Asante',
    childName: 'Kwame',
    childAge: '3 years',
    program: 'nursery',
    needsAfterCare: true,
  });

  assert.ok(url.startsWith('https://wa.me/233241133632?text='));
  assert.ok(url.includes('Kofi%20Asante'));
  assert.ok(url.includes('Kwame'));
  assert.ok(url.includes('4%3A00%20PM'));
});
