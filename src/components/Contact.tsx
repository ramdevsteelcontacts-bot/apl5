import { motion } from 'framer-motion';
import {
  Phone,
  MessageCircle,
  MapPin,
  FileQuestion,
  ExternalLink,
} from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { translations } from '@/i18n/translations';
import { CONTACT } from '@/data/constants';
import { SectionHeading } from './SectionHeading';

const CALL_NUMBERS = [
  '7568436406',
  '9783295125',
  '7728004949',
  '9672129939',
  '8875068394',
  '9052183891',
  '7339710025',
];

const FORM_INQUIRY_NUMBERS = [
  '9052183891',
  '9672129939',
];

export function Contact() {
  const { lang } = useLanguage();
  const t = translations[lang].contact;

  const isHindi = lang === 'hi';

  return (
    <section
      id="contact"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-apl-white"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-apl-saffron/6 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        <SectionHeading
          en={t.heading}
          hi={t.heading}
          subEn={t.subheading}
          subHi={t.subheading}
          lang={lang}
        />

        {/* =====================================================
            TOP — CALL NOW FULL WIDTH
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -5 }}
          className="group relative mt-12 card-bright card-bright-hover rounded-2xl p-7 md:p-9 text-center overflow-hidden"
        >
          {/* Glow */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-gradient-to-br from-apl-saffron to-apl-deep-orange opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500" />

          <div className="relative">

            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-apl-saffron to-apl-deep-orange mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-8 h-8 text-white" />
            </div>

            {/* Title */}
            <h3
              className={`font-display font-700 text-xl md:text-2xl text-apl-ink mb-3 ${
                isHindi ? 'font-hindi' : ''
              }`}
            >
              {isHindi ? 'कॉल करें' : 'Call Now'}
            </h3>

            {/* Description */}
            <p
              className={`text-apl-muted text-sm md:text-base mb-7 leading-relaxed max-w-2xl mx-auto ${
                isHindi ? 'font-hindi' : ''
              }`}
            >
              {isHindi
                ? 'टूर्नामेंट से संबंधित सामान्य जानकारी एवं सहायता के लिए नीचे दिए गए किसी भी नंबर पर संपर्क करें।'
                : 'For general tournament information and assistance, contact us on any of the numbers below.'}
            </p>

            {/* Numbers */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2.5 max-w-5xl mx-auto">
              {CALL_NUMBERS.map((number) => (
                <a
                  key={number}
                  href={`tel:${number}`}
                  className="inline-flex items-center justify-center gap-2 px-3 py-3 rounded-xl bg-apl-surface-3 text-apl-saffron-dark font-display font-600 text-sm hover:gradient-saffron-bright hover:text-apl-white hover:shadow-md transition-all duration-300"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  {number}
                </a>
              ))}
            </div>

          </div>
        </motion.div>


        {/* =====================================================
            BOTTOM — WHATSAPP / LOCATION / FORM INQUIRY
        ====================================================== */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">

          {/* ================= WHATSAPP ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative card-bright card-bright-hover rounded-2xl p-7 text-center overflow-hidden flex flex-col"
          >
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-40 h-40 bg-green-500 opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500" />

            <div className="relative flex flex-col items-center h-full">

              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>

              <h3
                className={`font-display font-700 text-xl text-apl-ink mb-3 ${
                  isHindi ? 'font-hindi' : ''
                }`}
              >
                {isHindi ? 'WhatsApp करें' : 'WhatsApp'}
              </h3>

              <p
                className={`text-apl-muted text-sm leading-relaxed max-w-sm mb-7 ${
                  isHindi ? 'font-hindi' : ''
                }`}
              >
                {isHindi
                  ? 'टीम रजिस्ट्रेशन, टूर्नामेंट की जानकारी एवं अन्य आवश्यक सहायता के लिए WhatsApp पर हमसे संपर्क करें।'
                  : 'Contact us on WhatsApp for team registration, tournament information and other required assistance.'}
              </p>

              <div className="mt-auto w-full">
                <a
                  href="https://wa.me/917568436406"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-green-500 text-white font-display font-600 text-sm shadow-md hover:bg-green-600 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ${
                    isHindi ? 'font-hindi' : ''
                  }`}
                >
                  <MessageCircle className="w-5 h-5" />
                  {isHindi
                    ? 'WhatsApp पर संपर्क करें'
                    : 'Chat on WhatsApp'}
                  <ExternalLink className="w-4 h-4 opacity-80" />
                </a>
              </div>

            </div>
          </motion.div>


          {/* ================= LOCATION ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -8 }}
            className="group relative card-bright card-bright-hover rounded-2xl p-7 text-center overflow-hidden flex flex-col"
          >
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-40 h-40 bg-apl-gold opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500" />

            <div className="relative flex flex-col items-center h-full">

              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-apl-gold to-apl-saffron mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-white" />
              </div>

              <h3
                className={`font-display font-700 text-xl text-apl-ink mb-3 ${
                  isHindi ? 'font-hindi' : ''
                }`}
              >
                {isHindi ? 'स्थान' : 'LOCATION'}
              </h3>

              <p
                className={`text-apl-muted text-sm leading-relaxed max-w-sm mb-7 ${
                  isHindi ? 'font-hindi' : ''
                }`}
              >
                {isHindi
                  ? 'APL Season 5 के आयोजन स्थल की जानकारी प्राप्त करें और Google Maps के माध्यम से आयोजन स्थल तक आसानी से पहुँचें।'
                  : 'Find the APL Season 5 venue location and get directions easily through Google Maps.'}
              </p>

              <div className="mt-auto w-full">
                <a
                  href={CONTACT.GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-apl-saffron text-white font-display font-600 text-sm shadow-md hover:bg-apl-deep-orange hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ${
                    isHindi ? 'font-hindi' : ''
                  }`}
                >
                  <MapPin className="w-5 h-5" />
                  {isHindi
                    ? 'आयोजन स्थल देखें'
                    : 'View Venue on Map'}
                  <ExternalLink className="w-4 h-4 opacity-80" />
                </a>
              </div>

            </div>
          </motion.div>


          {/* ================= FORM INQUIRY ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -8 }}
            className="group relative card-bright card-bright-hover rounded-2xl p-7 text-center overflow-hidden flex flex-col"
          >
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-40 h-40 bg-apl-deep-orange opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500" />

            <div className="relative flex flex-col items-center h-full">

              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-apl-deep-orange to-apl-saffron mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <FileQuestion className="w-8 h-8 text-white" />
              </div>

              <h3
                className={`font-display font-700 text-xl text-apl-ink mb-3 ${
                  isHindi ? 'font-hindi' : ''
                }`}
              >
                {isHindi
                  ? 'रजिस्ट्रेशन फॉर्म संबंधी पूछताछ'
                  : 'Registration Form Inquiry'}
              </h3>

              <p
                className={`text-apl-muted text-sm leading-relaxed max-w-sm mb-7 ${
                  isHindi ? 'font-hindi' : ''
                }`}
              >
                {isHindi
                  ? 'टीम रजिस्ट्रेशन फॉर्म भरने, फॉर्म में सुधार, संशोधन या रजिस्ट्रेशन से संबंधित किसी भी समस्या के लिए संपर्क करें।'
                  : 'For queries related to team registration, form filling, amendments or any registration-related issue.'}
              </p>

              <div className="mt-auto w-full flex flex-col gap-2.5">

                {FORM_INQUIRY_NUMBERS.map((number) => (
                  <a
                    key={number}
                    href={`tel:${number}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-apl-surface-3 text-apl-saffron-dark font-display font-600 text-sm hover:gradient-saffron-bright hover:text-apl-white hover:shadow-md transition-all duration-300"
                  >
                    <Phone className="w-4 h-4" />
                    {number}
                  </a>
                ))}

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}