import { motion } from 'motion/react';
import { Award, Users, BookOpen, Briefcase, Globe2, TrendingUp } from 'lucide-react';
import { AnimatedCounter } from './ui/AnimatedCounter';

export function WhyChoose() {
  const achievements = [
    {
      icon: Award,
      number: 70,
      suffix: '+',
      label: 'Years of Legacy',
      description: 'Established in 1952, a pioneer in technical education'
    },
    {
      icon: Users,
      number: 5000,
      suffix: '+',
      label: 'Active Students',
      description: 'Diverse community of talented minds from across India'
    },
    {
      icon: BookOpen,
      number: 200,
      suffix: '+',
      label: 'Expert Faculty',
      description: 'Ph.D. qualified professors and industry experts'
    },
    {
      icon: Briefcase,
      number: 95,
      suffix: '%',
      label: 'Placement Rate',
      description: 'Consistent high placements with top companies'
    },
    {
      icon: Globe2,
      number: 50,
      suffix: '+',
      label: 'Industry Partners',
      description: 'Strong collaborations with leading organizations'
    },
    {
      icon: TrendingUp,
      number: 8.5,
      prefix: '₹',
      suffix: 'L',
      label: 'Avg. Package',
      description: 'Competitive salary packages for graduates'
    }
  ];

  const features = [
    {
      title: 'NAAC A+ Accreditation',
      description: 'Recognized by National Assessment and Accreditation Council with the highest grade for academic excellence'
    },
    {
      title: 'State-of-the-Art Infrastructure',
      description: 'Modern laboratories, research centers, digital library, and advanced computational facilities'
    },
    {
      title: 'Research & Innovation',
      description: 'Active research programs with funding from DST, AICTE, and industry sponsored projects'
    },
    {
      title: 'Global Exposure',
      description: 'International collaborations, student exchange programs, and global internship opportunities'
    },
    {
      title: 'Vibrant Campus Life',
      description: 'Technical clubs, cultural festivals, sports facilities, and student-led initiatives'
    },
    {
      title: 'Distinguished Alumni',
      description: 'Successful graduates leading in academia, industry, and entrepreneurship worldwide'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-indigo-50/50 via-white to-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="font-['Noto_Sans_JP'] text-sm tracking-[0.3em] text-indigo-600 uppercase mb-4">
            Why SGSITS
          </div>
          <h2 className="font-['Noto_Serif_JP'] text-4xl lg:text-5xl text-indigo-950 mb-6">
            Excellence in Education & Beyond
          </h2>
          <p className="font-['Noto_Sans_JP'] text-gray-600 max-w-2xl mx-auto text-lg">
            A legacy of academic rigor, innovation, and holistic development that prepares
            students for global success
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="group relative bg-white p-8 border border-gray-200 hover:border-indigo-200 hover:shadow-xl transition-all duration-300"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-violet-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative">
                  <div className="inline-flex p-3 bg-indigo-100 group-hover:bg-indigo-600 rounded-lg mb-4 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors duration-300" />
                  </div>

                  <AnimatedCounter
                    end={item.number}
                    suffix={item.suffix}
                    prefix={item.prefix}
                    className="font-['Noto_Serif_JP'] text-4xl text-indigo-900 mb-2"
                  />

                  <div className="font-['Noto_Sans_JP'] text-sm font-medium text-indigo-700 mb-2 uppercase tracking-wide">
                    {item.label}
                  </div>

                  <p className="font-['Noto_Sans_JP'] text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-indigo-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-6 border-l-4 border-indigo-200 hover:border-indigo-600 transition-colors duration-300 group"
            >
              <h3 className="font-['Noto_Serif_JP'] text-lg text-indigo-900 mb-2 group-hover:text-indigo-700 transition-colors">
                {feature.title}
              </h3>
              <p className="font-['Noto_Sans_JP'] text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Dot */}
              <div className="absolute left-0 top-0 w-0 h-0 -translate-x-1/2 transition-all duration-300 group-hover:w-3 group-hover:h-3 bg-indigo-600 rounded-full"></div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
