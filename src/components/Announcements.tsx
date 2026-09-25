import { motion } from 'framer-motion';
import {
  Bell,
  ChevronRight,
  Info,
  AlertCircle,
  RefreshCw,
} from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { translations } from '@/i18n/translations';
import { SectionHeading } from './SectionHeading';

const typeConfig = {
  info: {
    icon: Info,
    color: 'text-apl-gold-dark',
    bg: 'bg-apl-gold/10',
    border: 'border-apl-gold/20',
  },
  important: {
    icon: AlertCircle,
    color: 'text-apl-saffron',
    bg: 'bg-apl-saffron/10',
    border: 'border-apl-saffron/20',
  },
  update: {
    icon: RefreshCw,
    color: 'text-apl-saffron',
    bg: 'bg-apl-saffron/5',
    border: 'border-apl-saffron/15',
  },
};

export function Announcements() {
  const { lang } = useLanguage();
  const t = translations[lang].announcements;

  // Registration announcement
  const registrationAnnouncement = {
    id: 'registration-2026',
    type: 'important' as const,
    date: '2026-10-01',

    text:
      'Registration will be open from 1 October 2026 to 5 October 2026. Please complete your registration within the given dates. Registration will be closed after 5 October 2026.',

    textHi:
      'पंजीकरण 1 अक्टूबर 2026 से 5 अक्टूबर 2026 तक खुले रहेंगे। कृपया निर्धारित तिथियों के भीतर अपना पंजीकरण पूरा करें। 5 अक्टूबर 2026 के बाद पंजीकरण बंद कर दिए जाएंगे।',
  };

  const announcementList = [registrationAnnouncement];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-apl-bg-warm border-y border-apl-line">
      <div className="max-w-4xl mx-auto">

        <SectionHeading
          en={t.heading}
          hi={t.heading}
          subEn={t.subheading}
          subHi={t.subheading}
          lang={lang}
        />

        {/* Announcement Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 card-bright rounded-2xl overflow-hidden"
        >

          {/* Header */}
          <div className="flex items-center gap-3 px-5 py-3 border-b border-apl-line bg-apl-saffron/5">
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <Bell className="w-5 h-5 text-apl-saffron" />
            </motion.div>

            <span
              className={`text-apl-saffron text-sm font-600 tracking-[0.15em] uppercase ${
                lang === 'hi' ? 'font-hindi' : ''
              }`}
            >
              {lang === 'en' ? 'Announcements' : 'सूचनाएँ'}
            </span>
          </div>

          {/* Announcement List */}
          <div className="flex flex-col">
            {announcementList.map((ann, i) => {
              const config = typeConfig[ann.type];
              const Icon = config.icon;

              return (
                <motion.div
                  key={ann.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.3 + i * 0.1,
                  }}
                  className="group flex items-start gap-4 p-5 border-b border-apl-line last:border-b-0 hover:bg-apl-saffron/5 transition-colors"
                >

                  {/* Icon */}
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-xl ${config.bg} ${config.border} border flex items-center justify-center`}
                  >
                    <Icon
                      className={`w-5 h-5 ${config.color}`}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">

                    {/* Announcement Text */}
                    <p
                      className={`text-apl-ink text-sm md:text-base leading-relaxed ${
                        lang === 'hi' ? 'font-hindi' : ''
                      }`}
                    >
                      {lang === 'en'
                        ? ann.text
                        : ann.textHi}
                    </p>

                    {/* Registration Dates Highlight */}
                    <div className="mt-4 flex flex-wrap items-center gap-2">

                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full bg-apl-saffron/10 border border-apl-saffron/20 text-apl-saffron text-xs font-600 ${
                          lang === 'hi' ? 'font-hindi' : ''
                        }`}
                      >
                        {lang === 'en'
                          ? 'Registration: 1 Oct – 5 Oct 2026'
                          : 'पंजीकरण: 1 अक्टूबर – 5 अक्टूबर 2026'}
                      </span>

                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 text-xs font-600 ${
                          lang === 'hi' ? 'font-hindi' : ''
                        }`}
                      >
                        {lang === 'en'
                          ? 'Closes after 5 October'
                          : '5 अक्टूबर के बाद बंद'}
                      </span>

                    </div>

                    {/* Date + Type */}
                    <div className="flex items-center gap-2 mt-3">

                      <span className="text-apl-muted text-xs">
                        {new Date(
                          ann.date
                        ).toLocaleDateString(
                          lang === 'en'
                            ? 'en-IN'
                            : 'hi-IN',
                          {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          }
                        )}
                      </span>

                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${config.bg} ${config.color} font-600 uppercase tracking-wide`}
                      >
                        {lang === 'en'
                          ? 'Important'
                          : 'महत्वपूर्ण'}
                      </span>

                    </div>
                  </div>

                  {/* Arrow */}
                  <ChevronRight
                    className="w-5 h-5 text-apl-muted flex-shrink-0 mt-2 group-hover:text-apl-saffron group-hover:translate-x-1 transition-all"
                  />

                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
