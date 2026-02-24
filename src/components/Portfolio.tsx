import { motion } from 'motion/react';
import { ExternalLink, ArrowRight, Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'SmartQCare',
    category: 'Web Queue Management System',
    description: 'Developed a web and mobile-based queue management system with priority-based token assignment and an AI-powered chatbot, implementing real-time database synchronization, structured user workflows, and scalable architecture.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Flutter', 'Firebase Realtime Database'],
    image: 'https://i.postimg.cc/G3zFnzNd/image.png'
  },
  {
    title: 'Panchakarma Patient Management System',
    category: 'Healthcare Management Platform',
    description: 'Enhanced a digital patient management system for Panchakarma therapies by implementing automated scheduling, real-time patient tracking, notification systems, and feedback-driven therapy adjustments with secure backend integration.',
    tags: ['React', 'Vite', 'Node.js', 'MongoDB'],
    image: 'https://i.postimg.cc/65tCxzFV/Screenshot_2025_09_17_183040.png'
  },
  {
    title: 'Musify',
    category: 'Web-Based Music Application',
    description: 'Built a responsive music streaming web application using reusable React components and Firebase backend integration for authentication, real-time data storage, and dynamic content rendering during a web technology internship.',
    tags: ['HTML', 'CSS', 'React.js', 'Firebase'],
    image: 'https://i.postimg.cc/J4Y0Yq8B/image.png'
  },
  {
    title: 'Memory Cards',
    category: 'Flutter Mobile Application',
    description: 'Developed a cross-platform memory card game featuring card flip animations, state management, score tracking logic, responsive UI design, and structured project architecture with version control.',
    tags: ['Flutter', 'Dart', 'Git', 'GitHub'],
    image: 'https://i.postimg.cc/3xLrK0hy/image.png'
  }
];

export default function Portfolio() {
  return (
    <section id="work" className="section-padding bg-white relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.02]" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

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
              Case Studies
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-display font-bold leading-[0.9] tracking-tighter"
            >
              FEATURED <br />
              <span className="text-accent italic">PROJECTS</span>
            </motion.h2>
          </div>
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="btn-secondary text-sm px-10 py-4"
          >
            Explore All Works
          </motion.button>
        </div>

        <div className="space-y-16">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
            >
              <div className="w-full lg:w-[50%]">
                <div className="relative group overflow-hidden rounded-[3rem] shadow-2xl bg-slate-100 max-w-[500px] mx-auto">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl text-accent"
                    >
                      <ExternalLink size={28} />
                    </motion.div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-[50%]">
                <div className="max-w-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-px bg-accent" />
                    <p className="text-accent font-bold text-xs uppercase tracking-widest">{project.category}</p>
                  </div>
                  
                  <h4 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight tracking-tighter group-hover:text-accent transition-colors">
                    {project.title}
                  </h4>
                  
                  <p className="text-lg text-slate-500 mb-6 leading-relaxed font-light">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-4 py-1.5 bg-slate-50 border border-slate-100 text-slate-400 rounded-full text-[10px] font-bold uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-10 border-t border-slate-100 flex items-center justify-between">
                    <button className="flex items-center gap-3 text-slate-900 font-bold hover:text-accent hover:gap-5 transition-all group">
                      VIEW CASE STUDY 
                      <ArrowRight size={20} className="text-accent group-hover:translate-x-1 transition-transform" />
                    </button>
                    <span className="text-7xl font-display font-bold text-slate-50 select-none">
                      0{i + 1}
                    </span>
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
