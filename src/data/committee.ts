export interface CommitteeMember {
  id: string;
  name: string;
  nameHi: string;
  responsibility: string;
  responsibilityHi: string;
  description: string;
  descriptionHi: string;
  photo: string | null;
}

export const MEMBER_PHOTO_DIR = '/images/members';

export const getMemberPhoto = (memberId: string): string =>
  `${MEMBER_PHOTO_DIR}/${memberId}.jpg`;

export const DEFAULT_MEMBER_PHOTO = '/images/members/default.jpg';

export const getMemberPhotoWithFallback = (
  memberId: string,
  hasPhoto = true,
): string => (hasPhoto ? getMemberPhoto(memberId) : DEFAULT_MEMBER_PHOTO);

export const committeeMembers: CommitteeMember[] = [
  {
    id: 'm1',
    name: 'GURUDEV SHREE RATAN PURI JI ',
    nameHi: 'गुरुदेव श्री रतन पुरी जी',
    responsibility: 'Guardian',
    responsibilityHi: 'संरक्षक',
    description:
      'Oversees the overall planning, execution and management of APL Season 5.',
    descriptionHi:
      'APL सीजन 5 की समग्र योजना, क्रियान्वयन और प्रबंधन का प्रभार।',
    photo: `/images/members/m1.jpg`,
  },
  {
    id: 'm2',
    name: 'SHREE SHREE 1008 SHREE BHARAT NATH JI MAHARAJ',
    nameHi: 'श्री श्री 1008 श्री भारत नाथ जी महाराज',
    responsibility: 'Guardian',
    responsibilityHi: 'संरक्षक',
    description: 'Overall Guidance & Supervision of the Tournament.',
    descriptionHi:
      'आयोजन की समग्र सुरक्षा, अनुशासन एवं गरिमा बनाए रखने हेतु मार्गदर्शन एवं निगरानी।',
    photo: `/images/members/m2.jpg`,
  },
  {
    id: 'm3',
    name: 'Sagtaram Chaudhary, Golasan',
    nameHi: 'श्री सगताराम चौधरी, गोलासन',
    responsibility: 'President',
    responsibilityHi: 'अध्यक्ष',
    description:
      'Oversees the entire tournament, takes important decisions, coordinates between departments and provides final approval.',
    descriptionHi:
      'समस्त आयोजन की निगरानी, महत्वपूर्ण निर्णय, विभागों के बीच समन्वय एवं अंतिम अनुमोदन।',
    photo: `/images/members/m3.jpg`,
  },
  {
    id: 'm4',
    name: 'Ramesh Chaudhary, Kamalpura',
    nameHi: 'श्री रमेश चौधरी, कमालपूरा',
    responsibility: 'Sports In-Charge',
    responsibilityHi: 'खेल प्रभारी',
    description:
      'Responsible for match schedules, team and player coordination, umpiring and overall sports operations.',
    descriptionHi:
      'मैच कार्यक्रम, टीम एवं खिलाड़ी समन्वय, अंपायरिंग एवं खेल संचालन की संपूर्ण जिम्मेदारी।',
    photo: `/images/members/m4.jpg`,
  },
  {
    id: 'm5',
    name: 'Harchand Ram Chaudhary, Kamalpura',
    nameHi: 'श्री हरचंद राम चौधरी, कमालपूरा',
    responsibility: 'Treasurer',
    responsibilityHi: 'कोषाध्यक्ष',
    description:
      'Manages the tournament budget, income and expenses, payments, receipts, vouchers and financial transparency.',
    descriptionHi:
      'बजट, आय-व्यय, भुगतान, रसीद/वाउचर एवं आयोजन की वित्तीय पारदर्शिता।',
    photo: `/images/members/m5.jpg`,
  },
  {
    id: 'm6',
    name: 'Dinesh Malvi, Makhupura',
    nameHi: 'श्री दिनेश मालवी, माखुपुरा',
    responsibility: 'Media Coordination & Publicity',
    responsibilityHi: 'मीडिया समन्वय एवं प्रचार-प्रसार',
    description:
      'Coordinates tournament news, press releases and important information with newspapers, TV channels, digital media and other major media platforms.',
    descriptionHi:
      'आयोजन से संबंधित समाचार, प्रेस विज्ञप्ति एवं महत्वपूर्ण सूचनाओं का समाचार पत्रों, टीवी चैनलों, डिजिटल मीडिया एवं अन्य प्रमुख मीडिया माध्यमों में प्रभावी प्रचार-प्रसार एवं प्रकाशन/प्रसारण हेतु समन्वय करना।',
    photo: `/images/members/m6.jpg`,
  },

  // 7
  {
    id: 'm9',
    name: 'Praveen Patel, Siddheshwar',
    nameHi: 'श्री प्रवीण पटेल, सिद्धेश्वर',
    responsibility: 'Publicity & Information Management',
    responsibilityHi: 'प्रचार-प्रसार एवं सूचना व्यवस्था',
    description:
      'Manages posters, social media, match schedules, results and important tournament information, along with the online team registration process.',
    descriptionHi:
      'पोस्टर, सोशल मीडिया, मैच कार्यक्रम, परिणाम एवं महत्वपूर्ण सूचनाओं का प्रभावी प्रचार-प्रसार तथा ऑनलाइन टीम पंजीकरण व्यवस्था का संचालन।',
    photo: `/images/members/m9.jpg`,
  },

  // 8
  {
    id: 'm11',
    name: 'Ranchhod (Rajubhai) Chaudhary, Siddheshwar',
    nameHi: 'श्री रणछोड़ (राजूभाई) चौधरी, सिद्धेश्वर',
    responsibility: 'Discipline Management',
    responsibilityHi: 'अनुशासन व्यवस्था',
    description:
      'Maintains discipline among players, team management and spectators, immediately controls disputes or disorder and ensures a peaceful tournament environment.',
    descriptionHi:
      'खिलाड़ियों, टीम प्रबंधन एवं दर्शकों के बीच अनुशासन बनाए रखना, किसी भी विवाद अथवा अव्यवस्था की स्थिति को तत्काल नियंत्रित करना तथा आयोजन स्थल पर शांतिपूर्ण एवं सुचारु वातावरण सुनिश्चित करना।',
    photo: `/images/members/m11.jpg`,
  },

  // 9
  {
    id: 'm7',
    name: 'Kailash M Chaudhary, Kamalpura',
    nameHi: 'श्री कैलाश M चौधरी, कमालपूरा',
    responsibility: 'Welcome & Guest Hospitality',
    responsibilityHi: 'स्वागत एवं अतिथि सत्कार',
    description:
      'Coordinates guest reception, seating arrangements, stage access and honour ceremonies.',
    descriptionHi:
      'अतिथियों का स्वागत, बैठने की व्यवस्था, मंच तक समन्वय एवं सम्मान कार्यक्रम।',
    photo: `/images/members/m7.jpg`,
  },

  // 10
  {
    id: 'm8',
    name: 'Amrit L Chaudhary, Kamalpura',
    nameHi: 'श्री अमृत L चौधरी, कमालपूरा',
    responsibility: 'General Operations Coordination',
    responsibilityHi: 'सामान्य व्यवस्था एवं संचालन समन्वय',
    description:
      'Supervises various tournament arrangements, coordinates workers and ensures timely and smooth execution of assigned tasks.',
    descriptionHi:
      'टूर्नामेंट के दौरान विभिन्न व्यवस्थाओं की निगरानी, कार्यकर्ताओं के बीच समन्वय तथा निर्धारित कार्यों का समयबद्ध एवं सुचारु संचालन सुनिश्चित करना।',
    photo: `/images/members/m8.jpg`,
  },

  // 11
  {
    id: 'm10',
    name: 'Mahesh Chaudhary, Hariyali',
    nameHi: 'श्री महेश चौधरी, हरियाली',
    responsibility: 'Team & Player Coordination',
    responsibilityHi: 'टीम एवं खिलाड़ी समन्वय',
    description:
      'Coordinates team reporting, player lists, match order and timely communication of match schedules.',
    descriptionHi:
      'टीमों की रिपोर्टिंग, खिलाड़ियों की सूची, मैच क्रम एवं समय की सूचना।',
    photo: `/images/members/m10.jpg`,
  },

  {
    id: 'm12',
    name: 'Bharmal Bhuria, Hadecha',
    nameHi: 'श्री भरमल भूरिया, हाडेचा',
    responsibility: 'Food & Refreshment Management',
    responsibilityHi: 'भोजन एवं जलपान व्यवस्था',
    description:
      'Manages food, refreshments and related arrangements for players, volunteers and guests.',
    descriptionHi:
      'खिलाड़ियों, कार्यकर्ताओं एवं अतिथियों के लिए भोजन, जलपान एवं संबंधित व्यवस्थाओं का संचालन।',
    photo: `/images/members/m12.jpg`,
  },

  {
    id: 'm13',
    name: 'Bharat Chaudhary, Makhupura',
    nameHi: 'श्री भरत चौधरी, माखुपुरा',
    responsibility: 'Seating & Spectator Management',
    responsibilityHi: 'बैठने एवं दर्शक व्यवस्था',
    description:
      'Manages seating arrangements and spectator movement during the tournament.',
    descriptionHi:
      'दर्शकों के बैठने की व्यवस्था एवं आयोजन स्थल पर दर्शकों की सुचारु आवाजाही सुनिश्चित करना।',
    photo: `/images/members/m13.jpg`,
  },

  {
    id: 'm14',
    name: 'Chenaram Sand, Golasan',
    nameHi: 'श्री चैनाराम सांड, गोलासन',
    responsibility: 'Stage Management',
    responsibilityHi: 'मंच व्यवस्था',
    description:
      'Manages stage arrangements, coordination and smooth conduct of stage activities.',
    descriptionHi:
      'मंच की व्यवस्थाओं, समन्वय एवं मंच से संबंधित कार्यक्रमों के सुचारु संचालन की जिम्मेदारी।',
    photo: `/images/members/m14.jpg`,
  },

  {
    id: 'm15',
    name: 'Dinesh Chaudhary Janvi',
    nameHi: 'श्री दिनेश चौधरी जानवी',
    responsibility: 'Major Events & Guest Protocol',
    responsibilityHi: 'प्रमुख कार्यक्रम एवं अतिथि प्रोटोकॉल',
    description:
      'Coordinates major events, special guests and protocol arrangements.',
    descriptionHi:
      'प्रमुख कार्यक्रमों, विशेष अतिथियों एवं प्रोटोकॉल से संबंधित व्यवस्थाओं का समन्वय।',
    photo: `/images/members/m15.jpg`,
  },

  {
    id: 'm16',
    name: 'Dilip Chaudhary, Lalpur',
    nameHi: 'श्री दिलीप चौधरी, लालपुर',
    responsibility: 'Sports Equipment',
    responsibilityHi: 'खेल सामग्री व्यवस्था',
    description:
      'Manages sports equipment and ensures its availability during matches.',
    descriptionHi:
      'खेल सामग्री की व्यवस्था, उपलब्धता एवं मैचों के दौरान उसके उचित संचालन की जिम्मेदारी।',
    photo: `/images/members/m16.jpg`,
  },

  {
    id: 'm17',
    name: 'Narendra Chaudhary, Bhadruna',
    nameHi: 'श्री नरेंद्र चौधरी, भादरूणा',
    responsibility: 'Team Reporting & Match Calling',
    responsibilityHi: 'टीम रिपोर्टिंग एवं मैच कॉलिंग',
    description:
      'Coordinates team reporting and ensures timely calling of teams for matches.',
    descriptionHi:
      'टीमों की रिपोर्टिंग एवं मैच के लिए टीमों को समय पर बुलाने की व्यवस्था।',
    photo: `/images/members/m17.jpg`,
  },

  {
    id: 'm18',
    name: 'Jagdish Chaudhary, Paldi',
    nameHi: 'श्री जगदीश चौधरी, पालड़ी',
    responsibility: 'Stage Hosting & Announcements',
    responsibilityHi: 'मंच संचालन एवं उद्घोषणा',
    description:
      'Handles stage hosting, announcements and public communication during the tournament.',
    descriptionHi:
      'मंच संचालन, उद्घोषणा एवं आयोजन से संबंधित सार्वजनिक सूचनाओं का प्रसारण।',
    photo: `/images/members/m18.jpg`,
  },

  {
    id: 'm19',
    name: 'Chamanaram Ji, Kilwa',
    nameHi: 'श्री चमनाराम जी, किलवा',
    responsibility: 'Administrative Coordination',
    responsibilityHi: 'प्रशासनिक समन्वय',
    description:
      'Coordinates administrative activities and supports the smooth functioning of the tournament.',
    descriptionHi:
      'प्रशासनिक गतिविधियों में समन्वय एवं आयोजन के सुचारु संचालन में सहयोग।',
    photo: `/images/members/m19.jpg`,
  },

  {
    id: 'm20',
    name: 'Naresh Chaudhary, Dabhal',
    nameHi: 'श्री नरेश चौधरी, डभाल',
    responsibility: 'Match-Day Operations',
    responsibilityHi: 'मैच-दिवस संचालन',
    description:
      'Responsible for monitoring necessary arrangements during matches, coordination between teams and organizing team and systematic and timely conduct of each match as per the scheduled programme.',
    descriptionHi:
      'मैचों के दौरान आवश्यक व्यवस्थाओं की निगरानी, टीमों एवं आयोजन दल के बीच समन्वय तथा प्रत्येक मैच के निर्धारित कार्यक्रम के अनुसार व्यवस्थित एवं समयबद्ध संचालन की जिम्मेदारी।',
    photo: `/images/members/m20.jpg`,
  },

  {
    id: 'm21',
    name: 'Sendha Ram (Surendra) Chaudhary, Golasan',
    nameHi: 'श्री सेंघाराम (सुरेंद्र) चौधरी, गोलासन',
    responsibility: 'Online Team Registration',
    responsibilityHi: 'ऑनलाइन टीम पंजीकरण',
    description:
      'Manages and coordinates the online team registration process.',
    descriptionHi:
      'ऑनलाइन टीम पंजीकरण प्रक्रिया का संचालन एवं समन्वय।',
    photo: `/images/members/m21.jpg`,
  },

  {
    id: 'm22',
    name: 'Kailash Godha, Kamalpura',
    nameHi: 'श्री कैलाश गोदारा, कमालपूरा',
    responsibility: 'Match-Day Volunteer Coordination',
    responsibilityHi: 'मैच-दिवस स्वयंसेवक समन्वय',
    description:
      'Coordinates volunteers and assigned duties during match days.',
    descriptionHi:
      'मैच के दिनों में स्वयंसेवकों एवं निर्धारित कार्यों का समन्वय।',
    photo: `/images/members/m22.jpg`,
  },

  {
    id: 'm23',
    name: 'Harish Chaudhary, Karola',
    nameHi: 'श्री हरीश चौधरी, करौला',
    responsibility: 'Umpire & Match Officials Coordination',
    responsibilityHi: 'अंपायर एवं मैच अधिकारी समन्वय',
    description:
      'Coordinates umpires and other match officials for smooth match operations.',
    descriptionHi:
      'अंपायर एवं अन्य मैच अधिकारियों के साथ समन्वय कर मैचों का सुचारु संचालन सुनिश्चित करना।',
    photo: `/images/members/m23.jpg`,
  },

  {
    id: 'm24',
    name: 'Devraj Chaudhary, Dabhal',
    nameHi: 'श्री देवराज चौधरी, डभाल',
    responsibility: 'Medical & First Aid',
    responsibilityHi: 'चिकित्सा एवं प्राथमिक उपचार',
    description:
      'Coordinates medical assistance and first-aid arrangements during the tournament.',
    descriptionHi:
      'आयोजन के दौरान चिकित्सा सहायता एवं प्राथमिक उपचार की व्यवस्था का समन्वय।',
    photo: `/images/members/m24.jpg`,
  },

  {
    id: 'm25',
    name: 'Karsan Chaudhary, Dabhal',
    nameHi: 'श्री करसन चौधरी, डभाल',
    responsibility: 'Scoring & Records Management Head',
    responsibilityHi: 'स्कोरिंग एवं रिकॉर्ड प्रबंधन प्रमुख',
    description:
      'Manages scoring, match records and tournament statistics.',
    descriptionHi:
      'स्कोरिंग, मैच रिकॉर्ड एवं टूर्नामेंट से संबंधित आंकड़ों का प्रबंधन।',
    photo: `/images/members/m25.jpg`,
  },

  {
    id: 'm26',
    name: 'Bhagsa Tarak, Jajusan',
    nameHi: 'श्री भागसा तारक, जाजूसन',
    responsibility: 'Photography, Videography & Parking',
    responsibilityHi: 'फोटोग्राफी, वीडियोग्राफी एवं पार्किंग',
    description:
      'Coordinates tournament photography, videography and parking arrangements.',
    descriptionHi:
      'आयोजन की फोटोग्राफी, वीडियोग्राफी एवं पार्किंग व्यवस्था का समन्वय।',
    photo: `/images/members/m26.jpg`,
  },

  {
    id: 'm27',
    name: 'Narendra Chaudhary, Pathmeda',
    nameHi: 'श्री नरेंद्र चौधरी, पथमेड़ा',
    responsibility: 'Ground & Pitch Management',
    responsibilityHi: 'ग्राउंड एवं पिच व्यवस्था',
    description:
      'Manages ground preparation and pitch-related arrangements.',
    descriptionHi:
      'खेल मैदान एवं पिच की तैयारी तथा संबंधित व्यवस्थाओं का प्रबंधन।',
    photo: `/images/members/m27.jpg`,
  },

  {
    id: 'm28',
    name: 'Ajmal Chaudhary, Kamalpura',
    nameHi: 'श्री अजमल चौधरी, कमालपूरा',
    responsibility: 'Prize & Honour Materials',
    responsibilityHi: 'पुरस्कार एवं सम्मान सामग्री',
    description:
      'Manages trophies, prizes, certificates and honour materials.',
    descriptionHi:
      'ट्रॉफी, पुरस्कार, प्रमाण-पत्र एवं सम्मान सामग्री की व्यवस्था।',
    photo: `/images/members/m28.jpg`,
  },

  {
    id: 'm29',
    name: 'Lalit Ji, Kamalpura',
    nameHi: 'श्री ललित जी, कमालपूरा',
    responsibility: 'Drinking Water & Rest Facilities',
    responsibilityHi: 'पेयजल एवं विश्राम व्यवस्था',
    description:
      'Coordinates drinking water and rest facilities for players, guests and volunteers.',
    descriptionHi:
      'खिलाड़ियों, अतिथियों एवं कार्यकर्ताओं के लिए पेयजल एवं विश्राम की व्यवस्था।',
    photo: `/images/members/m29.jpg`,
  },

  {
    id: 'm30',
    name: 'Babu Ji, Kamalpura',
    nameHi: 'श्री बाबू जी, कमालपूरा',
    responsibility: 'General Support & Reserve Assistance',
    responsibilityHi: 'सामान्य सहयोग एवं अतिरिक्त सहायता',
    description:
      'Provides general support and assistance wherever required during the tournament.',
    descriptionHi:
      'टूर्नामेंट के दौरान आवश्यकता अनुसार सामान्य सहयोग एवं अतिरिक्त सहायता प्रदान करना।',
    photo: `/images/members/m30.jpg`,
  },
];