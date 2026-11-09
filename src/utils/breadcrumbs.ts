/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface BreadcrumbCrumb {
  label: string;
  href: string;
  isCurrent?: boolean;
}

export interface SectionContext {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  href: string;
  stageBadge?: string;
}

export const SECTION_METADATA: Record<string, SectionContext> = {
  home: {
    id: 'home',
    category: 'Queensbury Campus',
    title: 'Overview',
    subtitle: 'Santa Maria · Auntie Aku, Accra',
    href: '#',
  },
  about: {
    id: 'about',
    category: 'Academy & Heritage',
    title: 'About Queensbury',
    subtitle: 'Community Story & Montessori Creed',
    href: '#about',
  },
  philosophy: {
    id: 'philosophy',
    category: 'Pedagogy & Values',
    title: 'Montessori Philosophy',
    subtitle: '5 Core Child-Centred Pillars',
    href: '#philosophy',
  },
  'materials-3d': {
    id: 'materials-3d',
    category: 'Prepared Environment',
    title: '3D Sensorial Apparatus',
    subtitle: 'Interactive Tactile Material Studio',
    href: '#materials-3d',
  },
  programmes: {
    id: 'programmes',
    category: 'Academic Stages',
    title: 'Our Programmes',
    subtitle: 'Crèche · Nursery · Kindergarten',
    href: '#programmes',
  },
  facilities: {
    id: 'facilities',
    category: 'Campus Infrastructure',
    title: 'Prepared Facilities',
    subtitle: 'Rest Suite · Atelier · Courtyard',
    href: '#facilities',
  },
  experience: {
    id: 'experience',
    category: 'Learning Atmosphere',
    title: 'Learning Experience',
    subtitle: 'Sensorial & Outdoor Discovery',
    href: '#experience',
  },
  routine: {
    id: 'routine',
    category: 'Campus Day',
    title: 'Daily Life & Routine',
    subtitle: '7:00 AM – 4:00 PM Timetable',
    href: '#routine',
  },
  meals: {
    id: 'meals',
    category: 'Nutrition & Care',
    title: 'Meals & Sick Bay',
    subtitle: 'Wholesome Food & Pediatric Health',
    href: '#meals',
  },
  events: {
    id: 'events',
    category: 'Community Calendar',
    title: 'Academic Calendar',
    subtitle: 'Term Dates, Open Days & Milestones',
    href: '#events',
  },
  'parent-portal': {
    id: 'parent-portal',
    category: 'Family Suite',
    title: 'Parent Resources & Tools',
    subtitle: 'Commute Directions · Guidelines · Notices',
    href: '#parent-portal',
  },
  admissions: {
    id: 'admissions',
    category: 'Admissions & Enrollment',
    title: 'Admissions & Fees',
    subtitle: '4-Step Process · GH₵100 Form',
    href: '#admissions',
  },
  location: {
    id: 'location',
    category: 'Campus Visit',
    title: 'Location & Contact',
    subtitle: 'Santa Maria / Auntie Aku, Accra',
    href: '#location',
  },
};

/**
 * Retrieves the context metadata for any section ID, with safe fallback to 'home'.
 */
export function getSectionContext(sectionId: string): SectionContext {
  const normalized = sectionId.replace(/^#/, '').trim().toLowerCase();
  return SECTION_METADATA[normalized] || SECTION_METADATA.home;
}

/**
 * Builds the complete breadcrumb trail array for the active section.
 */
export function generateBreadcrumbs(sectionId: string, subContext?: string): BreadcrumbCrumb[] {
  const context = getSectionContext(sectionId);

  if (context.id === 'home') {
    return [
      { label: 'Home', href: '#', isCurrent: !subContext },
      ...(subContext ? [{ label: subContext, href: '#', isCurrent: true }] : []),
    ];
  }

  const crumbs: BreadcrumbCrumb[] = [
    { label: 'Home', href: '#' },
    { label: context.category, href: context.href },
    { label: subContext ? `${context.title}` : context.title, href: context.href, isCurrent: !subContext },
  ];

  if (subContext) {
    crumbs.push({ label: subContext, href: context.href, isCurrent: true });
  }

  return crumbs;
}

/**
 * Computes clamped scroll progress (0 to 100).
 */
export function calculateScrollProgress(
  scrollY: number,
  scrollHeight: number,
  clientHeight: number
): number {
  if (scrollHeight <= clientHeight) return 0;
  const maxScroll = scrollHeight - clientHeight;
  const progress = (scrollY / maxScroll) * 100;
  return Math.min(100, Math.max(0, Math.round(progress)));
}
