import { motion } from 'motion/react';
import { GraduationCap, Code2, Layout, Database, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.02]" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Organic Masked Image */}
            <div className="aspect-[4/5] max-w-[360px] mx-auto rounded-[4rem] overflow-hidden shadow-2xl relative group">
              <img
                src="https://i.postimg.cc/pXF43Vb0/image.png"
                alt="About Vishalini"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-accent/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            {/* Floating Stats Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-8 -right-4 lg:-right-8 glass p-8 rounded-[3rem] shadow-2xl max-w-[240px] border border-white/50"
            >
              <div className="flex items-center gap-3 mb-2">
                <Sparkles size={20} className="text-accent" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Education</span>
              </div>
              <p className="text-5xl font-display font-bold text-slate-900 mb-2 tracking-tighter">2027</p>
              <p className="text-sm text-slate-500 font-medium leading-tight">B.Tech in Information Technology (Currently Pursuing)</p>
            </motion.div>
            
            {/* Decorative Element */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              My Story
            </div>
            
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-[0.9] tracking-tighter">
              A BLEND OF <br />
              <span className="text-accent italic">DESIGN</span> & <br />
              DEVELOPMENT
            </h2>
            
            <p className="text-xl text-slate-500 mb-8 leading-relaxed font-light">
              Chennai-based web developer specializing in <span className="text-slate-900 font-medium">React, Node.js, and Tailwind CSS</span>. 
              I thrive at the intersection of aesthetic design and functional code, building 
              experiences that are as beautiful as they are performant.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {[
                { icon: Layout, label: 'UI/UX Design', sub: 'Figma & Wireframing', color: 'bg-emerald-50 text-emerald-500' },
                { icon: Code2, label: 'Frontend', sub: 'React & Tailwind', color: 'bg-blue-50 text-blue-500' },
                { icon: Database, label: 'Backend', sub: 'Node & MongoDB', color: 'bg-purple-50 text-purple-500' },
                { icon: GraduationCap, label: 'Education', sub: 'B.Tech IT', color: 'bg-orange-50 text-orange-500' }
              ].map((item, i) => (
                <motion.div 
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-5"
                >
                  <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center shrink-0 shadow-sm`}>
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-0.5">{item.label}</h4>
                    <p className="text-xs text-slate-500 font-medium">{item.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-accent/10 transition-colors" />
              <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Sparkles size={16} className="text-accent" />
                Core Philosophy
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                I believe in "Clean Code, Elegant UI." Every pixel should have a purpose, 
                and every line of code should be optimized for the best user experience.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Responsive Design', 'Modern UI', 'Clean Code', 'Scalable Apps'].map((tag) => (
                  <span key={tag} className="px-4 py-1.5 bg-white border border-slate-200 rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
