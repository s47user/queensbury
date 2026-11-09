import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterGalleryItems,
  getNextPhotoIndex,
  getPrevPhotoIndex,
  getCategoryCounts,
  GALLERY_ITEMS,
} from './gallery';

test('filterGalleryItems returns all items when All or empty is passed', () => {
  const all = filterGalleryItems(GALLERY_ITEMS, 'All');
  assert.equal(all.length, GALLERY_ITEMS.length);

  const fallback = filterGalleryItems(GALLERY_ITEMS, '');
  assert.equal(fallback.length, GALLERY_ITEMS.length);
});

test('filterGalleryItems filters correctly by category', () => {
  const ceremonies = filterGalleryItems(GALLERY_ITEMS, 'Campus Ceremonies');
  assert.ok(ceremonies.length >= 1);
  assert.ok(ceremonies.every((item) => item.category === 'Campus Ceremonies'));

  const achievers = filterGalleryItems(GALLERY_ITEMS, 'Student Achievers');
  assert.ok(achievers.length >= 2);
  assert.ok(achievers.every((item) => item.category === 'Student Achievers'));
});

test('getNextPhotoIndex and getPrevPhotoIndex handle wrap-around correctly', () => {
  const total = 5;

  assert.equal(getNextPhotoIndex(0, total), 1);
  assert.equal(getNextPhotoIndex(4, total), 0); // wrap to first

  assert.equal(getPrevPhotoIndex(1, total), 0);
  assert.equal(getPrevPhotoIndex(0, total), 4); // wrap to last
});

test('getCategoryCounts aggregates category tallies', () => {
  const counts = getCategoryCounts(GALLERY_ITEMS);
  assert.equal(counts.All, GALLERY_ITEMS.length);
  assert.ok(counts['Campus Ceremonies'] >= 1);
  assert.ok(counts['Student Achievers'] >= 2);
});
