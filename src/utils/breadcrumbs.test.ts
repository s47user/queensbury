import test from 'node:test';
import assert from 'node:assert/strict';
import {
  getSectionContext,
  generateBreadcrumbs,
  calculateScrollProgress,
  SECTION_METADATA,
} from './breadcrumbs';

test('getSectionContext returns correct metadata for valid section IDs', () => {
  const programmes = getSectionContext('programmes');
  assert.equal(programmes.id, 'programmes');
  assert.equal(programmes.category, 'Academic Stages');
  assert.equal(programmes.title, 'Our Programmes');
  assert.equal(programmes.href, '#programmes');

  const facilities = getSectionContext('#facilities');
  assert.equal(facilities.id, 'facilities');
  assert.equal(facilities.category, 'Campus Infrastructure');
});

test('getSectionContext falls back to home for unknown sections', () => {
  const unknown = getSectionContext('nonexistent-section');
  assert.equal(unknown.id, 'home');
  assert.equal(unknown.title, 'Overview');
});

test('generateBreadcrumbs builds standard 3-tier hierarchy for deep sections', () => {
  const crumbs = generateBreadcrumbs('admissions');
  assert.equal(crumbs.length, 3);
  assert.deepEqual(crumbs[0], { label: 'Home', href: '#' });
  assert.equal(crumbs[1].label, 'Admissions & Enrollment');
  assert.equal(crumbs[2].label, 'Admissions & Fees');
  assert.equal(crumbs[2].isCurrent, true);
});

test('generateBreadcrumbs includes subContext when provided (e.g. active stage)', () => {
  const crumbs = generateBreadcrumbs('programmes', 'Nursery (2–4 yrs)');
  assert.equal(crumbs.length, 4);
  assert.equal(crumbs[crumbs.length - 1].label, 'Nursery (2–4 yrs)');
  assert.equal(crumbs[crumbs.length - 1].isCurrent, true);
  assert.equal(crumbs[crumbs.length - 2].isCurrent, false);
});

test('calculateScrollProgress clamps values correctly between 0 and 100', () => {
  assert.equal(calculateScrollProgress(0, 2000, 1000), 0);
  assert.equal(calculateScrollProgress(500, 2000, 1000), 50);
  assert.equal(calculateScrollProgress(1000, 2000, 1000), 100);
  assert.equal(calculateScrollProgress(1500, 2000, 1000), 100);
  assert.equal(calculateScrollProgress(-50, 2000, 1000), 0);
  assert.equal(calculateScrollProgress(100, 1000, 1000), 0);
});
