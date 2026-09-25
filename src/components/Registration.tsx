import { motion } from 'framer-motion';
import { ShieldCheck, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { translations } from '@/i18n/translations';
import { RegisterButton } from './RegisterButton';
import { SectionHeading } from './SectionHeading';

export function Registration() {
  const { lang } = useLanguage();
  const t = translations[lang].registration;

  return (
    <section
      id="registration"
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">

        <SectionHeading
          en={t.heading}
          hi={t.heading}
          lang={lang}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden gradient-saffron-bright glow-orange-strong"
        >

          {/* Decorative shapes */}
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-white/10 rounded-full blur-xl" />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-apl-gold/20 rounded-full blur-xl" />

          <div className="relative">

            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm mb-6">
              <ShieldCheck className="w-8 h-8 text-apl-white" />
            </div>

            <p
              className={`text-apl-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed ${
                lang === 'hi' ? 'font-hindi' : ''
              }`}
            >
              {t.desc}
            </p>

            {/* Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

              <RegisterButton
                label={t.button}
                size="xl"
                variant="white"
                className="w-full sm:w-auto"
              />

            </div>

            <div className="flex items-center justify-center gap-2 text-apl-white/70 mt-5">

              <ExternalLink className="w-4 h-4 text-apl-gold-light" />

              <span
                className={`text-sm font-600 ${
                  lang === 'hi' ? 'font-hindi' : ''
                }`}
              >
                {t.portal}
              </span>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}