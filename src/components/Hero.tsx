import { motion } from 'motion/react';
import { Download, Github, Linkedin, Mail, ChevronRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center pt-20 pb-8 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Modern Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05]" 
           style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-400/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold mb-6 shadow-sm"
            >
              <Sparkles size={12} className="text-accent" />
              <span className="uppercase tracking-wider">Available for new opportunities</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-8xl font-display font-bold leading-[0.9] mb-6 tracking-tighter text-slate-900 dark:text-white">
              VISHALINI B<br />
            </h1>
            
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
              <p className="text-lg text-slate-500 dark:text-slate-400 max-w-md leading-relaxed font-light">
                A Chennai-based developer 
                merging <span className="italic">clean code</span> with <span className="italic">elegant design</span>.
              </p>
              
              <div className="h-px w-10 bg-slate-200 dark:bg-slate-800 hidden md:block" />
              
              <div className="flex items-center gap-3">
                <a href="https://github.com" className="w-9 h-9 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400 hover:text-accent hover:border-accent transition-all">
                  <Github size={16} />
                </a>
                <a href="https://www.linkedin.com/in/vishalini-b-7820062a4/" className="w-9 h-9 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400 hover:text-accent hover:border-accent transition-all">
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-10">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#work" 
                className="btn-primary px-6 py-3 text-base flex items-center gap-2 group"
              >
                Explore Projects 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#" 
                className="btn-secondary px-6 py-3 text-base flex items-center gap-2 dark:bg-slate-900 dark:text-white dark:border-slate-800"
              >
                Resume <Download size={18} />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            {/* Organic Shape Mask for Profile */}
            <div className="relative w-full aspect-[4/5] max-w-[350px] mx-auto">
              <div className="absolute inset-0 bg-accent/5 dark:bg-accent/10 rounded-[2.5rem] -rotate-6 scale-105" />
              <div className="absolute inset-0 border border-slate-100 dark:border-slate-800 rounded-[2.5rem] rotate-3" />
              
              <div className="relative z-10 w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img
                  src="https://i.postimg.cc/mrwSKJg2/IMG_20260218_WA0016_jpg.jpg"
                  alt="Vishalini B"
                  className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Floating Tech Stack */}
              <div className="absolute -right-6 top-1/4 z-20">
                <TechBadge icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" label="React" delay={0.4} />
              </div>
              <div className="absolute -left-6 bottom-1/4 z-20">
                <TechBadge icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" label="Figma" delay={0.6} />
              </div>
              <div className="absolute right-10 -bottom-4 z-20">
                <TechBadge icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" label="MongoDB" delay={0.8} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom Marquee Text */}
      <div className="absolute bottom-0 left-0 right-0 py-4 bg-slate-50/50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800 overflow-hidden whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-300 dark:text-slate-700"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="flex items-center gap-4">
              <Sparkles size={10} />
              React Developer • UI/UX Designer • Node.js Expert • Problem Solver
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TechBadge({ icon, label, delay }: { icon: string, label: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="glass px-4 py-3 rounded-2xl flex items-center gap-3 shadow-xl border border-white/40 dark:border-slate-800"
    >
      <div className="w-8 h-8 flex items-center justify-center">
        <img src={icon} alt={label} className="w-full h-full object-contain" />
      </div>
      <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{label}</span>
    </motion.div>
  );
}

function ArrowRight({ size, className }: { size: number, className?: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

