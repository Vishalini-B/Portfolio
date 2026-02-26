import { motion } from 'motion/react';
import { Briefcase, MapPin, Calendar, Sparkles } from 'lucide-react';

const experiences = [
  {
    company: 'ApexPlanet Software Pvt. Ltd.',
    role: 'Web Development Intern',
    location: 'India',
    description: [
      'Worked on HTML, CSS, and JavaScript to develop responsive and interactive web pages',
      'Implemented dynamic features using DOM manipulation',
      'Designed structured layouts with Flexbox',
      'Followed coding standards and collaborated in a professional environment'
    ],
    color: 'bg-emerald-50 text-emerald-600 border-emerald-100'
  },
  {
    company: 'Robowaves (Test Yantra Software Solutions India Pvt. Ltd.)',
    role: 'Web Development Intern',
    location: 'India',
    description: [
      'Developed web applications using HTML5, CSS3, JavaScript, and React JS',
      'Implemented responsive designs',
      'Integrated Firebase for backend services',
      'Contributed to a web-based music app',
      'Collaborated across the project lifecycle'
    ],
    color: 'bg-blue-50 text-blue-600 border-blue-100'
  },
  {
    company: 'Retech Solutions Pvt. Ltd.',
    role: 'UI/UX Design Intern',
    location: 'Chennai, India',
    description: [
      'Gained experience in Figma and UI/UX design',
      'Created wireframes, prototypes, and e-commerce mobile app interfaces',
      'Applied usability, visual hierarchy, and responsive design principles to enhance user experience'
    ],
    color: 'bg-purple-50 text-purple-600 border-purple-100'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden transition-colors duration-300">
      {/* Decorative Background Text */}
      <div className="absolute top-20 right-[-5%] text-[20vw] font-display font-bold text-slate-200/30 dark:text-slate-800/20 select-none pointer-events-none leading-none">
        WORK
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="max-w-xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-widest mb-6"
            >
              <Sparkles size={12} />
              Professional Path
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-display font-bold leading-[0.9] tracking-tighter text-slate-900 dark:text-white"
            >
              WHERE I'VE <br />
              <span className="text-accent italic">CONTRIBUTED</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-500 dark:text-slate-400 font-light max-w-xs text-right hidden md:block"
          >
            A collection of my professional experiences and internship contributions in the tech industry.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white dark:bg-slate-900 rounded-[3rem] p-8 md:p-10 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center ${exp.color.split(' ')[0]} dark:bg-slate-800 border ${exp.color.split(' ')[2]} dark:border-slate-700 shadow-sm group-hover:scale-110 transition-transform`}>
                    <Briefcase size={28} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-display font-bold group-hover:text-accent transition-colors text-slate-900 dark:text-white">
                      {exp.company}
                    </h4>
                    <p className="text-sm text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest">{exp.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 mb-8 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                  <span className="flex items-center gap-2">
                    <MapPin size={14} className="text-accent" /> {exp.location}
                  </span>
                </div>

                <ul className="space-y-4">
                  {exp.description.map((item, j) => (
                    <li key={j} className="flex gap-4 text-slate-600 dark:text-slate-400 leading-relaxed group/item">
                      <div className="w-2 h-2 rounded-full bg-accent/20 shrink-0 mt-2 group-hover/item:bg-accent transition-colors" />
                      <p className="text-sm font-light">{item}</p>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-10 pt-8 border-t border-slate-50 dark:border-slate-800 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300 dark:text-slate-600">Internship Project</span>
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <Sparkles size={14} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
