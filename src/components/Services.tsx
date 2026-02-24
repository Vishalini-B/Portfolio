import { motion } from 'motion/react';
import { Layout, Code2, Globe, Sparkles, ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: 'UI/UX Design',
    description: 'Figma-based design, wireframes, and clean interfaces with modern mobile-first layouts.',
    icon: Layout,
    color: 'text-emerald-500',
    bg: 'bg-emerald-50'
  },
  {
    title: 'Web Design',
    description: 'Elegant, responsive websites with clean and professional UI using Tailwind CSS.',
    icon: Globe,
    color: 'text-blue-500',
    bg: 'bg-blue-50'
  },
  {
    title: 'React Development',
    description: 'Interactive components and responsive applications with modern frontend structure.',
    icon: Code2,
    color: 'text-purple-500',
    bg: 'bg-purple-50'
  }
];

export default function Services() {
  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute bottom-10 left-[-5%] text-[15vw] font-display font-bold text-slate-200/20 select-none pointer-events-none leading-none rotate-12">
        OFFER
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-widest mb-6"
            >
              <Sparkles size={12} />
              Expertise
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-display font-bold leading-[0.9] tracking-tighter"
            >
              WHAT I <br />
              <span className="text-accent italic">DELIVER</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              {/* Number Background */}
              <div className="absolute -top-10 -left-6 text-9xl font-display font-bold text-slate-100 group-hover:text-accent/5 transition-colors select-none">
                0{i + 1}
              </div>
              
              <div className="relative z-10 bg-white rounded-[3rem] p-12 border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
                <div className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center mb-8 ${service.bg} ${service.color} group-hover:scale-110 transition-transform`}>
                  <service.icon size={32} />
                </div>
                
                <h4 className="text-2xl font-display font-bold mb-6 group-hover:text-accent transition-colors">{service.title}</h4>
                <p className="text-slate-500 leading-relaxed font-light mb-10 flex-grow">
                  {service.description}
                </p>
                
                <div className="pt-8 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">Service Details</span>
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-accent group-hover:text-white transition-all">
                    <ArrowUpRight size={20} />
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
