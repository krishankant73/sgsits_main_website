import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  backgroundImage: string;
}

export function Hero({ backgroundImage }: HeroProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
      {/* Background Image with Overlay and Parallax */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <img
          src={backgroundImage}
          alt="University Campus"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/90 via-indigo-900/85 to-violet-900/80"></div>
      </motion.div>

      {/* Content */}
      <motion.div className="relative h-full max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center" style={{ opacity }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-3xl"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-['Noto_Sans_JP'] text-sm tracking-[0.3em] text-indigo-200 mb-6 uppercase"
          >
            Excellence • Innovation • Leadership
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-['Noto_Serif_JP'] text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight"
          >
            Shaping Tomorrow's Engineers & Scientists
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-['Noto_Sans_JP'] text-lg md:text-xl text-gray-100 mb-10 max-w-2xl leading-relaxed"
          >
            Since 1952, fostering academic excellence and innovation in engineering and 
            science education. Building a legacy of distinguished alumni and groundbreaking research.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-indigo-900 font-['Noto_Sans_JP'] font-medium flex items-center gap-2 hover:bg-gray-50 transition-colors group"
            >
              Explore Research
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white text-white font-['Noto_Sans_JP'] font-medium hover:bg-white hover:text-indigo-900 transition-colors"
            >
              About SGSITS
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/70 rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}