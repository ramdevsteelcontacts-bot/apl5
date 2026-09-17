import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { translations } from '@/i18n/translations';
import { RegisterButton } from './RegisterButton';

export function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang].hero;

  const scrollToRules = () => {
    document.getElementById('rules')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background: bright warm gradient sky */}
      <div className="absolute inset-0 z-0">
        {/* Warm gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFF7ED] via-[#FFE4C4] to-[#FFD89E]" />

        {/* Floodlight glows */}
        <div className="absolute top-[-10%] left-1/4 w-[600px] h-[400px] bg-apl-saffron/20 rounded-full blur-[120px] animate-float-slow" />
        <div className="absolute top-[-5%] right-1/4 w-[500px] h-[300px] bg-apl-gold/25 rounded-full blur-[100px] animate-float-medium" />
        <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-apl-saffron-light/15 rounded-full blur-[150px]" />

        {/* Light rays from top */}
        <div className="absolute top-0 left-1/4 w-[2px] h-screen bg-gradient-to-b from-apl-saffron/30 to-transparent rotate-12" />
        <div className="absolute top-0 right-1/3 w-[2px] h-screen bg-gradient-to-b from-apl-gold/25 to-transparent -rotate-12" />
        <div className="absolute top-0 left-1/2 w-[1px] h-screen bg-gradient-to-b from-apl-saffron/20 to-transparent" />

        {/* Stadium grid overlay */}
        <div className="absolute inset-0 stadium-grid-light opacity-50" />

        {/* Floating confetti particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: i % 3 === 0 ? '#FF7A00' : i % 3 === 1 ? '#FFB300' : '#FF9933',
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}

        {/* Floating cricket ball */}
        <motion.div
          className="absolute right-[8%] top-[22%] w-20 h-20 rounded-full bg-gradient-to-br from-[#C0392B] to-[#7B241C] shadow-2xl border-2 border-[#922B21] hidden md:block"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 360],
          }}
          transition={{
            y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 8, repeat: Infinity, ease: 'linear' },
          }}
        >
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-[#641E16]" />
          <div className="absolute top-1/2 left-1/4 w-3 h-6 border-2 border-[#641E16] rounded-full -translate-y-1/2 rotate-[20deg]" />
          <div className="absolute top-1/2 right-1/4 w-3 h-6 border-2 border-[#641E16] rounded-full -translate-y-1/2 -rotate-[20deg]" />
        </motion.div>

        {/* Floating bat icon shadow */}
        <motion.div
          className="absolute left-[6%] bottom-[20%] w-16 h-16 rounded-full bg-apl-gold/20 blur-xl hidden md:block"
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4"
        >
          <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass-orange text-apl-saffron-dark text-sm md:text-base font-600 tracking-[0.2em] uppercase ${lang === 'hi' ? 'font-hindi' : ''}`}>
            <span className="w-2 h-2 rounded-full bg-apl-saffron animate-pulse" />
            {lang === 'en' ? t.title : 'आँजना प्रीमियर लीग'}
          </span>
        </motion.div>

        {/* Season - Huge */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className={`font-display font-700 text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-none mb-6 ${lang === 'hi' ? 'font-hindi' : ''}`}
        >
          <span className="block text-apl-ink">{lang === 'en' ? 'APL' : 'एपीएल'}</span>
          <span className="block gradient-text">
            {lang === 'en' ? 'SEASON 5' : 'सीजन 5'}
          </span>
        </motion.h1>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-4"
        >
          <span className={`inline-flex items-center gap-2 text-apl-ink-2 text-lg md:text-xl font-600 tracking-[0.15em] ${lang === 'hi' ? 'font-hindi' : ''}`}>
            <span className="w-2 h-2 rounded-full bg-apl-saffron animate-pulse" />
            {t.location}
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className={`text-apl-ink-3 text-base md:text-lg mb-10 max-w-xl mx-auto ${lang === 'hi' ? 'font-hindi' : ''}`}
        >
          {t.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <RegisterButton label={t.registerTeam} size="xl" className="w-full sm:w-auto" />

          <motion.button
            onClick={scrollToRules}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full sm:w-auto px-8 py-5 rounded-xl bg-apl-white text-apl-ink font-display font-600 text-lg shadow-lg hover:shadow-xl border border-apl-line-2 transition-all flex items-center justify-center gap-2 ${lang === 'hi' ? 'font-hindi' : ''}`}
          >
            {t.viewRules}
            <ArrowRight className="w-5 h-5 text-apl-saffron" />
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-apl-ink-3"
      >
        <span className={`text-xs tracking-[0.2em] uppercase font-600 ${lang === 'hi' ? 'font-hindi' : ''}`}>{t.scrollDown}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-apl-saffron" />
        </motion.div>
      </motion.div>

      {/* Bottom gradient transition to white */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-apl-bg to-transparent z-10 pointer-events-none" />
    </section>
  );
}
