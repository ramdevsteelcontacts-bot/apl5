import { motion } from 'framer-motion';
import { Trophy, MapPin, Award, Users } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { translations } from '@/i18n/translations';
import { SectionHeading } from './SectionHeading';

export function TournamentInfo() {
  const { lang } = useLanguage();
  const t = translations[lang].tournamentInfo;

  const cards = [
    { icon: Trophy, label: t.tournament, value: t.tournamentVal },
    { icon: MapPin, label: t.venue, value: t.venueVal },
    { icon: Award, label: t.event, value: t.eventVal },
    { icon: Users, label: t.registration, value: t.registrationVal },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-apl-white">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          en={t.heading}
          hi={t.heading}
          subEn={t.subheading}
          subHi={t.subheading}
          lang={lang}
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex items-center gap-5 card-bright card-bright-hover rounded-2xl p-6"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-apl-surface-3 flex items-center justify-center group-hover:gradient-saffron-bright transition-all duration-300">
                <card.icon className="w-7 h-7 text-apl-saffron group-hover:text-apl-white transition-colors" />
              </div>
              <div>
                <p className={`text-apl-muted text-xs font-600 tracking-[0.15em] uppercase mb-1 ${lang === 'hi' ? 'font-hindi' : ''}`}>
                  {card.label}
                </p>
                <p className={`text-apl-ink font-display font-600 text-base md:text-lg ${lang === 'hi' ? 'font-hindi' : ''}`}>
                  {card.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
