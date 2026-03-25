import { motion } from 'motion/react';
import { GraduationCap, Cpu, FlaskConical, Zap, Building2, Cog } from 'lucide-react';

export function Departments() {
  const departments = [
    {
      name: 'Computer Science & Engineering',
      icon: Cpu,
      programs: ['B.E.', 'M.Tech.', 'Ph.D.'],
      specializations: 'Software Development, Data Structures, Algorithms',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50'
    },
    {
      name: 'Electrical Engineering',
      icon: Zap,
      programs: ['B.E.', 'M.Tech.', 'Ph.D.'],
      specializations: 'Power Systems, Control Systems, Electronics',
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50'
    },
    {
      name: 'Mechanical Engineering',
      icon: Cog,
      programs: ['B.E.', 'M.Tech.', 'Ph.D.'],
      specializations: 'Manufacturing, Thermal Engineering, Design',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50'
    },
    {
      name: 'Civil Engineering',
      icon: Building2,
      programs: ['B.E.', 'M.Tech.', 'Ph.D.'],
      specializations: 'Structural, Environmental, Geotechnical',
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50'
    },
    {
      name: 'Electronics & Instrumentation',
      icon: Cpu,
      programs: ['B.E.', 'M.Tech.', 'Ph.D.'],
      specializations: 'VLSI Design, Embedded Systems, Instrumentation',
      color: 'from-violet-500 to-fuchsia-500',
      bgColor: 'bg-violet-50'
    },
    {
      name: 'Applied Sciences',
      icon: FlaskConical,
      programs: ['M.Sc.', 'Ph.D.'],
      specializations: 'Physics, Chemistry, Mathematics',
      color: 'from-rose-500 to-pink-500',
      bgColor: 'bg-rose-50'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <GraduationCap className="w-6 h-6 text-indigo-600" />
            <div className="font-['Noto_Sans_JP'] text-sm tracking-[0.3em] text-indigo-600 uppercase">
              Academic Programs
            </div>
          </div>
          <h2 className="font-['Noto_Serif_JP'] text-4xl lg:text-5xl text-indigo-950 mb-4">
            Departments & Specializations
          </h2>
          <p className="font-['Noto_Sans_JP'] text-gray-600 max-w-2xl mx-auto">
            Comprehensive programs across engineering and sciences, combining rigorous academics
            with cutting-edge research opportunities
          </p>
        </motion.div>

        {/* Departments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, index) => {
            const Icon = dept.icon;
            return (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative overflow-hidden bg-white border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${dept.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                <div className="relative p-8">
                  {/* Icon */}
                  <div className={`inline-flex p-4 ${dept.bgColor} rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 bg-gradient-to-br ${dept.color} bg-clip-text text-transparent`} />
                  </div>

                  {/* Department Name */}
                  <h3 className="font-['Noto_Serif_JP'] text-xl text-indigo-900 mb-3 leading-tight">
                    {dept.name}
                  </h3>

                  {/* Programs */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {dept.programs.map((program) => (
                      <span
                        key={program}
                        className="px-3 py-1 text-xs font-['Noto_Sans_JP'] bg-gray-100 text-gray-700 rounded-full group-hover:bg-indigo-50 group-hover:text-indigo-700 transition-colors"
                      >
                        {program}
                      </span>
                    ))}
                  </div>

                  {/* Specializations */}
                  <p className="font-['Noto_Sans_JP'] text-sm text-gray-600 leading-relaxed">
                    {dept.specializations}
                  </p>

                  {/* Bottom Border Accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${dept.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-['Noto_Sans_JP'] font-medium shadow-lg hover:shadow-xl transition-shadow"
          >
            Explore All Programs
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
