import { test } from 'node:test';
import assert from 'node:assert/strict';
import { getTranslations, TRANSLATIONS, Language } from './translations';

test('getTranslations returns English dictionary by default', () => {
  const t = getTranslations('en');
  assert.equal(t.nav.home, 'Home');
  assert.equal(t.nav.about, 'About');
  assert.ok(t.hero.headline.includes('Where curious minds grow'));
});

test('getTranslations returns accurate Twi dictionary when lang is tw', () => {
  const t = getTranslations('tw');
  assert.equal(t.nav.home, 'Ahyɛaseɛ');
  assert.equal(t.nav.about, 'Yɛn Ho Asɛm');
  assert.ok(t.hero.headline.includes('mmofra adwene nyin'));
  assert.equal(t.welcome.tag, 'Akwaaba Queensbury • Yɛn Kurom Asɛm');
});

test('getTranslations falls back gracefully to English for unknown language key', () => {
  const t = getTranslations('es' as unknown as Language);
  assert.equal(t.nav.home, 'Home');
  assert.ok(t.hero.headline.includes('Where curious minds grow'));
});

test('both English and Twi have matching dictionary keys', () => {
  const enKeys = Object.keys(TRANSLATIONS.en) as (keyof typeof TRANSLATIONS.en)[];
  const twKeys = Object.keys(TRANSLATIONS.tw) as (keyof typeof TRANSLATIONS.tw)[];
  assert.deepEqual(enKeys.sort(), twKeys.sort());

  for (const k of enKeys) {
    const enSubKeys = Object.keys(TRANSLATIONS.en[k]).sort();
    const twSubKeys = Object.keys(TRANSLATIONS.tw[k]).sort();
    assert.deepEqual(enSubKeys, twSubKeys, `Subkeys mismatch for section ${k}`);
  }
});
