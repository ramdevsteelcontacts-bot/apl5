import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionHeadingProps {
  en: string;
  hi: string;
  subEn?: string;
  subHi?: string;
  lang: 'en' | 'hi';
  align?: 'center' | 'left';
  dark?: boolean;
}

export function SectionHeading({ en, hi, subEn, subHi, lang, align = 'center', dark = false }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`flex flex-col gap-3 ${align === 'center' ? 'items-center text-center' : 'items-start text-left'}`}
    >
      <div className="flex items-center gap-3">
        <div className="h-[2px] w-8 bg-gradient-to-r from-transparent to-apl-saffron" />
        <span className={`text-apl-saffron text-sm font-semibold tracking-[0.2em] uppercase ${lang === 'hi' ? 'font-hindi' : ''}`}>
          APL Season 5
        </span>
        <div className="h-[2px] w-8 bg-gradient-to-l from-transparent to-apl-saffron" />
      </div>
      <h2 className={`font-display font-700 text-4xl md:text-5xl lg:text-6xl leading-tight ${dark ? 'text-apl-white' : 'text-apl-ink'} ${lang === 'hi' ? 'font-hindi' : ''}`}>
        <span className="gradient-text">{lang === 'en' ? en : hi}</span>
      </h2>
      {subEn && subHi && (
        <p className={`text-base md:text-lg max-w-2xl ${dark ? 'text-apl-white/70' : 'text-apl-muted'} ${lang === 'hi' ? 'font-hindi' : ''}`}>
          {lang === 'en' ? subEn : subHi}
        </p>
      )}
    </motion.div>
  );
}
