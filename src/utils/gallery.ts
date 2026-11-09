/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'All' | 'Campus Ceremonies' | 'Student Achievers' | 'Community Celebrations';
  image: string;
  aspect: string;
  spanClass: string;
  age: string;
  pillar: string;
  description: string;
}

export const GALLERY_ITEMS: GalleryPhoto[] = [
  {
    id: 'graduation-keynote',
    title: 'Head of School Graduation Keynote Address',
    category: 'Campus Ceremonies',
    image: '/assets/school/school_fb_photo_1.jpg',
    aspect: 'aspect-[3/4]',
    spanClass: 'sm:col-span-2 lg:col-span-2',
    age: 'Campus Wide',
    pillar: 'School Leadership',
    description: 'Our Head of School addressing parents, faculty, and graduating learners during the 1st Graduation Ceremony at Queensbury Montessori School.',
  },
  {
    id: 'graduation-cake-cutting',
    title: 'Milestone Celebration Cake Cutting',
    category: 'Community Celebrations',
    image: '/assets/school/school_fb_photo_8.jpg',
    aspect: 'aspect-[9/16]',
    spanClass: 'sm:col-span-1 lg:col-span-1',
    age: 'Toddlers & Graduates',
    pillar: 'Community Unity',
    description: 'Educators and early learners gathered around the celebratory graduation cake, marking the joyful completion of their foundational learning cycle.',
  },
  {
    id: 'nursery-achiever-vanessa',
    title: 'Achievers Certificate Awarded to Vanessa Yeboah',
    category: 'Student Achievers',
    image: '/assets/school/school_fb_photo_3.jpg',
    aspect: 'aspect-[3/4]',
    spanClass: 'sm:col-span-1 lg:col-span-1',
    age: 'Nursery Stage',
    pillar: 'Early Excellence',
    description: 'Young Vanessa proudly presenting her Queensbury Montessori Achievers Certificate alongside her teacher in traditional kente attire.',
  },
  {
    id: 'citation-aarif',
    title: 'Academic Citation Presented to Aarif Massud Kouanda',
    category: 'Student Achievers',
    image: '/assets/school/school_fb_photo_4.jpg',
    aspect: 'aspect-[3/4]',
    spanClass: 'sm:col-span-1 lg:col-span-1',
    age: 'Kindergarten Stage',
    pillar: 'Academic Honour',
    description: 'Faculty presenting a framed graduation citation celebrating curiosity, dedication, and respectful character at Queensbury.',
  },
  {
    id: 'citation-cynthia',
    title: 'Academic Citation Presented to Cynthia Naa Koshie Lamptey',
    category: 'Student Achievers',
    image: '/assets/school/school_fb_photo_5.jpg',
    aspect: 'aspect-[3/4]',
    spanClass: 'sm:col-span-1 lg:col-span-1',
    age: 'Kindergarten Stage',
    pillar: 'Character Virtue',
    description: 'Cynthia receiving her personalized framed citation in recognition of her outstanding engagement and social grace.',
  },
  {
    id: 'achiever-darion',
    title: 'Graduation Certificate Awarded to Darion Ofosu Nyaako Appiah',
    category: 'Student Achievers',
    image: '/assets/school/school_fb_photo_6.jpg',
    aspect: 'aspect-[3/4]',
    spanClass: 'sm:col-span-1 lg:col-span-1',
    age: 'Early Learners',
    pillar: 'Individual Growth',
    description: 'Darion holding his graduation certificate with faculty celebrating his milestones in self-discipline and cheerful learning.',
  },
  {
    id: 'graduation-cake',
    title: 'Official Queensbury Graduation Cake Display',
    category: 'Community Celebrations',
    image: '/assets/school/school_fb_photo_2.jpg',
    aspect: 'aspect-[3/4]',
    spanClass: 'sm:col-span-1 lg:col-span-1',
    age: 'Campus Milestone',
    pillar: 'Celebration',
    description: 'The beautifully decorated celebration cake for the 1st Queensbury Montessori School Graduation Ceremony in Santa Maria, Accra.',
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

export function getCategoryCounts(items: GalleryPhoto[]): Record<string, number> {
  const counts: Record<string, number> = { All: items.length };
  for (const item of items) {
    counts[item.category] = (counts[item.category] || 0) + 1;
  }
  return counts;
}

export function getNextPhotoIndex(currentIndex: number, totalPhotos: number): number {
  if (totalPhotos <= 0) return 0;
  return (currentIndex + 1) % totalPhotos;
}

export function getPrevPhotoIndex(currentIndex: number, totalPhotos: number): number {
  if (totalPhotos <= 0) return 0;
  return (currentIndex - 1 + totalPhotos) % totalPhotos;
}
