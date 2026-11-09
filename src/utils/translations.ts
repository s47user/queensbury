export type Language = 'en' | 'tw';

export interface TranslationDictionary {
  nav: {
    home: string;
    about: string;
    programmes: string;
    facilities: string;
    admissions: string;
    calendar: string;
    contact: string;
    bookTour: string;
    enquire: string;
    directory: string;
    locationSub: string;
  };
  hero: {
    locationTag: string;
    agesTag: string;
    estTag: string;
    headline: string;
    subheadline: string;
    ctaApply: string;
    ctaTour: string;
    statAges: string;
    statAgesLabel: string;
    statApparatus: string;
    statApparatusLabel: string;
    statCare: string;
    statCareLabel: string;
    captionTitle: string;
    captionDesc: string;
    captionBadge: string;
  };
  welcome: {
    tag: string;
    headline: string;
    description: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar1Tag: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar2Tag: string;
    pillar3Title: string;
    pillar3Desc: string;
    pillar3Tag: string;
    pillar4Title: string;
    pillar4Desc: string;
    pillar4Tag: string;
    quoteTitle: string;
    quoteText: string;
    quoteAuthor: string;
    quoteRole: string;
  };
  stages: {
    tag: string;
    headline: string;
    description: string;
    exploreBtn: string;
    viewDetails: string;
    crecheTitle: string;
    crecheDesc: string;
    crecheHighlight: string;
    nurseryTitle: string;
    nurseryDesc: string;
    nurseryHighlight: string;
    kgTitle: string;
    kgDesc: string;
    kgHighlight: string;
  };
  admissions: {
    badge: string;
    headline: string;
    description: string;
    feeNoticeTitle: string;
    feeNoticeText: string;
    stepsTitle: string;
    stepsSubtitle: string;
    step1Title: string;
    step1Time: string;
    step1Desc: string;
    step2Title: string;
    step2Time: string;
    step2Desc: string;
    step3Title: string;
    step3Time: string;
    step3Desc: string;
    step4Title: string;
    step4Time: string;
    step4Desc: string;
    deskTitle: string;
    deskDesc: string;
    tabInquiry: string;
    tabTour: string;
    formTitleInquiry: string;
    formTitleTour: string;
    formDescInquiry: string;
    formDescTour: string;
    parentNameLabel: string;
    phoneLabel: string;
    childNameLabel: string;
    childAgeLabel: string;
    stageLabel: string;
    submitInquiry: string;
    submitTour: string;
    dossierTitle: string;
    dossierDesc: string;
    afterCareLabel: string;
  };
  cultureNotice: {
    banner: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      programmes: 'Programmes',
      facilities: 'Facilities',
      admissions: 'Admissions',
      calendar: 'Calendar',
      contact: 'Contact',
      bookTour: 'Book Campus Tour',
      enquire: 'Enquire & Apply',
      directory: 'Directory',
      locationSub: 'Santa Maria · Auntie Aku, Accra',
    },
    hero: {
      locationTag: 'Santa Maria · Auntie Aku, Accra',
      agesTag: 'Ages 0 to 6 Years',
      estTag: 'Est. 2020',
      headline: 'Where curious minds grow into lifelong explorers.',
      subheadline:
        'Queensbury Montessori School provides an authentic, child-centred early learning haven in Santa Maria, Accra. Guided by Montessori principles of self-direction, dignity, and sensorial discovery, we prepare children from Crèche through Kindergarten for purposeful lives.',
      ctaApply: 'Begin Admissions Inquiry',
      ctaTour: 'Book Campus Tour',
      statAges: '0–6',
      statAgesLabel: 'Crèche to KG',
      statApparatus: '100%',
      statApparatusLabel: 'Montessori Apparatus',
      statCare: '7:00 AM',
      statCareLabel: 'Early Gate & Care',
      captionTitle: 'The Prepared Environment',
      captionDesc: 'Child-scaled solid wood furnishings, sensorial apparatus, and calm illumination in Santa Maria.',
      captionBadge: 'Classroom',
    },
    welcome: {
      tag: 'Welcome to Queensbury • Our Community Story',
      headline: 'Rooted in Santa Maria, dedicated to raising curious, independent thinkers.',
      description:
        'Founded in 2020, Queensbury Montessori School was established to offer families in Santa Maria, Auntie Aku, and neighboring communities in western Accra a high-calibre, nurturing Montessori haven. Here, early childhood is celebrated not as a race to adulthood, but as the foundational chapter where a child develops concentration, self-discipline, emotional security, and a lifelong love for discovery.',
      pillar1Title: 'Child-Led Exploration',
      pillar1Desc:
        'Children choose purposeful activities from carefully curated shelves, following their intrinsic developmental urges under attentive guide observation.',
      pillar1Tag: 'Self-Direction',
      pillar2Title: 'Nurture & Emotional Warmth',
      pillar2Desc:
        'A calm, respectful environment where every child feels seen, loved, and valued. We emphasize grace, courtesy, and harmonious community living.',
      pillar2Tag: 'Emotional Safety',
      pillar3Title: 'Sensorial Foundation',
      pillar3Desc:
        'Concrete sensorial learning apparatus allows young hands to grasp abstract mathematical, geometric, and linguistic concepts through physical touch.',
      pillar3Tag: 'Concrete Knowledge',
      pillar4Title: 'Secure & Holistic Care',
      pillar4Desc:
        'Complete family peace of mind: secure gate procedures, freshly cooked breakfast and hot lunch, hygienic facilities, and dedicated after-care.',
      pillar4Tag: 'Complete Care',
      quoteTitle: 'The Montessori Creed at Queensbury',
      quoteText:
        '“The goal of early childhood education should be to activate the child’s own natural desire to learn. We do not fill an empty vessel; we cultivate the garden where the child’s innate potential blooms.”',
      quoteAuthor: 'Dr. Maria Montessori',
      quoteRole: '— Guiding the Queensbury Faculty',
    },
    stages: {
      tag: 'Educational Stages • Ages 0 to 6',
      headline: 'Environments tailored for every sensitive period.',
      description:
        'From infant care through kindergarten readiness, each classroom at Queensbury Montessori is prepared with child-scaled furnishings and authentic developmental apparatus.',
      exploreBtn: 'Explore Full Curriculum & Daily Routine',
      viewDetails: 'View Stage Details',
      crecheTitle: 'Crèche & Daycare',
      crecheDesc:
        'A calm, sensorial haven with individualized sleeping floor beds, warm caregiver attachment, and sensory discovery.',
      crecheHighlight: '7:00 AM early care · Low floor beds',
      nurseryTitle: 'Montessori Nursery',
      nurseryDesc:
        'Fostering practical life autonomy, language explosion with sandpaper letters, and concrete sensorial apparatus.',
      nurseryHighlight: '3-hour work cycles · Self-feeding & grace',
      kgTitle: 'Kindergarten (KG1 & KG2)',
      kgDesc:
        'Mathematical decimal system with golden beads, reading fluency, cultural exploration, and confident primary transition.',
      kgHighlight: 'Golden Beads Math · Phonetic fluency',
    },
    admissions: {
      badge: 'Admissions & Family Onboarding • Rolling Enrollment',
      headline: 'A thoughtful, dignified welcome into our school family.',
      description:
        'We understand that choosing an early childhood haven is an intimate family decision. We offer rolling admissions, clear communication, and an unhurried orientation tailored to your child’s emotional rhythm.',
      feeNoticeTitle: 'Transparent Fee Note:',
      feeNoticeText:
        'Physical admission forms are GH₵100 (provisional fee covering administrative registration and health records). Termly tuition and wholesome meal plans are presented in full detail during your campus walkthrough.',
      stepsTitle: 'The 4-Step Enrollment Process',
      stepsSubtitle: 'From First Conversation to First Morning',
      step1Title: 'Initial Conversation & Placement Check',
      step1Time: 'Day 1 · Direct Consultation',
      step1Desc:
        'Connect with our admissions desk via WhatsApp, phone, or online inquiry to verify open spaces in your child’s age cohort.',
      step2Title: 'Classroom Immersion & Observation',
      step2Time: 'Days 2–4 · 30-Minute Quiet Visit',
      step2Desc:
        'Experience our Santa Maria campus in person. Observe a live morning work cycle (9:00 AM), meet guides, and review infant rest and dining pavilions.',
      step3Title: 'Official Registration & Health Dossier',
      step3Time: 'Days 5–7 · Physical Admission Package',
      step3Desc:
        'Pick up the official enrollment file (provisional fee GH₵100), submit emergency contacts, child vaccination records, and detailed dietary/allergy instructions.',
      step4Title: 'Gentle Phased Classroom Welcome',
      step4Time: 'Week 1 · Staggered Orientation',
      step4Desc:
        'A calm, gradual settling-in schedule designed with the guide so your child forms secure, unhurried attachment with classroom educators.',
      deskTitle: 'Admissions Consultation Desk',
      deskDesc:
        'Prefer an immediate conversation? Our admissions coordinator is reachable by phone and WhatsApp during school hours (7:00 AM – 4:00 PM).',
      tabInquiry: 'General Enrollment Inquiry',
      tabTour: 'Book Classroom Walkthrough',
      formTitleInquiry: 'Express Interest & Receive Prospectus',
      formTitleTour: 'Schedule a Morning Observation',
      formDescInquiry:
        'Fill out this brief inquiry to connect directly with admissions and check available cohort openings.',
      formDescTour:
        'Visit our campus during the active 3-hour work cycle to observe child-led Montessori learning in Santa Maria.',
      parentNameLabel: 'Parent / Guardian Name *',
      phoneLabel: 'Phone / WhatsApp Number *',
      childNameLabel: 'Child’s Name (Optional)',
      childAgeLabel: 'Child’s Current Age',
      stageLabel: 'Academic Stage of Interest *',
      submitInquiry: 'Submit Inquiry & Connect via WhatsApp',
      submitTour: 'Book Classroom Walkthrough on WhatsApp',
      dossierTitle: 'Official Admission Application Dossier',
      dossierDesc: 'Covers registration dossier, emergency health sheet, and developmental orientation.',
      afterCareLabel: 'Request extended after-care until 4:00 PM for working parents.',
    },
    cultureNotice: {
      banner: 'English (UK / Ghana)',
    },
  },
  tw: {
    nav: {
      home: 'Ahyɛaseɛ',
      about: 'Yɛn Ho Asɛm',
      programmes: 'Adesua Nhyehyɛeɛ',
      facilities: 'Sukuu Bea & Nneɛma',
      admissions: 'Nsra & Adwumayɛ',
      calendar: 'Sukuu Da Nhyehyɛeɛ',
      contact: 'Nkitahodi & Bea',
      bookTour: 'Bɛhwɛ Sukuu Bea No',
      enquire: 'Bisa Nsɛm / Kyerɛ Pɛ',
      directory: 'Akwankyerɛ',
      locationSub: 'Santa Maria · Auntie Aku, Nkran',
    },
    hero: {
      locationTag: 'Santa Maria · Auntie Aku, Nkran',
      agesTag: 'Mfeɛ 0 kɔsi 6 Asetena',
      estTag: 'Wɔhyɛɛ aseɛ 2020',
      headline: 'Baabi a mmofra adwene nyin yɛ akwankyerɛfoɔ a wɔhwehwɛ nimdeɛ daa.',
      subheadline:
        'Queensbury Montessori Sukuu ma mmofra akwanya soronko wɔ Santa Maria, Nkran. Wɔ Maria Montessori nkyerɛkyerɛ a ɛma abofra no ankasa suani de n’adwene kɔ anim no ase, yɛsiesie mmofra fi Crèche kɔsi Kindergarten ma asetena pa ne anidasoɔ kɛseɛ.',
      ctaApply: 'Bisa Nsɛm Wɔ Nsra Ho',
      ctaTour: 'Bɛhwɛ Yɛn Sukuudan Mu',
      statAges: '0–6',
      statAgesLabel: 'Crèche kɔsi KG',
      statApparatus: '100%',
      statApparatusLabel: 'Montessori Nneɛma Pa',
      statCare: '7:00 AM',
      statCareLabel: 'Anɔpa Adidie & Nhwɛsoɔ',
      captionTitle: 'Adesua Bea a Wɔasiesie',
      captionDesc: 'Nnua pa nkongua ne apono a ɛfata mmofra ketewa, Montessori nneɛma, ne asomdwoeɛ wɔ Santa Maria.',
      captionBadge: 'Sukuudan',
    },
    welcome: {
      tag: 'Akwaaba Queensbury • Yɛn Kurom Asɛm',
      headline: 'Yɛwɔ Santa Maria, yɛtetee mmofra ma wɔbɛyɛ akwankyerɛfoɔ a wɔwɔ ahofadie.',
      description:
        'Wɔtetee Queensbury Montessori Sukuu wɔ afe 2020 mu sɛ ɛbɛboa mmusua a wɔwɔ Santa Maria, Auntie Aku, ne Nkran atɔeɛ afa mu no nyinaa. Wɔ ha no, mmofraberem nyɛ mmirika a wɔtu de kɔ mpanyinfeɛ mu, na mmom ɛyɛ berɛ a abofra no de nya adwenmuhyɛ, subampa, komamyɛ, ne adesua pɛ a ɛrentwa da.',
      pillar1Title: 'Abofra no Ankasa Adesua',
      pillar1Desc:
        'Mmofra no ankasa paw nneɛma a wɔpɛ sɛ wɔyɛ fi nkongua so, bere a akyerɛkyerɛfoɔ a wɔwɔ ntoboaseɛ hwɛ wɔn so bɔkɔɔ.',
      pillar1Tag: 'Ahofadie Adesua',
      pillar2Title: 'Dɔ, Osuani Animnyam & Komamyɛ',
      pillar2Desc:
        'Bea a asomdwoeɛ wɔ baabi a abofra biara nim sɛ wɔdɔ no na n’asɛm som bo. Yɛkyerɛ obu, subampa, ne nnamfofa pa.',
      pillar2Tag: 'Ahobammbɔ Pa',
      pillar3Title: 'Nsa ano Nneɛma a Ɛma Nimdeɛ',
      pillar3Desc:
        'Montessori nneɛma ma abofra no de ne nsa ka nkontabuo, kasadwini, ne nneɛma su ansa na watumi de n’adwene ate aseɛ yie.',
      pillar3Tag: 'Nsa ano Nimdeɛ',
      pillar4Title: 'Ahobammbɔ Pa & Nnuane Pa',
      pillar4Desc:
        'Awofoɔ koma tɔ wɔn yam: pono ano ahobammbɔ a ɛyɛ den, anɔpa aduan ne awia aduan pa a yɛnoa wɔ sukuu ha, ne anwummerɛ nhwɛsoɔ.',
      pillar4Tag: 'Nhwɛsoɔ Pa',
      quoteTitle: 'Queensbury Montessori Botaeɛ',
      quoteText:
        '“Mmofra mmofraberem adesua botaeɛ kɛseɛ ne sɛ ɛbɛkanyan abofra no ankasa pɛ a ɔwɔ sɛ ɔbɛsua adeɛ. Yɛnhyehyɛ adeɛ gu biribi a hwee nni mu mu; na mmom yɛyɛ afuo a abofra no akyɛdeɛ nyin wɔ mu.”',
      quoteAuthor: 'Dr. Maria Montessori',
      quoteRole: '— Akwankyerɛ ma Queensbury Akyerɛkyerɛfoɔ',
    },
    stages: {
      tag: 'Adesua Gyinapɛn • Mfeɛ 0 kɔsi 6',
      headline: 'Mfeɛ biara ne ne sukuudan a wɔasiesie.',
      description:
        'Efi nkokoaa nhwɛsoɔ kɔsi bere a abofra bɛwie Kindergarten akɔ primary, Queensbury sukuudan biara wɔ nneɛma pa a ɛfata abofra no nyin.',
      exploreBtn: 'Hwɛ Adesua Nhyehyɛeɛ Ne Da Biara Dwumadi Nyinaa',
      viewDetails: 'Hwɛ Gyinapɛn Yi Ho Nsɛm',
      crecheTitle: 'Crèche & Nkokoaa Bea',
      crecheDesc:
        'Asomdwoeɛ ne dɔ bea a mpa pa a ɛbɛn fam wɔ hɔ, ma nkokoaa nya nhwɛsoɔ pa ne ahobammbɔ.',
      crecheHighlight: '7:00 AM anɔpa ntɛm · Mpa a ɛbɛn fam',
      nurseryTitle: 'Montessori Nursery',
      nurseryDesc:
        'Adesua a ɛma ahofadie wɔ fie nneɛma yɛ mu, nsaano kasadwini nkrataa, ne nkontabuo ahyɛaseɛ.',
      nurseryHighlight: 'Dɔnhwere 3 dwumadi · Aduane nom & obu',
      kgTitle: 'Kindergarten (KG1 & KG2)',
      kgDesc:
        'Nkontabuo a ɛkɔ akyiri de golden beads, akenkan pa, amammerɛ adesua, ne primary kɔ siesie.',
      kgHighlight: 'Golden Beads Nkontabuo · Akenkan pa',
    },
    admissions: {
      badge: 'Nsra & Abusua Nhyehyɛeɛ • Yɛregye Mmofra Daa',
      headline: 'Akwankyerɛ pa ne obu ma w’abofra bɛka yɛn ho.',
      description:
        'Yɛnim sɛ sukuu pa a wobɛpaw ama w’abofra yɛ abusua asɛm a ɛho hia pa ara. Yɛwɔ ahyɛaseɛ kwan a ɛyɛ mmerɛw, asɛm a emu da hɔ, ne bɔkɔɔ adesua a ɛnhyɛ abofra no so.',
      feeNoticeTitle: 'Krataa Ho Ka Asɛm:',
      feeNoticeText:
        'Sukuu krataa a wubegye no ka yɛ GH₵100 (ɛfa nkrataa nhyehyɛeɛ ne akwahosan ho). Sukuu ka ne nnuane nhyehyɛeɛ nyinaa, yɛbɛka ho asɛm akyerɛ wo bere a wobɛba abɛhwɛ sukuu no.',
      stepsTitle: 'Adesua mu Kɔ Akwankyerɛ 4',
      stepsSubtitle: 'Efi Nkɔmmɔdi Kansi Anɔpa a Odzi Kan',
      step1Title: 'Nkɔmmɔdi & Gyinapɛn Hwehwɛ',
      step1Time: 'Da 1 · Nkitahodi Ntɛm',
      step1Desc:
        'Frɛ yɛn wɔ WhatsApp, telefon, anaa Intanɛt so na hu sɛ baabi da hɔ ma w’abofra mfeɛ a wadi no.',
      step2Title: 'Bɛhwɛ Sukuudan Mu Nkyerɛkyerɛ',
      step2Time: 'Nda 2–4 · Simma 30 Ahwɛsoɔ',
      step2Desc:
        'Bra Santa Maria abɛhwɛ yɛn sukuu. Hu sɛnea mmofra no resua adeɛ anɔpa dɔnhwere 9:00 AM, hyia akyerɛkyerɛfoɔ, na hwɛ adidie ne nna mpa no.',
      step3Title: 'Krataa Yɛ & Akwahosan Asɛm',
      step3Time: 'Nda 5–7 · Sukuu Krataa Nhyehyɛeɛ',
      step3Desc:
        'Gye sukuu nkrataa (GH₵100), fa w’abofra ayaresabea nhoma ne nnuane a ɔnni ho kwan kɔma akyerɛkyerɛfoɔ.',
      step4Title: 'Bɔkɔɔ a Abofra no De Bɛba Sukuu',
      step4Time: 'Nnawɔtwe 1 · Adesua Foforɔ Ahyɛaseɛ',
      step4Desc:
        'Adesua ahyɛaseɛ a asomdwoeɛ wɔ mu a ɔkyerɛkyerɛfoɔ ne awofoɔ bom siesie sɛnea abofra no remmɔ hu.',
      deskTitle: 'Nsra & Adwumayɛbea Dwumadibea',
      deskDesc:
        'Wopɛ sɛ wo ne obi kasa ntɛm? Yɛn panin a ɔhwɛ nsra so wɔ hɔ wɔ telefon ne WhatsApp so (7:00 AM – 4:00 PM).',
      tabInquiry: 'Bisa Nsɛm / Kyerɛ Pɛ',
      tabTour: 'Fa Da To Hɔ Bɛhwɛ Sukuu No',
      formTitleInquiry: 'Kyerɛ Wo Pɛ & Gye Sukuu Ho Nsɛm',
      formTitleTour: 'Fa Da To Hɔ Bɛhwɛ Anɔpa Adesua',
      formDescInquiry:
        'Hyehyɛ nkrataa tiawa yi na wo ne yɛn akwankyerɛfoɔ nkasa na hu sɛ baabi da hɔ ma w’abofra.',
      formDescTour:
        'Bra Santa Maria anɔpa dɔnhwere 3 adesua berɛ mu na bɛhwɛ sɛnea mmofra no suani wɔ ahofadie mu.',
      parentNameLabel: 'Ɔwofoɔ / Ɔhwɛfoɔ Din *',
      phoneLabel: 'Telefon / WhatsApp Nɔmba *',
      childNameLabel: 'Abofra Din (Sɛ Wopɛ A)',
      childAgeLabel: 'Abofra no Mfeɛ a Wadi Seesei',
      stageLabel: 'Gyinapɛn a Wopɛ sɛ Ɔkɔ *',
      submitInquiry: 'Mane Nsɛm No & Frɛ Wɔ WhatsApp So',
      submitTour: 'Fa Da To Hɔ Wɔ WhatsApp So',
      dossierTitle: 'Sukuu Krataa & Nsra Nhoma',
      dossierDesc: 'Ɛfa nkrataa nhoma, akwahosan asɛm, ne sukuu ahyɛaseɛ nhwɛsoɔ ho.',
      afterCareLabel: 'Yɛpɛ anwummerɛ nhwɛsoɔ kɔsi dɔnhwere 4:00 PM ma awofoɔ a wɔyɛ adwuma.',
    },
    cultureNotice: {
      banner: 'Twi (Akan) • Akwaaba Santa Maria Kurom',
    },
  },
};

/**
 * Returns translated string dictionary for the selected language
 */
export function getTranslations(lang: Language = 'en'): TranslationDictionary {
  return TRANSLATIONS[lang] || TRANSLATIONS.en;
}
