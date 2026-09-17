import { motion } from 'framer-motion';
import { Download, Smartphone, Users, Trophy } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { translations } from '@/i18n/translations';

export function Highlights() {
  const { lang } = useLanguage();
  const t = translations[lang].highlights;

  const cards = [
    { icon: Download, title: t.season5, subtitle: t.season5Sub, accent: 'from-apl-saffron to-apl-deep-orange', hindi: lang === 'hi' },
    { icon: Smartphone, title: t.kamalpura, subtitle: t.kamalpuraSub, accent: 'from-apl-gold to-apl-saffron', hindi: lang === 'hi' },
    { icon: Users, title: t.teamReg, subtitle: t.teamRegSub, accent: 'from-apl-saffron to-apl-gold', hindi: lang === 'hi' },
    { icon: Trophy, title: t.pride, subtitle: t.prideSub, accent: 'from-apl-deep-orange to-apl-saffron', hindi: lang === 'hi' },
  ];

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-apl-white border-y border-apl-line">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative card-bright card-bright-hover rounded-2xl p-6 overflow-hidden cursor-default"
            >
              <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${card.accent} opacity-0 group-hover:opacity-15 blur-2xl transition-opacity duration-500`} />

              <div className="relative">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${card.accent} mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <card.icon className="w-6 h-6 text-apl-white" />
                </div>
                <h3 className={`font-display font-700 text-lg text-apl-ink mb-1 leading-tight ${card.hindi ? 'font-hindi' : ''}`}>
                  {card.title}
                </h3>
                <p className={`text-apl-muted text-sm ${card.hindi ? 'font-hindi' : ''}`}>
                  {card.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}