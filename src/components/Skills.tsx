import { motion } from 'motion/react';
import { Sparkles, Terminal } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript'],
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    accent: 'bg-blue-500'
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'MongoDB', 'Firebase'],
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    accent: 'bg-emerald-500'
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git & GitHub', 'Figma', 'Vercel', 'Netlify', 'VS Code'],
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    accent: 'bg-purple-500'
  },
  {
    title: 'Others',
    skills: ['TypeScript'],
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    accent: 'bg-orange-500'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05]" 
           style={{ backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="max-w-xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-6"
            >
              <Terminal size={12} />
              Technical Stack
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-display font-bold leading-[0.9] tracking-tighter text-slate-900 dark:text-white"
            >
              MY DIGITAL <br />
              <span className="text-accent italic">ARSENAL</span>
            </motion.h2>
          </div>
          <div className="flex items-center gap-4 text-slate-300 dark:text-slate-800 font-display font-bold text-6xl hidden lg:flex select-none">
            01 <div className="w-12 h-px bg-slate-100 dark:bg-slate-800" /> 04
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 border border-slate-100 dark:border-slate-800 rounded-[3rem] overflow-hidden bg-white dark:bg-slate-900 shadow-sm">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 border-slate-100 dark:border-slate-800 ${i !== skillCategories.length - 1 ? 'lg:border-r' : ''} ${i < 2 ? 'md:border-b lg:border-b-0' : ''} group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors duration-500`}
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-800 shadow-sm flex items-center justify-center p-2.5 group-hover:scale-110 transition-transform">
                    <img src={cat.icon} alt={cat.title} className="w-full h-full object-contain" />
                  </div>
                  <div className={`w-1.5 h-1.5 rounded-full ${cat.accent} animate-pulse`} />
                </div>
                
                <div>
                  <h4 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-2">{cat.title}</h4>
                  <div className="w-8 h-1 bg-accent/20 rounded-full group-hover:w-full transition-all duration-500" />
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-2 group-hover:border-accent/20 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-all"
                    >
                      <Sparkles size={10} className="text-accent/40" />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
