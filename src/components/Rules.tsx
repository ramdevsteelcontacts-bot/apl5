import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, BookOpen } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { SectionHeading } from './SectionHeading';

const rulesData = [
  {
    titleEn: 'Team Registration',
    titleHi: 'टीमों की संख्या',
    rulesEn: [
      'A maximum of 36 teams will be accepted in this season.',
      'Team entries will be accepted on a first-come, first-served basis.'
    ],
    rulesHi: [
      'इस सीजन में अधिकतम 36 टीमों की एंट्री स्वीकार की जाएगी।',
      'टीमों की एंट्री पहले आओ पहले पाओ के आधार पर ली जाएगी।'
    ]
  },
  {
    titleEn: 'Tournament Format',
    titleHi: 'खेल का आयोजन',
    rulesEn: [
      'Only a cricket tournament will be organized in this season.'
    ],
    rulesHi: [
      'इस सीजन में केवल क्रिकेट प्रतियोगिता का आयोजन किया जाएगा।'
    ]
  },
  {
    titleEn: 'Team Entry Fee',
    titleHi: 'टीम एंट्री फीस',
    rulesEn: [
      'The entry fee for each team has been fixed at ₹5,100.'
    ],
    rulesHi: [
      'प्रत्येक टीम की एंट्री फीस ₹5,100 निर्धारित की गई है।'
    ]
  },
  {
    titleEn: 'Team Jersey',
    titleHi: 'टीम जर्सी',
    rulesEn: [
      'Every cricket team must have the APL and ARM logos on its jersey.',
      'Both logos must be placed at the designated positions on the front side of the jersey.',
      'The APL or ARM logo must be placed on the designated side sleeve as prescribed.',
      'Placing the logo on the sleeve or at any other location will be considered a violation of the rules.',
      'Both designated logos must be placed on the front side as mandatory.',
      'No alteration or change in the logos or their designated positions is permitted without prior approval from the committee.'
    ],
    rulesHi: [
      'प्रत्येक क्रिकेट टीम की जर्सी पर APL एवं ARM के दोनों निर्धारित लोगो लगाना अनिवार्य रहेगा।',
      'दोनों लोगो जर्सी के आगे की तरफ निर्धारित स्थान पर ही लगाए जाने चाहिए।',
      'APL अथवा ARM का लोगो जर्सी की बाजू (स्लीव) Side Sleeve पर निर्धारित स्थान पर लगाना होगा।',
      'निर्धारित स्थान के अतिरिक्त कहीं और लोगो लगाना नियम का उल्लंघन माना जाएगा।',
      'दोनों निर्धारित लोगो आगे की तरफ होना अनिवार्य है।',
      'कमेटी की पूर्व अनुमति के बिना लोगो में किसी भी प्रकार का परिवर्तन अथवा निर्धारित स्थान के अतिरिक्त कहीं और लोगो लगाना नियम का उल्लंघन माना जाएगा।'
    ]
  },
  {
    titleEn: 'Team Entry Period',
    titleHi: 'टीम एंट्री की अवधि',
    rulesEn: [
      'Team entries will be accepted through the online form from 01/10/2026 to 05/10/2026.'
    ],
    rulesHi: [
      'टीमों की ऑनलाइन एंट्री 01/10/2026 से 05/10/2026 तक ऑनलाइन फॉर्म के माध्यम से स्वीकार की जाएगी।'
    ]
  },
  {
    titleEn: 'Player Allocation Through Draw',
    titleHi: 'ड्रा के माध्यम से खिलाड़ियों का आवंटन',
    rulesEn: [
      'Players who are not from the Sanchore and Chitalwana assembly constituencies but belong to the concerned tehsil areas, and whose village team cannot be formed, will be allocated to interested teams through a draw as per the previous process.',
      'Such players must register their names from 01/10/2026 to 05/10/2026.',
      'The registration fee for such players has been fixed at ₹1,100.',
      'For name registration, contact: 7568436406.',
      'The player lottery/draw will be conducted on 06/10/2026.'
    ],
    rulesHi: [
      'ऐसे इच्छुक खिलाड़ी जो विधानसभा क्षेत्र सांचौर एवं चितलवाना में नहीं आते, लेकिन संबंधित तहसील क्षेत्रों में आते हैं तथा जिनके गांव की टीम नहीं बन पा रही है, उन्हें पिछली बार की प्रक्रिया के अनुसार ड्रा के माध्यम से इच्छुक टीमों में आवंटित किया जाएगा।',
      'ऐसे खिलाड़ियों के लिए 01/10/2026 से 05/10/2026 तक अपना नाम दर्ज करवाना अनिवार्य रहेगा।',
      'नाम दर्ज करवाने की फीस ₹1,100 निर्धारित की गई है।',
      'नाम दर्ज करवाने के लिए संपर्क करें: 7568436406',
      'खिलाड़ियों की लॉटरी 06/10/2026 को निकाली जाएगी।'
    ]
  },
  {
    titleEn: 'Tournament Rules',
    titleHi: 'खेल नियमावली',
    rulesEn: [
      'All matches and the tournament will be conducted strictly according to the playing rules decided by the organizing committee.',
      'All teams and players must follow the prescribed tournament rules.'
    ],
    rulesHi: [
      'सभी मैच एवं प्रतियोगिता का आयोजन कमेटी द्वारा निर्धारित खेल नियमावली के अनुसार ही किया जाएगा।',
      'सभी टीमों एवं खिलाड़ियों के लिए खेल नियमों का पालन करना अनिवार्य रहेगा।'
    ]
  },
  {
    titleEn: 'Digital Team Entry Form & ARM ID',
    titleHi: 'डिजिटल टीम एंट्री फॉर्म एवं एआरएम आईडी',
    rulesEn: [
      'The team entry form will be completely digital, and its link will be made available to the concerned team management.',
      'Only one form will be filled for each team.',
      'Every player included in the team must have an ARM Code.',
      'To obtain an ARM Code, the Aanjana Rakta Mitra App must be downloaded.',
      'The team entry fee can be deposited through both online and offline modes.'
    ],
    rulesHi: [
      'टीम एंट्री फॉर्म पूर्णतः डिजिटल रहेगा, जिसकी लिंक संबंधित टीम मैनेजमेंट को उपलब्ध करवाई जाएगी।',
      'प्रत्येक टीम के लिए केवल एक फॉर्म भरा जाएगा।',
      'टीम में शामिल प्रत्येक खिलाड़ी के पास ARM कोड होना अनिवार्य है।',
      'ARM कोड प्राप्त करने के लिए आँजणा रक्त मित्र ऐप डाउनलोड करना होगा।',
      'टीम की एंट्री फीस ऑनलाइन एवं ऑफलाइन दोनों माध्यमों से जमा की जा सकेगी।'
    ]
  },
  {
    titleEn: 'Team Form Amendments',
    titleHi: 'टीम फॉर्म में संशोधन',
    rulesEn: [
      'The period for necessary corrections and amendments in the team form will be from 07/10/2026 to 10/10/2026.',
      'During this period, each team can replace a maximum of 3 players.',
      'Players received through the draw will also be included in this provision.'
    ],
    rulesHi: [
      'टीम फॉर्म में आवश्यक सुधार एवं संशोधन के लिए 07/10/2026 से 10/10/2026 तक का समय निर्धारित रहेगा।',
      'इस अवधि के दौरान प्रत्येक टीम अधिकतम 3 खिलाड़ियों को बदल सकती है।',
      'इसमें ड्रा के माध्यम से प्राप्त खिलाड़ी भी शामिल रहेंगे।'
    ]
  },
  {
    titleEn: 'Season 4 Super 8 Teams',
    titleHi: 'सीजन 4 की सुपर 8 टीमों के लिए नियम',
    rulesEn: [
      'Super 8 teams from Season 4 will not be allowed to participate in the player draw.'
    ],
    rulesHi: [
      'सीज़न 4 की सुपर 8 टीमों को प्लेयर ड्रॉ में हिस्सा लेने की इजाज़त नहीं होगी।'
    ]
  },
  {
    titleEn: 'Team Flag',
    titleHi: 'टीम ध्वज',
    rulesEn: [
      'Team flags of uniform size, as prescribed by the committee, will be issued for all teams.'
    ],
    rulesHi: [
      'सभी टीमों के लिए कमेटी द्वारा निर्धारित समान आकार के टीम ध्वज जारी किए जाएंगे।'
    ]
  },
  {
    titleEn: 'Acceptance of Rules',
    titleHi: 'नियमों की स्वीकृति',
    rulesEn: [
      'All the above rules and directions were unanimously decided and approved in the General Meeting held on 07/09/2026.',
      'All team managements and players are expected to follow the rules prescribed by the committee to ensure that the tournament is conducted fairly, peacefully and successfully.'
    ],
    rulesHi: [
      'उपरोक्त सभी नियम एवं दिशा-निर्देश दिनांक 07/09/2026 को आयोजित आम सभा में सर्वसम्मति से निर्धारित एवं स्वीकृत किए गए हैं।',
      'प्रतियोगिता को निष्पक्ष, अनुशासित एवं सफलतापूर्वक आयोजित करने के लिए सभी टीम मैनेजमेंट एवं खिलाड़ियों से कमेटी द्वारा निर्धारित नियमों का पालन करने की अपेक्षा की जाती है।'
    ]
  }
];

export function Rules() {
  const { lang } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const isHindi = lang === 'hi';

  return (
    <section
      id="rules"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-apl-bg-warm"
    >
      {/* Background accents */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-apl-saffron/6 rounded-full blur-[50px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-apl-gold/6 rounded-full blur-[50px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">

        <SectionHeading
          en="TOURNAMENT RULES"
          hi="खेल नियमावली"
          subEn="Official rules and regulations for APL Season 5"
          subHi="आँजणा प्रीमियर लीग सीजन 5 के आधिकारिक नियम एवं दिशा-निर्देश"
          lang={lang}
        />

        <div className="mt-12 flex flex-col gap-3">

          {rulesData.map((category, i) => {
            const isOpen = openIndex === i;

            const title = isHindi
              ? category.titleHi
              : category.titleEn;

            const rules = isHindi
              ? category.rulesHi
              : category.rulesEn;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.05
                }}
                className={`card-bright rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? 'border-apl-saffron/30 shadow-lg shadow-apl-saffron/10'
                    : 'card-bright-hover'
                }`}
              >

                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : i)
                  }
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left group"
                >

                  <div className="flex items-center gap-4">

                    <div
                      className={`flex items-center justify-center w-10 h-10 rounded-xl font-display font-700 text-sm transition-all ${
                        isOpen
                          ? 'gradient-saffron-bright text-apl-white glow-orange'
                          : 'bg-apl-surface-3 text-apl-saffron-dark'
                      }`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </div>

                    <h3
                      className={`font-display font-600 text-lg md:text-xl text-apl-ink group-hover:text-apl-saffron transition-colors ${
                        isHindi ? 'font-hindi' : ''
                      }`}
                    >
                      {title}
                    </h3>

                  </div>

                  <motion.div
                    animate={{
                      rotate: isOpen ? 180 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      isOpen
                        ? 'bg-apl-saffron/15 text-apl-saffron'
                        : 'text-apl-muted'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>

                </button>

                <AnimatePresence initial={false}>

                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0
                      }}
                      animate={{
                        height: 'auto',
                        opacity: 1
                      }}
                      exit={{
                        height: 0,
                        opacity: 0
                      }}
                      transition={{
                        duration: 0.3,
                        ease: 'easeInOut'
                      }}
                      className="overflow-hidden"
                    >

                      <div className="px-5 md:px-6 pb-5 md:pb-6 pl-[4.5rem] md:pl-[5rem]">

                        <ul className="flex flex-col gap-3">

                          {rules.map((rule, j) => (
                            <li
                              key={j}
                              className="flex items-start gap-3"
                            >

                              <BookOpen
                                className="w-4 h-4 text-apl-saffron/60 mt-1 flex-shrink-0"
                              />

                              <span
                                className={`text-apl-ink-3 text-sm md:text-base leading-relaxed ${
                                  isHindi ? 'font-hindi' : ''
                                }`}
                              >
                                {rule}
                              </span>

                            </li>
                          ))}

                        </ul>

                      </div>

                    </motion.div>
                  )}

                </AnimatePresence>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}