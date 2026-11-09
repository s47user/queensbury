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
    description: 'Our Head of School addressing parents, faculty, and graduating learners during the 1st Graduation Ceremony at Queensbury Montessori School in Santa Maria, Accra.',
  },
  {
    id: 'graduating-class-lineup',
    title: 'Class of Graduating Scholars in Royal Blue Regalia',
    category: 'Campus Ceremonies',
    image: '/assets/school/school_fb_photo_15.jpg',
    aspect: 'aspect-[16/10]',
    spanClass: 'sm:col-span-2 lg:col-span-2',
    age: 'Kindergarten Graduates',
    pillar: 'Scholastic Readiness',
    description: 'Our proud graduating scholars wearing royal blue ceremonial gowns and traditional kente stoles on stage under the celebratory banner.',
  },
  {
    id: 'montessori-water-pouring',
    title: 'Montessori Practical Life Pouring Demonstration',
    category: 'Campus Ceremonies',
    image: '/assets/school/school_fb_photo_9.jpg',
    aspect: 'aspect-[4/3]',
    spanClass: 'sm:col-span-1 lg:col-span-1',
    age: 'Nursery (2–4 Years)',
    pillar: 'Practical Life Mastery',
    description: 'Young learner demonstrating precise water-pouring coordination and motor independence from a glass pitcher into glasses on stage.',
  },
  {
    id: 'creche-sensory-exploration',
    title: 'Crèche Toddler Sensorial Colour Ball Activity',
    category: 'Community Celebrations',
    image: '/assets/school/school_fb_photo_10.jpg',
    aspect: 'aspect-[4/3]',
    spanClass: 'sm:col-span-1 lg:col-span-1',
    age: 'Crèche (0–2 Years)',
    pillar: 'Sensory Exploration',
    description: 'Toddler exploring tactile primary colour spheres at a child-sized table, supported attentively by caring teachers and school leadership.',
  },
  {
    id: 'certificate-presentation-nana',
    title: 'Official Queensbury Certificate Presented to Nana Adjoa',
    category: 'Student Achievers',
    image: '/assets/school/school_fb_photo_16.jpg',
    aspect: 'aspect-[3/4]',
    spanClass: 'sm:col-span-1 lg:col-span-1',
    age: 'Kindergarten Stage',
    pillar: 'Academic Milestone',
    description: 'Faculty presenting the official Queensbury Montessori School 2024 graduation certificate to young scholar Nana Adjoa Nhyiraba Asomah.',
  },
  {
    id: 'toddler-award-presentation',
    title: 'Special Milestone Gift & Character Recognition',
    category: 'Student Achievers',
    image: '/assets/school/school_fb_photo_17.jpg',
    aspect: 'aspect-[3/4]',
    spanClass: 'sm:col-span-1 lg:col-span-1',
    age: 'Toddler Stage',
    pillar: 'Early Recognition',
    description: 'Guest of honour presenting a custom school-crested gift and certificate to an early learner dressed in the official Queensbury orange uniform.',
  },
  {
    id: 'ballet-choreography-tutu',
    title: 'Graceful Ballet & Stage Dance in Orange Tutus',
    category: 'Campus Ceremonies',
    image: '/assets/school/school_fb_photo_13.jpg',
    aspect: 'aspect-[16/10]',
    spanClass: 'sm:col-span-2 lg:col-span-2',
    age: 'Early Learners',
    pillar: 'Expressive Arts',
    description: 'Young learners performing a captivating ballet choreography in signature Queensbury orange tulle skirts and white tops on the red carpet stage.',
  },
  {
    id: 'dance-performance-denim',
    title: 'Confident Learners Denim Dance Routine',
    category: 'Campus Ceremonies',
    image: '/assets/school/school_fb_photo_12.jpg',
    aspect: 'aspect-[4/3]',
    spanClass: 'sm:col-span-1 lg:col-span-1',
    age: 'Primary & KG',
    pillar: 'Creative Confidence',
    description: 'A high-energy contemporary dance presentation by learners dressed in white tops and denim jackets, showcasing joy and stage presence.',
  },
  {
    id: 'stage-drama-salute',
    title: 'Coordinated Stage Choreography & Drama Salute',
    category: 'Campus Ceremonies',
    image: '/assets/school/school_fb_photo_11.jpg',
    aspect: 'aspect-[4/3]',
    spanClass: 'sm:col-span-1 lg:col-span-1',
    age: 'Kindergarten Stage',
    pillar: 'Dramatics & Speech',
    description: 'Learners performing an expressive stage recitation and synchronized salute during the annual speech and prize-giving celebrations.',
  },
  {
    id: 'pompom-rhythmic-movement',
    title: 'Early Years Rhythmic Pom-Pom Presentation',
    category: 'Community Celebrations',
    image: '/assets/school/school_fb_photo_14.jpg',
    aspect: 'aspect-[4/3]',
    spanClass: 'sm:col-span-1 lg:col-span-1',
    age: 'Toddlers & Nursery',
    pillar: 'Gross Motor Skills',
    description: 'Early learners engaging in vibrant yellow and blue pom-pom movement exercises alongside their encouraging early childhood educators.',
  },
  {
    id: 'graduation-cake-cutting',
    title: 'Milestone Celebration Cake Cutting',
    category: 'Community Celebrations',
    image: '/assets/school/school_fb_photo_8.jpg',
    aspect: 'aspect-[3/4]',
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
    id: 'faculty-kente-celebration',
    title: 'Faculty & Community Leaders in Traditional Kente',
    category: 'Community Celebrations',
    image: '/assets/school/school_fb_photo_2.jpg',
    aspect: 'aspect-[3/4]',
    spanClass: 'sm:col-span-1 lg:col-span-1',
    age: 'Faculty & Staff',
    pillar: 'Cultural Heritage',
    description: 'Queensbury Montessori teaching faculty and administrators celebrating in bespoke Ghanaian kente stoles at the graduation ceremony.',
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
 * Get the next photo index with wrap-around.
 */
export function getNextPhotoIndex(currentIndex: number, total: number): number {
  if (total <= 0) return 0;
  return (currentIndex + 1) % total;
}

/**
 * Get the previous photo index with wrap-around.
 */
export function getPrevPhotoIndex(currentIndex: number, total: number): number {
  if (total <= 0) return 0;
  return (currentIndex - 1 + total) % total;
}

/**
 * Get count of items per category for filter badges.
 */
export function getCategoryCounts(items: GalleryPhoto[]): Record<string, number> {
  const counts: Record<string, number> = {
    All: items.length,
    'Campus Ceremonies': 0,
    'Student Achievers': 0,
    'Community Celebrations': 0,
  };

  items.forEach((item) => {
    if (counts[item.category] !== undefined) {
      counts[item.category] += 1;
    }
  });

  return counts;
}
