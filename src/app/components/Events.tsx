import { motion } from 'motion/react';
import { Calendar, MapPin, Clock } from 'lucide-react';

interface Event {
  date: string;
  month: string;
  time: string;
  title: string;
  location: string;
  category: string;
}

interface EventsProps {
  events: Event[];
}

export function Events({ events }: EventsProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-950 to-violet-900 text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="text-sm font-['Noto_Sans_JP'] tracking-[0.3em] text-indigo-300 mb-4 uppercase">
            Campus Calendar
          </div>
          <h2 className="font-['Noto_Serif_JP'] text-4xl md:text-5xl mb-4">
            Upcoming Events
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-400 to-violet-400 mx-auto"></div>
        </motion.div>

        {/* Timeline-style Events */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[40px] md:left-[60px] top-0 bottom-0 w-0.5 bg-indigo-400/30"></div>

            <div className="space-y-8">
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex gap-6 group"
                >
                  {/* Date Badge */}
                  <div className="flex-shrink-0 relative z-10">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="w-20 md:w-28 h-20 md:h-28 bg-white text-indigo-950 flex flex-col items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow"
                    >
                      <div className="font-['Noto_Serif_JP'] text-3xl md:text-4xl leading-none mb-1">
                        {event.date}
                      </div>
                      <div className="font-['Noto_Sans_JP'] text-xs md:text-sm tracking-wider uppercase">
                        {event.month}
                      </div>
                    </motion.div>
                  </div>

                  {/* Event Details */}
                  <motion.div 
                    whileHover={{ x: 8 }}
                    className="flex-1 bg-white/5 backdrop-blur-sm p-6 md:p-8 hover:bg-white/10 transition-all duration-300 border-l-4 border-indigo-400"
                  >
                    <div className="inline-block px-3 py-1 bg-indigo-400 text-indigo-950 text-xs font-['Noto_Sans_JP'] tracking-wider uppercase mb-4">
                      {event.category}
                    </div>
                    
                    <h3 className="font-['Noto_Serif_JP'] text-xl md:text-2xl mb-4">
                      {event.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span className="font-['Noto_Sans_JP']">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span className="font-['Noto_Sans_JP']">{event.location}</span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* View Calendar Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-white text-indigo-900 font-['Noto_Sans_JP'] font-medium hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            View Full Calendar
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
