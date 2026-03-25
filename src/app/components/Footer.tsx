import { motion } from 'motion/react';
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router';
import logoImage from "../../assets/be1c60d2202eb5c28d7de018f5546a7b65312d26.png";

export function Footer() {
  const footerLinks = {
    about: [
      { name: 'Mission & Vision', href: '#about' },
      { name: 'History', href: '#history' },
      { name: 'Director Profile', href: '/director' },
      { name: 'Campus Map', href: '#map' },
      { name: 'Contact Us', href: '#contact' }
    ],
    academics: [
      { name: 'Undergraduate', href: '#ug' },
      { name: 'Graduate', href: '#pg' },
      { name: 'Departments', href: '#departments' },
      { name: 'Academic Calendar', href: '#calendar' }
    ],
    research: [
      { name: 'Research Centers', href: '#centers' },
      { name: 'Publications', href: '#publications' },
      { name: 'Collaborations', href: '#collaborations' },
      { name: 'Facilities', href: '#facilities' }
    ],
    important: [
      { name: 'One Year of Leadership', href: 'https://one-year-of-leadership.vercel.app/', external: true },
      { name: 'SSS Portal', href: 'https://sss.sgsits.ac.in/', external: true },
      { name: 'Student Portal', href: '#portal' },
      { name: 'Alumni Network', href: '#alumni' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, label: 'Facebook' },
    { icon: Twitter, label: 'Twitter' },
    { icon: Instagram, label: 'Instagram' },
    { icon: Youtube, label: 'YouTube' },
    { icon: Linkedin, label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-indigo-950 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          {/* University Info */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src={logoImage} 
                  alt="SGSITS Logo" 
                  className="w-14 h-14 object-contain"
                />
                <div>
                  <div className="font-['Noto_Serif_JP'] text-xl text-white">SGSITS</div>
                  <div className="text-xs text-gray-400 tracking-wider">INDORE</div>
                </div>
              </div>
              
              <p className="font-['Noto_Sans_JP'] text-sm leading-relaxed mb-2 text-white">
                Shri Govindram Seksaria Institute of Technology and Science
              </p>
              
              <p className="font-['Noto_Sans_JP'] text-sm leading-relaxed mb-6 text-gray-400">
                An autonomous institute under RGPV, committed to excellence in technical 
                education and research since 1952.
              </p>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-indigo-400" />
                  <span className="font-['Noto_Sans_JP']">23, Park Road, Indore, Madhya Pradesh 452003, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 flex-shrink-0 text-indigo-400" />
                  <span className="font-['Noto_Sans_JP']">+91-731-2574524</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 flex-shrink-0 text-indigo-400" />
                  <span className="font-['Noto_Sans_JP']">director@sgsits.ac.in</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="font-['Noto_Serif_JP'] text-white text-lg mb-6">About</h3>
              <ul className="space-y-3">
                {footerLinks.about.map((link) => (
                  <li key={link.name}>
                    {link.href === '/director' ? (
                      <Link to={link.href} className="font-['Noto_Sans_JP'] text-sm hover:text-indigo-400 transition-colors">
                        {link.name}
                      </Link>
                    ) : (
                      <a href={link.href} className="font-['Noto_Sans_JP'] text-sm hover:text-indigo-400 transition-colors">
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="font-['Noto_Serif_JP'] text-lg mb-6">Academics</h3>
              <ul className="space-y-3">
                {footerLinks.academics.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="font-['Noto_Sans_JP'] text-sm hover:text-indigo-400 transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="font-['Noto_Serif_JP'] text-white text-lg mb-6">Research</h3>
              <ul className="space-y-3">
                {footerLinks.research.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="font-['Noto_Sans_JP'] text-sm hover:text-indigo-400 transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="font-['Noto_Serif_JP'] text-white text-lg mb-6">Important Links</h3>
              <ul className="space-y-3">
                {footerLinks.important.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-['Noto_Sans_JP'] text-sm hover:text-indigo-400 transition-colors flex items-center gap-1.5 group"
                      >
                        {link.name}
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <a href={link.href} className="font-['Noto_Sans_JP'] text-sm hover:text-indigo-400 transition-colors">
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-indigo-800/50 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-['Noto_Sans_JP'] text-sm text-gray-400">
            © 2026 SGSITS Indore. All rights reserved.
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, label }) => (
              <motion.a
                key={label}
                href="#"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-indigo-800/50 hover:bg-indigo-700 rounded-full flex items-center justify-center transition-colors"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex gap-6 text-sm font-['Noto_Sans_JP']">
            <a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}