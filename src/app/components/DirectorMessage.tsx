import { motion } from 'motion/react';
import { Quote, ArrowRight } from 'lucide-react';
import { AnimatedCounter } from './ui/AnimatedCounter';
import { Link } from 'react-router';

interface DirectorMessageProps {
  directorImage: string;
}

export function DirectorMessage({ directorImage }: DirectorMessageProps) {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-indigo-50/30">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left: Director Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 overflow-hidden shadow-2xl">
              <img
                src={directorImage}
                alt="Director SGSITS"
                className="w-full h-full object-cover"
              />
              {/* Decorative Element */}
              <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-indigo-600"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-violet-600"></div>
            </div>

            {/* Name and Title */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 text-center lg:text-left"
            >
              <div className="font-['Noto_Serif_JP'] text-2xl text-indigo-900">Dr. Nitesh Purohit</div>
              <div className="font-['Noto_Sans_JP'] text-sm text-gray-600 mt-1 tracking-wide">Director, SGSITS</div>
              <div className="font-['Noto_Sans_JP'] text-xs text-gray-500 mt-1">Former Professor, IIIT Prayagraj</div>
            </motion.div>
          </motion.div>

          {/* Right: Message Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="inline-block">
              <div className="font-['Noto_Sans_JP'] text-sm tracking-[0.3em] text-indigo-600 uppercase mb-2">
                Director's Message
              </div>
              <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-violet-600"></div>
            </div>

            <Quote className="w-12 h-12 text-indigo-200" />

            <div className="space-y-4 font-['Noto_Sans_JP'] text-gray-700 leading-relaxed">
              <p className="text-lg">
                Welcome to Shri Govindram Seksaria Institute of Technology and Science, a premier institution
                dedicated to excellence in engineering and science education since 1952.
              </p>

              <p>
                At SGSITS, we believe in nurturing not just technical competence, but also critical thinking,
                innovation, and ethical leadership. Our commitment to academic rigor, coupled with state-of-the-art
                research facilities and strong industry partnerships, ensures that our students are prepared to
                excel in an ever-evolving technological landscape.
              </p>

              <p>
                Our NAAC A+ accreditation is a testament to our unwavering dedication to quality education and
                holistic development. We take pride in our distinguished alumni who are making significant
                contributions across the globe in academia, industry, and entrepreneurship.
              </p>

              <p>
                I invite you to explore the transformative educational experience that SGSITS offers. Together,
                we are shaping tomorrow's engineers and scientists who will drive innovation and create a better future.
              </p>
            </div>

            <div className="pt-6 flex items-center justify-between">
              <div>
                <div className="font-['Noto_Serif_JP'] text-xl text-indigo-900">Dr. Nitesh Purohit</div>
                <div className="font-['Noto_Sans_JP'] text-sm text-gray-600 italic mt-1">Director</div>
              </div>
              <Link to="/director">
                <motion.button
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-indigo-600 text-white font-['Noto_Sans_JP'] text-sm font-medium flex items-center gap-2 hover:bg-indigo-700 transition-colors group"
                >
                  View Full Profile
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </div>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200"
            >
              <div className="text-center">
                <AnimatedCounter
                  end={70}
                  suffix="+"
                  className="font-['Noto_Serif_JP'] text-3xl text-indigo-900"
                />
                <div className="font-['Noto_Sans_JP'] text-xs text-gray-600 mt-1">Years of Excellence</div>
              </div>
              <div className="text-center border-x border-gray-200">
                <AnimatedCounter
                  end={95}
                  suffix="%"
                  className="font-['Noto_Serif_JP'] text-3xl text-indigo-900"
                />
                <div className="font-['Noto_Sans_JP'] text-xs text-gray-600 mt-1">Placement Rate</div>
              </div>
              <div className="text-center">
                <AnimatedCounter
                  end={50}
                  suffix="+"
                  className="font-['Noto_Serif_JP'] text-3xl text-indigo-900"
                />
                <div className="font-['Noto_Sans_JP'] text-xs text-gray-600 mt-1">Industry Partners</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
