import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, ExternalLink } from 'lucide-react';

interface DirectorProfileProps {
  directorImage: string;
}

export function DirectorProfile({ directorImage }: DirectorProfileProps) {
  const [language, setLanguage] = useState<'english' | 'hindi'>('english');

  const content = {
    english: {
      name: 'Dr. Nitesh Purohit',
      title: 'Director, SGSITS',
      subtitle: 'Former Professor, IIIT Prayagraj | Visitor\'s Nominee for NITs',
      briefTitle: 'Brief Profile',
      paragraphs: [
        'Dr. Nitesh Purohit has been serving as the Director of Shri Govindram Seksaria Institute of Technology and Science (SGSITS), Indore since October 30, 2024. He is originally a Professor at the Indian Institute of Information Technology (IIIT) Prayagraj. Hon\'ble President of India appointed Prof. Purohit as his representative (Visitor\'s Nominee) in the faculty selection committees of National Institutes of Technology (NITs), under which Prof. Purohit actively participated in the appointment of teachers across 50 departments of about 10 NITs.',
        'Under the leadership of Prof. Manindra Agrawal of IIT Kanpur, Dr. Purohit co-authored a book analyzing the Covid-19 management of the Government of Uttar Pradesh, which was released by Hon\'ble Chief Minister Yogi Adityanath. This book received widespread appreciation across the country. He has been a member of the Academic Ethics Committee of IIT Kanpur for about 10 years. Additionally, through C3iHub IIT Kanpur, he has played a leading role in designing the Cyber Security course for the students of Kanpur University and in online teaching. Prof. Purohit is the Co-Investigator in the IoT security framework and two other projects being developed by IIIT Prayagraj as a partner institute of C3iHub IIT Kanpur.',
        'The Mela Officer of Prayagraj Mahakumbh 2025 appointed him as the Nodal Officer for works related to cellular network planning, website and mobile app supervision, security, and emergency management. The Department of Telecommunications (DoT), Government of India, provided financial support for the Semantic Communication-based 6G technology development project proposed by Prof. Purohit. An indigenous 3D printer model was also developed under his leadership, the technology for which was transferred to Indian Telephone Industries (ITI), Mankapur, and is currently in commercial production. Dr. Purohit is also an active member of the IIIT team developing the graphical format of fragrance, and through this technology, he played an important role in enabling a company to get a trademark for rose fragrance. With the support of the Department of Science and Technology (DST), Government of India, various programs and projects were successfully conducted under his leadership to promote self-employment among SC/ST communities in Prayagraj and Varanasi.',
        'In collaboration with the IKS (Indian Knowledge Systems) division of the Ministry of Education, Government of India, a significant research project for studying the ancient knowledge traditions of Central India has been initiated under the leadership of Prof. Purohit. Work on the \'Kamad Project\' has also begun in collaboration with DRI Chitrakoot and with the support of the Government of Madhya Pradesh.',
        'Dr. Purohit\'s research work has been published in many prestigious international journals, including IEEE Transactions and IEEE Letters. Several of his invited lectures, video lectures, research presentations, and laboratory demonstrations are available online.'
      ]
    },
    hindi: {
      name: 'डॉ. नितेश पुरोहित',
      title: 'निदेशक, एसजीसीआईटीएस',
      subtitle: 'पूर्व प्रोफेसर, आईआईआईटी प्रयागराज | एनआईटी के लिए विज़िटर नॉमिनी',
      briefTitle: 'संक्षिप्त परिचय',
      paragraphs: [
        'डॉ. नितेश पुरोहित 30 अक्टूबर 2024 से श्री गोविंदराम सेक्सरिया प्रौद्योगिकी एवं विज्ञान संस्थान (एसजीएसआईटीएस), इंदौर के निदेशक के रूप में सेवारत हैं। वे मूल रूप से भारतीय सूचना प्रौद्योगिकी संस्थान (आईआईआईटी) प्रयागराज में प्रोफेसर हैं। भारत के माननीय राष्ट्रपति ने प्रो. पुरोहित को राष्ट्रीय प्रौद्योगिकी संस्थानों (एनआईटी) की संकाय चयन समितियों में अपने प्रतिनिधि (विज़िटर नॉमिनी) के रूप में नियुक्त किया, जिसके तहत प्रो. पुरोहित ने लगभग 10 एनआईटी के लगभग 50 विभागों में शिक्षकों की नियुक्ति में सक्रिय रूप से भाग लिया।',
        'आईआईटी कानपुर के प्रो. मनीन्द्र अग्रवाल के नेतृत्व में डॉ. पुरोहित ने उत्तर प्रदेश सरकार के कोविड-19 प्रबंधन का विश्लेषण करने वाली एक पुस्तक का सह-लेखन किया, जिसे माननीय मुख्यमंत्री योगी आदित्यनाथ द्वारा जारी किया गया था। इस पुस्तक को देश भर में व्यापक सराहना मिली। वे लगभग 10 वर्षों से आईआईटी कानपुर की शैक्षणिक नैतिकता समिति के सदस्य रहे हैं। इसके अतिरिक्त, C3iHub आईआईटी कानपुर के माध्यम से, उन्होंने कानपुर विश्वविद्यालय के छात्रों के लिए साइबर सुरक्षा पाठ्यक्रम तैयार करने और ऑनलाइन शिक्षण में अग्रणी भूमिका निभाई है। प्रो. पुरोहित C3iHub आईआईटी कानपुर के भागीदार संस्थान के रूप में आईआईआईटी प्रयागराज द्वारा विकसित IoT सुरक्षा फ्रेमवर्क और दो अन्य परियोजनाओं में सह-अन्वेषक हैं।',
        'प्रयागराज महाकुंभ 2025 के मेला अधिकारी ने उन्हें सेलुलर नेटवर्क योजना, वेबसाइट और मोबाइल ऐप पर्यवेक्षण, सुरक्षा और आपातकालीन प्रबंधन से संबंधित कार्यों के लिए नोडल अधिकारी के रूप में नियुक्त किया। भारत सरकार के दूरसंचार विभाग (DoT) ने प्रो. पुरोहित द्वारा प्रस्तावित सिमेंटिक कम्युनिकेशन-आधारित 6G प्रौद्योगिकी विकास परियोजना के लिए वित्तीय सहायता प्रदान की। उनके नेतृत्व में एक स्वदेशी 3D प्रिंटर मॉडल भी विकसित किया गया, जिसकी तकनीक भारतीय टेलीफोन उद्योग (आईटीआई), मनकापुर को हस्तांतरित की गई और वर्तमान में वाणिज्यिक उत्पादन में है। डॉ. पुरोहित सुगंध के ग्राफिकल प्रारूप को विकसित करने वाली आईआईआईटी टीम के सक्रिय सदस्य भी हैं, और इस तकनीक के माध्यम से, उन्होंने एक कंपनी को गुलाब की सुगंध के लिए ट्रेडमार्क प्राप्त करने में महत्वपूर्ण भूमिका निभाई। भारत सरकार के विज्ञान और प्रौद्योगिकी विभाग (DST) के समर्थन से, प्रयागराज और वाराणसी में अनुसूचित जाति/अनुसूचित जनजाति समुदायों में स्व-रोजगार को बढ़ावा देने के लिए उनके नेतृत्व में विभिन्न कार्यक्रम और परियोजनाएं सफलतापूर्वक संचालित की गईं।',
        'भारत सरकार के शिक्षा मंत्रालय के IKS (भारतीय ज्ञान प्रणाली) प्रभाग के सहयोग से, प्रो. पुरोहित के नेतृत्व में मध्य भारत की प्राचीन ज्ञान परंपराओं के अध्ययन के लिए एक महत्वपूर्ण शोध परियोजना शुरू की गई है। डीआरआई चित्रकूट के सहयोग से और मध्य प्रदेश सरकार के समर्थन से \'कामद परियोजना\' पर भी काम शुरू हो गया है।',
        'डॉ. पुरोहित का शोध कार्य IEEE Transactions और IEEE Letters सहित कई प्रतिष्ठित अंतरराष्ट्रीय पत्रिकाओं में प्रकाशित हुआ है। उनके कई आमंत्रित व्याख्यान, वीडियो व्याख्यान, शोध प्रस्तुतियां और प्रयोगशाला प्रदर्शन ऑनलाइन उपलब्ध हैं।'
      ]
    }
  };

  const currentContent = content[language];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-indigo-50/30 to-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Language Toggle */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-white border-2 border-indigo-200 rounded-lg overflow-hidden shadow-sm">
            <button
              onClick={() => setLanguage('english')}
              className={`px-8 py-3 font-['Noto_Sans_JP'] font-medium transition-all ${
                language === 'english'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-indigo-50'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage('hindi')}
              className={`px-8 py-3 font-['Noto_Sans_JP'] font-medium transition-all ${
                language === 'hindi'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-indigo-50'
              }`}
            >
              हिंदी
            </button>
          </div>
        </motion.div>

        <div className="bg-white border border-gray-200 shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-[300px_1fr] gap-0">
            {/* Left Sidebar - Photo and Contact */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-b from-indigo-50 to-white p-8 border-r border-gray-200"
            >
              {/* Photo */}
              <div className="relative mb-6 overflow-hidden shadow-lg">
                <img
                  src={directorImage}
                  alt="Dr. Nitesh Purohit"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Name and Title */}
              <div className="text-center mb-6">
                <h2 className="font-['Noto_Serif_JP'] text-2xl text-indigo-900 mb-2">
                  {currentContent.name}
                </h2>
                <p className="font-['Noto_Sans_JP'] text-sm text-gray-700 font-medium mb-1">
                  {currentContent.title}
                </p>
                <p className="font-['Noto_Sans_JP'] text-xs text-gray-600 leading-relaxed">
                  {currentContent.subtitle}
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 text-sm">
                  <Mail className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <a href="mailto:director@sgsits.ac.in" className="text-gray-700 hover:text-indigo-600 transition-colors break-all">
                    director@sgsits.ac.in
                  </a>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <Phone className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">+91 731-2582100</span>
                </div>
              </div>

              {/* Important Links */}
              <div className="space-y-2">
                <a
                  href="https://one-year-of-leadership.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 bg-white border border-indigo-200 hover:border-indigo-600 hover:bg-indigo-50 transition-all text-sm font-['Noto_Sans_JP'] text-gray-700 hover:text-indigo-900 group"
                >
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  <span>One Year of Leadership</span>
                </a>
                <a
                  href="https://sss.sgsits.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 bg-white border border-indigo-200 hover:border-indigo-600 hover:bg-indigo-50 transition-all text-sm font-['Noto_Sans_JP'] text-gray-700 hover:text-indigo-900 group"
                >
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  <span>SSS SGSITS</span>
                </a>
              </div>
            </motion.div>

            {/* Right Content - Biography */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-8 lg:p-12"
            >
              <h3 className="font-['Noto_Serif_JP'] text-3xl text-indigo-950 mb-8 pb-4 border-b-2 border-indigo-200">
                {currentContent.briefTitle}
              </h3>

              <div className="space-y-6 font-['Noto_Sans_JP'] text-gray-700 leading-relaxed text-justify">
                {currentContent.paragraphs.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>

              {/* Key Achievements Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-12 p-6 bg-indigo-50 border-l-4 border-indigo-600"
              >
                <h4 className="font-['Noto_Serif_JP'] text-lg text-indigo-900 mb-4">
                  {language === 'english' ? 'Key Contributions' : 'मुख्य योगदान'}
                </h4>
                <ul className="space-y-2 font-['Noto_Sans_JP'] text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2 flex-shrink-0"></span>
                    <span>{language === 'english' ? 'Visitor\'s Nominee for NITs - Faculty Selection across 50 departments' : 'एनआईटी के लिए विजिटर नॉमिनी - 50 विभागों में संकाय चयन'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2 flex-shrink-0"></span>
                    <span>{language === 'english' ? 'Co-authored COVID-19 management analysis book released by CM Yogi Adityanath' : 'सीएम योगी आदित्यनाथ द्वारा जारी COVID-19 प्रबंधन विश्लेषण पुस्तक के सह-लेखक'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2 flex-shrink-0"></span>
                    <span>{language === 'english' ? 'Nodal Officer for Prayagraj Mahakumbh 2025 - Cellular, Security & Emergency' : 'प्रयागराज महाकुंभ 2025 के लिए नोडल अधिकारी - सेलुलर, सुरक्षा और आपातकालीन'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2 flex-shrink-0"></span>
                    <span>{language === 'english' ? 'DoT-funded 6G Technology Development Project' : 'DoT द्वारा वित्त पोषित 6G प्रौद्योगिकी विकास परियोजना'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2 flex-shrink-0"></span>
                    <span>{language === 'english' ? 'Indigenous 3D Printer - Technology transfer to ITI Mankapur' : 'स्वदेशी 3D प्रिंटर - आईटीआई मनकापुर को प्रौद्योगिकी हस्तांतरण'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2 flex-shrink-0"></span>
                    <span>{language === 'english' ? 'IKS-MoE Research Project on Ancient Knowledge of Central India' : 'मध्य भारत के प्राचीन ज्ञान पर IKS-MoE शोध परियोजना'}</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
