import { test } from 'node:test';
import assert from 'node:assert/strict';
import { getSeparatorClasses } from './separator';

test('getSeparatorClasses returns correct classes for neutral tone', () => {
  const result = getSeparatorClasses('neutral');
  assert.ok(result.line.includes('via-white/15'));
  assert.ok(result.ambient.includes('via-white/[0.02]'));
});

test('getSeparatorClasses returns correct classes for emerald tone', () => {
  const result = getSeparatorClasses('emerald');
  assert.ok(result.line.includes('via-[#10B981]/30'));
  assert.ok(result.ambient.includes('via-[#10B981]/[0.04]'));
});

test('getSeparatorClasses returns correct classes for gold tone', () => {
  const result = getSeparatorClasses('gold');
  assert.ok(result.line.includes('via-[#E5A93C]/25'));
  assert.ok(result.ambient.includes('via-[#E5A93C]/[0.03]'));
});
