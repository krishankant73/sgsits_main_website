import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';

interface NewsItem {
  date: string;
  category: string;
  title: string;
  excerpt: string;
}

interface NewsUpdatesProps {
  news: NewsItem[];
}

export function NewsUpdates({ news }: NewsUpdatesProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-indigo-50/30">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Section Header */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-sm font-['Noto_Sans_JP'] tracking-[0.3em] text-indigo-600 mb-4 uppercase">
                Latest Updates
              </div>
              <h2 className="font-['Noto_Serif_JP'] text-4xl md:text-5xl text-indigo-950 mb-6">
                News & Announcements
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-violet-600 mb-6"></div>
              <p className="font-['Noto_Sans_JP'] text-gray-600 leading-relaxed mb-8">
                Stay informed about the latest research breakthroughs, academic achievements, 
                and campus developments.
              </p>
              <motion.button 
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-indigo-700 font-['Noto_Sans_JP'] font-medium group"
              >
                View All News
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </div>

          {/* News List */}
          <div className="lg:col-span-8">
            <div className="space-y-6">
              {news.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="bg-white p-6 md:p-8 border-l-4 border-indigo-600 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                        <Calendar className="w-4 h-4" />
                        <span className="font-['Noto_Sans_JP']">{item.date}</span>
                      </div>
                      <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-['Noto_Sans_JP'] tracking-wider uppercase">
                        {item.category}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-['Noto_Serif_JP'] text-xl md:text-2xl text-indigo-950 mb-3 group-hover:text-indigo-700 transition-colors">
                        {item.title}
                      </h3>
                      <p className="font-['Noto_Sans_JP'] text-gray-600 leading-relaxed">
                        {item.excerpt}
                      </p>
                    </div>

                    <ArrowRight className="hidden md:block w-5 h-5 text-gray-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all flex-shrink-0 mt-2" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
