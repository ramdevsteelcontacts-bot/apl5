import { motion } from 'framer-motion';
import { ArrowUp, ArrowRight, Trophy } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { translations } from '@/i18n/translations';
import { NAV_SECTIONS, REGISTRATION_URL } from '@/data/constants';

export function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang].footer;
  const nav = translations[lang].nav;

  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-20 pb-8 px-4 sm:px-6 lg:px-8 bg-apl-navy overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-apl-saffron/15 rounded-full blur-[45px]" />
<div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] bg-apl-gold/8 rounded-full blur-[45px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Top CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl p-8 md:p-12 mb-16 text-center relative overflow-hidden gradient-saffron-bright glow-orange-strong"
        >
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-white/10 rounded-full blur-xl" />

          <div className="relative">
            <h2
              className={`font-display font-700 text-3xl md:text-4xl text-apl-white mb-4 ${
                lang === 'hi' ? 'font-hindi' : ''
              }`}
            >
              {t.register}
            </h2>

            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-apl-white text-apl-saffron-dark font-display font-600 shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              {t.register}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>


        {/* Main footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div className="flex flex-col items-start">

            {/* APL Logo */}
            <div className="flex items-center gap-4 mb-5">

              <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
                <img
                  src="/images/apl-logo.png"
                  alt="Aanjana Premier League Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              <div>
                <span className="font-display font-700 text-2xl text-apl-white tracking-wide">
                  {t.apl}
                </span>

                <p
                  className={`text-apl-gold text-xs font-600 tracking-[0.15em] uppercase ${
                    lang === 'hi' ? 'font-hindi' : ''
                  }`}
                >
                  {t.full}
                </p>
              </div>

            </div>

            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full bg-apl-saffron/20 text-apl-saffron-light text-sm font-600">
                {t.season}
              </span>
            </div>

            <p
              className={`text-apl-white/60 text-sm ${
                lang === 'hi' ? 'font-hindi' : ''
              }`}
            >
              {t.location}
            </p>

            <p
              className={`text-apl-white/40 text-sm mt-2 max-w-xs ${
                lang === 'hi' ? 'font-hindi' : ''
              }`}
            >
              {t.tagline}
            </p>
          </div>


          {/* Quick links */}
          <div className="flex flex-col items-start md:items-center">
            <h4
              className={`font-display font-600 text-apl-white text-sm tracking-[0.15em] uppercase mb-5 ${
                lang === 'hi' ? 'font-hindi' : ''
              }`}
            >
              {t.quickLinks}
            </h4>

            <div className="flex flex-col gap-3">
              {NAV_SECTIONS.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleNavClick(section.id)}
                  className={`text-apl-white/60 hover:text-apl-saffron text-sm transition-colors text-left md:text-center ${
                    lang === 'hi' ? 'font-hindi' : ''
                  }`}
                >
                  {nav[section.key]}
                </button>
              ))}
            </div>
          </div>


          {/* Trophy badge */}
          <div className="flex flex-col items-start md:items-end">
            <div className="glass-dark rounded-2xl p-6 flex flex-col items-center text-center">

              <Trophy className="w-10 h-10 text-apl-gold mb-3" />

              <span className="font-display font-700 text-xl gradient-text-gold">
                APL
              </span>

              <span className="text-apl-white text-sm font-600 mt-1">
                SEASON 5
              </span>

              <span
                className={`text-apl-white/50 text-xs mt-1 ${
                  lang === 'hi' ? 'font-hindi' : ''
                }`}
              >
                {t.location}
              </span>

            </div>
          </div>

        </div>


        {/* Management credit */}
        <div className="text-center pb-6">
          <p className="text-apl-gold text-sm md:text-base font-700 tracking-[0.005em] uppercase">
          Managed by- Praveen Patel Siddheshwar
          </p>
        </div>


        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">

          <p
            className={`text-apl-white/50 text-sm ${
              lang === 'hi' ? 'font-hindi' : ''
            }`}
          >
            &copy; {t.copyright}
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-apl-white/50 hover:text-apl-saffron text-sm font-600 transition-colors group"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            {lang === 'en' ? 'Back to Top' : 'ऊपर जाएँ'}
          </button>

        </div>

      </div>
    </footer>
  );
}