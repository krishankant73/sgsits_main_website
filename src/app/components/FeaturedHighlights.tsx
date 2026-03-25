import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface Highlight {
  title: string;
  description: string;
  image: string;
  category: string;
}

interface FeaturedHighlightsProps {
  highlights: Highlight[];
}

export function FeaturedHighlights({ highlights }: FeaturedHighlightsProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-sm font-['Noto_Sans_JP'] tracking-[0.3em] text-indigo-600 mb-4 uppercase">
            Excellence
          </div>
          <h2 className="font-['Noto_Serif_JP'] text-4xl md:text-5xl text-indigo-950 mb-4">
            Featured Highlights
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-violet-600"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden bg-gray-100 mb-6 aspect-[4/3]">
                <motion.img
                  src={highlight.image}
                  alt={highlight.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <ArrowUpRight className="w-5 h-5 text-indigo-900" />
                </motion.div>
              </div>
              
              <div className="text-xs font-['Noto_Sans_JP'] tracking-wider text-indigo-600 mb-3 uppercase">
                {highlight.category}
              </div>
              
              <h3 className="font-['Noto_Serif_JP'] text-xl md:text-2xl text-indigo-950 mb-3 group-hover:text-indigo-700 transition-colors">
                {highlight.title}
              </h3>
              
              <p className="font-['Noto_Sans_JP'] text-gray-600 leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
