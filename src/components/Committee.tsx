import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { translations } from '@/i18n/translations';
import { committeeMembers } from '@/data/committee';
import { SectionHeading } from './SectionHeading';

export function Committee() {
  const { lang } = useLanguage();
  const t = translations[lang].committee;

  return (
    <section
      id="committee"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-apl-bg-warm"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          en={t.heading}
          hi={t.heading}
          subEn={t.subheading}
          subHi={t.subheading}
          lang={lang}
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {committeeMembers.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{
                duration: 0.4,
                delay: Math.min(i * 0.05, 0.5),
              }}
              whileHover={{ y: -6 }}
              className="group relative card-bright card-bright-hover rounded-2xl p-6 overflow-hidden"
            >
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-apl-saffron/8 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative flex flex-col items-center text-center">
                {/* Avatar */}
                <div className="relative mb-5">
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={
                        lang === 'en'
                          ? member.name
                          : member.nameHi
                      }
                      loading={i < 4 ? 'eager' : 'lazy'}
                      decoding="async"
                      className="w-32 h-32 rounded-full object-cover border-2 border-apl-saffron/30 group-hover:border-apl-saffron transition-colors"
                    />
                  ) : (
                    <div className="w-32 h-32 rounded-full bg-apl-surface-3 flex items-center justify-center border-2 border-apl-saffron/20 group-hover:border-apl-saffron transition-colors">
                      <User className="w-14 h-14 text-apl-saffron/60" />
                    </div>
                  )}

                  <div className="absolute inset-0 rounded-full bg-apl-saffron/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3
                  className={`font-display font-700 text-lg text-apl-ink mb-1 ${
                    lang === 'hi' ? 'font-hindi' : ''
                  }`}
                >
                  {lang === 'en' ? member.name : member.nameHi}
                </h3>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-apl-surface-3 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-apl-saffron" />

                  <span
                    className={`text-apl-saffron-dark text-xs font-600 ${
                      lang === 'hi' ? 'font-hindi' : ''
                    }`}
                  >
                    {lang === 'en'
                      ? member.responsibility
                      : member.responsibilityHi}
                  </span>
                </div>

                <p
                  className={`text-apl-muted text-sm leading-relaxed ${
                    lang === 'hi' ? 'font-hindi' : ''
                  }`}
                >
                  {lang === 'en'
                    ? member.description
                    : member.descriptionHi}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}