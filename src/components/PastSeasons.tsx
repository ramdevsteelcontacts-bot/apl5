import { motion } from 'framer-motion';
import { Trophy, Medal, Award } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { pastSeasons } from '@/data/pastSeasons';
import { SectionHeading } from './SectionHeading';

export function PastSeasons() {
  const { lang } = useLanguage();

  return (
    <section id="past-seasons" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-apl-bg-warm">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          en="SEASON HISTORY"
          hi="पिछले सीज़न के परिणाम"
          subEn="Champions from previous editions of Aanjana Premier League"
          subHi="आँजना प्रीमियर लीग के पिछले संस्करणों के विजेता"
          lang={lang}
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pastSeasons.map((s, i) => (
            <motion.div
              key={s.season}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative card-bright card-bright-hover rounded-2xl p-6 overflow-hidden"
            >
              <div className="relative">
                <div className="text-center mb-5">
                  <span className="inline-block px-4 py-1 rounded-full bg-apl-ink text-apl-white text-sm font-700 tracking-wide">
                    SEASON {s.season}
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shrink-0 shadow-md">
                      <Trophy className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-apl-muted font-600">{lang === 'hi' ? 'विजेता' : 'WINNER'}</p>
                      <p className="text-apl-ink font-700 text-sm leading-tight">{s.winner}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center shrink-0 shadow-md">
                      <Medal className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-apl-muted font-600">{lang === 'hi' ? 'उपविजेता' : 'RUNNER-UP'}</p>
                      <p className="text-apl-ink font-700 text-sm leading-tight">{s.runnerUp}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-700 flex items-center justify-center shrink-0 shadow-md">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-apl-muted font-600">{lang === 'hi' ? 'तीसरा स्थान' : '3RD PLACE'}</p>
                      <p className="text-apl-ink font-700 text-sm leading-tight">{s.thirdPlace}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
