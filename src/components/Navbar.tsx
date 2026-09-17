import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { translations } from '@/i18n/translations';
import { NAV_SECTIONS, REGISTRATION_URL } from '@/data/constants';
import { RegisterButton } from './RegisterButton';

export function Navbar() {
  const { lang, toggle } = useLanguage();
  const t = translations[lang].nav;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.5,
          ease: 'easeOut',
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass shadow-lg shadow-apl-saffron/10'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* ================= LOGO ================= */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 group flex-shrink-0"
            >
              <div className="relative flex items-center justify-center">
                <img
                  src="/images/apl-logo.png"
                  alt="Anjana Premier League"
                  className="w-12 h-12 lg:w-14 lg:h-14 object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col leading-none">
                <span
                  className={`font-display font-700 text-lg lg:text-xl text-apl-ink tracking-wide ${
                    lang === 'hi' ? 'font-hindi' : ''
                  }`}
                >
                  {lang === 'en'
                    ? 'AANJANA PREMIER LEAGUE'
                    : 'आँजणा प्रीमियर लीग'}
                </span>

                <span className="text-apl-saffron-dark text-[10px] lg:text-xs font-600 tracking-[0.2em] uppercase mt-1">
                  Season 5
                </span>
              </div>
            </button>

            {/* ================= DESKTOP NAV ================= */}
            <div className="hidden lg:flex items-center gap-1 flex-shrink-0">
              {NAV_SECTIONS.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleNavClick(section.id)}
                  className="relative px-4 py-2 text-sm font-600 text-apl-ink-2 hover:text-apl-saffron transition-colors group whitespace-nowrap"
                >
                  {t[section.key]}

                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] gradient-saffron group-hover:w-3/4 transition-all duration-300" />
                </button>
              ))}
            </div>

            {/* ================= RIGHT SIDE ================= */}
            <div className="flex items-center gap-2 lg:gap-3 flex-shrink-0">

              {/* Language Button */}
              <button
                onClick={toggle}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg glass text-sm font-600 text-apl-ink-2 hover:text-apl-saffron transition-colors whitespace-nowrap"
              >
                <Globe className="w-4 h-4 flex-shrink-0" />

                <span
                  className={
                    lang === 'en' ? 'text-apl-saffron' : ''
                  }
                >
                  EN
                </span>

                <span className="text-apl-muted-light">
                  |
                </span>

                <span
                  className={
                    lang === 'hi'
                      ? 'text-apl-saffron font-hindi'
                      : 'font-hindi'
                  }
                >
                  हिंदी
                </span>
              </button>

              {/* Register Button */}
              <div className="hidden sm:block flex-shrink-0 min-w-[210px]">
                <RegisterButton
                  label={t.registerTeam}
                  size="md"
                />
              </div>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2 text-apl-ink"
                aria-label="Menu"
              >
                {menuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-apl-ink/40 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                type: 'spring',
                damping: 25,
                stiffness: 200,
              }}
              className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-apl-white border-l border-apl-line-2 flex flex-col pt-20 pb-6 px-6 shadow-2xl"
            >

              {/* Mobile Navigation */}
              <div className="flex flex-col gap-1">
                {NAV_SECTIONS.map((section, i) => (
                  <motion.button
                    key={section.id}
                    initial={{
                      opacity: 0,
                      x: 30,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: i * 0.05,
                    }}
                    onClick={() =>
                      handleNavClick(section.id)
                    }
                    className={`text-left px-4 py-3.5 rounded-xl text-base font-600 text-apl-ink-2 hover:text-apl-saffron hover:bg-apl-saffron/5 transition-all ${
                      lang === 'hi'
                        ? 'font-hindi'
                        : ''
                    }`}
                  >
                    {t[section.key]}
                  </motion.button>
                ))}
              </div>

              {/* Mobile Register */}
              <div className="mt-auto pt-6 border-t border-apl-line">
                <a
                  href={REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center w-full px-6 py-4 rounded-xl gradient-saffron-bright text-apl-white font-display font-600 glow-orange whitespace-nowrap ${
                    lang === 'hi'
                      ? 'font-hindi'
                      : ''
                  }`}
                >
                  {t.registerTeam}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
