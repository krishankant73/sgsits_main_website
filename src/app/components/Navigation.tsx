import { useState, useEffect } from 'react';
import { Search, Menu, X, Globe, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';
import logoImage from "../../assets/be1c60d2202eb5c28d7de018f5546a7b65312d26.png";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('EN');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Director', href: '/director' },
    { name: 'Academics', href: '#academics' },
    { name: 'Research', href: '#research' },
    { name: 'Campus Life', href: '#campus' },
    { name: 'News', href: '#news' }
  ];

  const externalLinks = [
    { name: 'One Year of Leadership', href: 'https://one-year-of-leadership.vercel.app/' },
    { name: 'SSS Portal', href: 'https://sss.sgsits.ac.in/' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/">
            <motion.div
              className="flex items-center gap-3 cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={logoImage}
                alt="SGSITS Logo"
                className="w-14 h-14 object-contain"
              />
              <div>
                <div className="font-['Noto_Serif_JP'] text-base lg:text-lg text-indigo-900 leading-tight">SGSITS</div>
                <div className="text-[10px] lg:text-xs text-gray-600 tracking-wide leading-tight">INDORE</div>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => {
              const isExternal = item.href.startsWith('#');
              const isDirector = item.href === '/director';

              if (isExternal) {
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="text-sm font-['Noto_Sans_JP'] text-gray-700 hover:text-indigo-700 transition-colors relative group"
                    whileHover={{ y: -2 }}
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-700 group-hover:w-full transition-all duration-300"></span>
                  </motion.a>
                );
              }

              if (isDirector) {
                return (
                  <Link key={item.name} to={item.href}>
                    <motion.div
                      className="text-sm font-['Noto_Sans_JP'] text-gray-700 hover:text-indigo-700 transition-colors relative group"
                      whileHover={{ y: -2 }}
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-700 group-hover:w-full transition-all duration-300"></span>
                    </motion.div>
                  </Link>
                );
              }

              return null;
            })}

            {/* Dropdown for External Links */}
            <div className="relative group">
              <motion.button
                className="text-sm font-['Noto_Sans_JP'] text-gray-700 hover:text-indigo-700 transition-colors relative flex items-center gap-1"
                whileHover={{ y: -2 }}
              >
                Important Links
                <ExternalLink className="w-3 h-3" />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-700 group-hover:w-full transition-all duration-300"></span>
              </motion.button>

              {/* Dropdown Menu */}
              <div className="absolute top-full right-0 mt-2 w-56 bg-white border border-gray-200 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {externalLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-sm font-['Noto_Sans_JP'] text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors flex items-center justify-between group/item"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button 
              onClick={() => setLanguage(language === 'EN' ? 'HI' : 'EN')}
              className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-indigo-700 transition-colors"
            >
              <Globe className="w-4 h-4" />
              {language}
            </button>
            <button className="text-gray-600 hover:text-indigo-700 transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-gray-700"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200"
          >
            <div className="px-6 py-4 space-y-3">
              {navItems.map((item) => {
                const isExternal = item.href.startsWith('#');
                const isDirector = item.href === '/director';

                if (isExternal) {
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block py-2 text-gray-700 hover:text-indigo-700 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  );
                }

                if (isDirector) {
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block py-2 text-gray-700 hover:text-indigo-700 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  );
                }

                return null;
              })}

              {/* External Links in Mobile */}
              <div className="pt-2 border-t border-gray-200">
                <div className="text-xs text-gray-500 mb-2 uppercase tracking-wide font-['Noto_Sans_JP']">Important Links</div>
                {externalLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-2 text-gray-700 hover:text-indigo-700 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ))}
              </div>
              <div className="pt-3 border-t border-gray-200 flex items-center gap-4">
                <button 
                  onClick={() => setLanguage(language === 'EN' ? 'HI' : 'EN')}
                  className="flex items-center gap-1.5 text-sm text-gray-600"
                >
                  <Globe className="w-4 h-4" />
                  {language}
                </button>
                <button className="text-gray-600">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}