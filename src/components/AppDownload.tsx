import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { SectionHeading } from './SectionHeading';

const APP_STORE_URL = 'https://apps.apple.com/us/app/aanjana-rakt-mitra/id6738098452';
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.upper.digital.arm&pcampaignid=web_share';

function AppDownload() {
  const { lang } = useLanguage();
  const isHindi = lang === 'hi';

  const heroHeadingEn = 'Get your ARM Code';
  const heroHeadingHi = 'अपना ARM कोड प्राप्त करें';

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-apl-bg-warm overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading en="Get Your ARM Code" hi="अपना ARM कोड प्राप्त करें" subEn="Every player participating in APL Season 5 is required to have an ARM Code." subHi="APL Season 5 में भाग लेने वाले प्रत्येक खिलाड़ी के लिए ARM कोड आवश्यक है।" lang={lang} />

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, delay: 0.1 }} whileHover={{ y: -4 }} className="mt-12 rounded-3xl overflow-hidden card-bright card-bright-hover">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">

            <div className="p-8 sm:p-10 lg:p-14">

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }} className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-apl-bg-warm border border-apl-line flex items-center justify-center p-2 shrink-0">
                  <img src="/images/arm/arm-logo.png" alt="Aanjana Rakt Mitra" loading="lazy" decoding="async" className="w-full h-full object-contain" />
                </div>
                <div>
                  <p className="font-display font-700 text-lg text-apl-ink">Aanjana Rakt Mitra</p>
                  <p className={"text-sm text-apl-muted " + (isHindi ? 'font-hindi' : '')}>
                    {isHindi ? 'मानव कल्याण के लिए एक पहल' : 'An initiative for humanity'}
                  </p>
                </div>
              </motion.div>

              <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.25 }} className={"font-display font-700 text-3xl sm:text-4xl lg:text-[42px] leading-tight text-apl-ink mb-5 " + (isHindi ? 'font-hindi' : '')}>
                {isHindi ? heroHeadingHi : heroHeadingEn}
              </motion.h3>

              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.35 }} className={"text-apl-muted text-base sm:text-lg leading-relaxed max-w-xl mb-8 " + (isHindi ? 'font-hindi' : '')}>
                {isHindi ? 'APL Season 5 में टीम रजिस्ट्रेशन के लिए प्रत्येक खिलाड़ी के पास ARM कोड होना अनिवार्य है। आंजणा रक्त मित्र ऐप डाउनलोड करें, अपना रजिस्ट्रेशन पूरा करें और अपना ARM कोड प्राप्त करें।' : 'An ARM Code is mandatory for every player registering for APL Season 5. Download the Aanjana Rakt Mitra App, complete your registration and get your ARM Code.'}
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.45 }} className="flex items-start gap-4 rounded-2xl bg-apl-bg-warm border border-apl-line p-5 mb-8">
                <div className="w-10 h-10 rounded-full bg-apl-saffron flex items-center justify-center text-xs font-700 text-apl-white shrink-0">ARM</div>
                <div>
                  <p className={"font-700 text-apl-ink " + (isHindi ? 'font-hindi' : '')}>
                    {isHindi ? 'टीम रजिस्ट्रेशन के लिए अनिवार्य' : 'Required for Team Registration'}
                  </p>
                  <p className={"text-sm text-apl-muted mt-1 leading-relaxed " + (isHindi ? 'font-hindi' : '')}>
                    {isHindi ? 'ऐप डाउनलोड करें और रजिस्ट्रेशन के बाद अपना ARM कोड प्राप्त करें।' : 'Download the app and get your ARM Code after completing registration.'}
                  </p>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.55 }}>
                <p className={"text-xs font-700 uppercase tracking-[0.16em] text-apl-muted mb-3 " + (isHindi ? 'font-hindi' : '')}>
                  {isHindi ? 'ऐप डाउनलोड करें' : 'Download the App'}
                </p>

                <div className="flex flex-wrap items-center gap-5">
                  <motion.a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" aria-label="Download Aanjana Rakt Mitra from App Store" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="inline-block">
                    <img src="/images/arm/app-store-badge.svg" alt="Download on the App Store" loading="lazy" decoding="async" className="h-14 w-auto" />
                  </motion.a>
                  <motion.a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" aria-label="Get Aanjana Rakt Mitra on Google Play" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="inline-block">
                    <img src="/images/arm/google-play-badge.png" alt="Get it on Google Play" loading="lazy" decoding="async" className="h-14 w-auto" />
                  </motion.a>
                </div>
              </motion.div>

            </div>

            <motion.div initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="relative flex items-center justify-center bg-apl-bg-warm border-t lg:border-t-0 lg:border-l border-apl-line px-6 py-10 sm:px-10 lg:px-12">
              <div className="w-full max-w-[480px]">
                <p className="text-xs font-700 uppercase tracking-[0.2em] text-apl-saffron text-center lg:text-left mb-4">ARM Mobile App</p>
                <img src="/images/arm/arm-app-screens.png" alt="Aanjana Rakt Mitra Mobile App" loading="lazy" decoding="async" className="w-full h-auto mx-auto" />
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AppDownload;