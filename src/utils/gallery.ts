/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'All' | 'Nature & Garden' | 'Sensorial & Math' | 'Practical Life' | 'Creativity & Art' | 'Prepared Environment';
  image: string;
  aspect: string;
  spanClass: string;
  age: string;
  pillar: string;
  description: string;
}

export const GALLERY_ITEMS: GalleryPhoto[] = [
  {
    id: 'outdoor-nature',
    title: 'Botanical Discovery & Sensory Flora Garden',
    category: 'Nature & Garden',
    image: '/src/assets/images/learning_outdoors_nature_1793950104302.jpg',
    aspect: 'aspect-[16/10]',
    spanClass: 'sm:col-span-2 lg:col-span-2',
    age: 'All Learners (0–6 yrs)',
    pillar: 'Nature Stewardship',
    description: 'Children tend soil, aromatic herbs, and water terracotta planters under the warm Accra breeze, discovering environmental reverence and sensory calm.',
  },
  {
    id: 'sandpaper-letters',
    title: 'Phonetic Tactile Sandpaper Letters',
    category: 'Sensorial & Math',
    image: '/src/assets/images/sandpaper_letters_1793954199709.jpg',
    aspect: 'aspect-[3/4]',
    spanClass: 'sm:col-span-1 lg:col-span-1',
    age: 'Nursery & KG (3–5 yrs)',
    pillar: 'Tactile Phonics',
    description: 'Tracing the textured sandpaper letters connects muscular memory with auditory phonetics, creating an intuitive foundation for reading and storytelling.',
  },
  {
    id: 'clay-atelier',
    title: 'Tactile Clay Sculpting & Creative Atelier',
    category: 'Creativity & Art',
    image: '/src/assets/images/sensory_clay_art_1793954179538.jpg',
    aspect: 'aspect-[4/3]',
    spanClass: 'sm:col-span-1 lg:col-span-1',
    age: 'Nursery (2–4 yrs)',
    pillar: 'Sensory Expression',
    description: 'Unhurried tactile exploration with natural earthenware clay and plant-derived pigments strengthens fine hand muscles and expressive confidence.',
  },
  {
    id: 'nursery-pouring',
    title: 'Practical Life: Precision Water Pouring',
    category: 'Practical Life',
    image: '/src/assets/images/programme_nursery_practical_1793950102981.jpg',
    aspect: 'aspect-[4/3]',
    spanClass: 'sm:col-span-1 lg:col-span-1',
    age: 'Nursery (2–4 yrs)',
    pillar: 'Motor Coordination',
    description: 'Pouring water between child-proportioned ceramic vessels refines bimanual coordination, balance, and deep concentration without adult interruption.',
  },
  {
    id: 'kindergarten-math',
    title: 'Montessori Golden Beads Decimal System',
    category: 'Sensorial & Math',
    image: '/src/assets/images/programme_kindergarten_math_1793950104698.jpg',
    aspect: 'aspect-[16/10]',
    spanClass: 'sm:col-span-2 lg:col-span-2',
    age: 'Kindergarten (4–6 yrs)',
    pillar: 'Concrete Mathematics',
    description: 'Children physically weigh and touch the difference between single units, bars of 10, squares of 100, and cubes of 1000 before encountering abstract arithmetic.',
  },
  {
    id: 'creche-sensory',
    title: 'Natural Sensorial Treasure Basket',
    category: 'Sensorial & Math',
    image: '/src/assets/images/programme_creche_sensory_1793950102593.jpg',
    aspect: 'aspect-[4/3]',
    spanClass: 'sm:col-span-1 lg:col-span-1',
    age: 'Crèche (0–2 yrs)',
    pillar: 'Early Sensorial',
    description: 'Infants explore polished wood, organic wool, and gourd textures rather than synthetic plastics, gently nurturing neural sensory pathways.',
  },
  {
    id: 'prepared-classroom',
    title: 'The Prepared Environment in Santa Maria',
    category: 'Prepared Environment',
    image: '/src/assets/images/hero_montessori_classroom_1793950102607.jpg',
    aspect: 'aspect-[16/10]',
    spanClass: 'sm:col-span-2 lg:col-span-2',
    age: 'Campus Wide',
    pillar: 'Prepared Environment',
    description: 'Child-scaled solid mahogany and cedar shelving arranged meticulously from simple to complex, bathed in gentle natural daylight for uninterrupted focus.',
  },
  {
    id: 'dining-communal',
    title: 'Grace, Courtesy & Family-Style Dining',
    category: 'Practical Life',
    image: '/src/assets/images/facility_dining_hall_1793951168327.jpg',
    aspect: 'aspect-[4/3]',
    spanClass: 'sm:col-span-1 lg:col-span-1',
    age: 'All Learners (0–6 yrs)',
    pillar: 'Grace & Courtesy',
    description: 'Children set placemats, serve wholesome meals with balanced portions, practice courteous dialogue, and clear tables collaboratively.',
  },
  {
    id: 'sleep-sanctuary',
    title: 'Peaceful Rest Suites & Sleep Room',
    category: 'Prepared Environment',
    image: '/src/assets/images/facility_sleep_sanctuary_1793951151256.jpg',
    aspect: 'aspect-[4/3]',
    spanClass: 'sm:col-span-1 lg:col-span-1',
    age: 'Crèche & Toddlers (0–3 yrs)',
    pillar: 'Rest & Recovery',
    description: 'Low wooden floor beds preserving motor autonomy and organic cotton bedding supporting healthy natural circadian restorative cycles.',
  },
];

/**
 * Filter gallery photos by selected category.
 */
export function filterGalleryItems(
  items: GalleryPhoto[],
  selectedCategory: string
): GalleryPhoto[] {
  if (!selectedCategory || selectedCategory === 'All') {
    return items;
  }
  return items.filter((item) => item.category === selectedCategory);
}

/**
 * Computes next photo index with wrap-around.
 */
export function getNextPhotoIndex(currentIndex: number, totalCount: number): number {
  if (totalCount <= 0) return 0;
  return (currentIndex + 1) % totalCount;
}

/**
 * Computes previous photo index with wrap-around.
 */
export function getPrevPhotoIndex(currentIndex: number, totalCount: number): number {
  if (totalCount <= 0) return 0;
  return (currentIndex - 1 + totalCount) % totalCount;
}

/**
 * Returns distinct category list with count statistics.
 */
export function getCategoryCounts(items: GalleryPhoto[]): Record<string, number> {
  const counts: Record<string, number> = { All: items.length };
  for (const item of items) {
    counts[item.category] = (counts[item.category] || 0) + 1;
  }
  return counts;
}
