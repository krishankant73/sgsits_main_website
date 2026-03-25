import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface ResearchProject {
  title: string;
  description: string;
  image: string;
  field: string;
  size: 'large' | 'small';
}

interface ResearchShowcaseProps {
  projects: ResearchProject[];
}

export function ResearchShowcase({ projects }: ResearchShowcaseProps) {
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
            Breakthroughs
          </div>
          <h2 className="font-['Noto_Serif_JP'] text-4xl md:text-5xl text-indigo-950 mb-4">
            Research Showcase
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-violet-600"></div>
        </motion.div>

        {/* Magazine-style Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto">
          {projects.map((project, index) => {
            // Create asymmetrical layout pattern
            const layoutClasses = 
              index === 0 ? 'md:col-span-8 md:row-span-2' :
              index === 1 ? 'md:col-span-4' :
              index === 2 ? 'md:col-span-4' :
              index === 3 ? 'md:col-span-6' :
              index === 4 ? 'md:col-span-6' :
              'md:col-span-4';

            const aspectClasses = 
              index === 0 ? 'aspect-[16/10]' :
              index === 1 || index === 2 ? 'aspect-[4/3]' :
              'aspect-[3/2]';

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group cursor-pointer ${layoutClasses}`}
              >
                <div className="relative h-full overflow-hidden bg-gray-100">
                  <div className={`relative ${aspectClasses} overflow-hidden`}>
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/90 via-indigo-950/40 to-transparent"></div>
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                      <div className="text-xs font-['Noto_Sans_JP'] tracking-widest text-indigo-200 mb-3 uppercase">
                        {project.field}
                      </div>
                      
                      <h3 className={`font-['Noto_Serif_JP'] text-white mb-3 group-hover:text-indigo-200 transition-colors ${
                        index === 0 ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'
                      }`}>
                        {project.title}
                      </h3>
                      
                      <p className={`font-['Noto_Sans_JP'] text-gray-200 leading-relaxed ${
                        index === 0 ? 'text-base max-w-2xl' : 'text-sm'
                      }`}>
                        {project.description}
                      </p>

                      <motion.div 
                        initial={{ opacity: 0, scale: 0 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center"
                      >
                        <ArrowUpRight className="w-6 h-6 text-indigo-900" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 border-2 border-indigo-900 text-indigo-900 font-['Noto_Sans_JP'] font-medium hover:bg-indigo-900 hover:text-white transition-colors"
          >
            Explore All Research
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
