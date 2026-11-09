import React, { useState } from 'react';
import { Quote, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const RisingSunTestimonials: React.FC = () => {
  const { language } = useLanguage();
  const [showAllStories, setShowAllStories] = useState(false);

  const testimonials = [
    {
      quoteEn:
        '“The calm and attentive care in the Crèche room gave me immense peace of mind. My daughter transitioned into the Nursery with so much self-confidence and natural courtesy.”',
      quoteTw:
        '“Sɛnea wɔhwɛ me ba no wɔ Crèche nna dan no mu no maa me koma tɔɔ me yam. Bere a ɔkɔɔ Nursery no, na ɔwɔ obu ne ahofadie pa ara.”',
      author: 'Mrs. Abena Brobbey Andoh',
      roleEn: 'Parent of 2 Learners',
      roleTw: 'Mmofra 2 Maame',
      community: 'SANTA MARIA',
    },
    {
      quoteEn:
        '“As a pediatrician, hygiene and respectful early childhood rhythm were non-negotiable for me. Queensbury Montessori has truly exceeded our highest expectations right here in Santa Maria.”',
      quoteTw:
        '“Sɛ́ oduruyɛfoɔ no, apɔmuden ne ahobammbɔ na ɛho hia me kɛseɛ. Queensbury Montessori ayɛ nea me yam pɛ nyinaa ma me ba no wɔ Santa Maria.”',
      author: 'Dr. Evelyn Mensah',
      roleEn: 'Parent & Medical Consultant',
      roleTw: 'Maame & Dɔkota',
      community: 'KWASHIEMAN',
    },
    {
      quoteEn:
        '“When searching for a school near Sowutuom and Kwashieman, we wanted authentic Montessori hands-on apparatus, not just rote memorization. The Golden Beads mathematics foundation here is unmatched.”',
      quoteTw:
        '“Bere a yɛrehwehwɛ sukuu a ɛbɛn Sowutuom no, na yɛpɛ nsa ano nneɛma pa a ɛma abofra hu nneɛma ankasa. Akontaabu pa a wɔkyerɛ wɔ ha no yɛ pɛ.”',
      author: 'Mr. Nicholas Agban',
      roleEn: 'Parent of Nursery Learner',
      roleTw: 'Agya & Injinia',
      community: 'SOWUTUOM',
    },
    {
      quoteEn:
        '“The teachers are gentle, patient, and treat each child as an individual. The hot on-site meals and safe gate procedures make parenting so much easier during our workdays.”',
      quoteTw:
        '“Akyerɛkyerɛfoɔ no wɔ boasetɔ kɛseɛ na wɔpɛ mmofra asɛm. Aduane pa a wɔnoa ma mmofra no ma awofoɔ nya ahotɔ kɛseɛ.”',
      author: 'Mrs. Grace Owusu-Ansah',
      roleEn: 'Parent of Kindergarten Scholar',
      roleTw: 'Kindergarten Maame',
      community: 'AUNTIE AKU',
    },
  ];

  const displayedStories = showAllStories ? testimonials : testimonials.slice(0, 3);

  return (
    <section className="w-full bg-[#0d176d] text-white py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Centered Heading */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-[#f95716] uppercase font-mono block mb-2">
            {language === 'tw' ? 'SANTA MARIA MMUSUA ADANSEƐ' : 'COMMUNITY TESTIMONIALS'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            {language === 'tw' ? 'Nea Mmusua Ka Fa Queensbury Ho' : 'What Families Say About Queensbury'}
          </h2>
        </div>

        {/* 3-Cards Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {displayedStories.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#132087] rounded-3xl p-8 sm:p-9 shadow-lg border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Stylized Double Quotes */}
                <div className="font-serif text-5xl font-extrabold text-[#f95716] leading-none mb-6 select-none opacity-90">
                  ””
                </div>

                <p className="text-white/85 text-base sm:text-[15px] italic leading-relaxed mb-8">
                  {language === 'tw' ? t.quoteTw : t.quoteEn}
                </p>
              </div>

              {/* Author Info + Community Badge */}
              <div className="pt-6 border-t border-white/15 flex items-center justify-between">
                <div>
                  <h4 className="font-sans font-bold text-white text-sm sm:text-base tracking-tight">
                    {t.author}
                  </h4>
                  <p className="text-white/60 text-xs">
                    {language === 'tw' ? t.roleTw : t.roleEn}
                  </p>
                </div>

                <span className="px-3 py-1 rounded-full bg-white/10 text-white/85 text-[11px] font-mono font-bold tracking-wider uppercase border border-white/15">
                  {t.community}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Read More Stories Centered Pill Button */}
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => setShowAllStories(!showAllStories)}
            className="px-8 py-3.5 rounded-full border border-white/30 text-white font-semibold text-sm tracking-wide hover:bg-white hover:text-[#0d176d] transition-all duration-300 cursor-pointer"
          >
            {showAllStories
              ? language === 'tw'
                ? 'Pata So'
                : 'Show Fewer Stories'
              : language === 'tw'
              ? 'Kenkan Asɛm Pii'
              : 'Read More Stories'}
          </button>
        </div>
      </div>
    </section>
  );
};
