import { motion } from 'motion/react';
import { Mail, Send, MapPin, Sparkles, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-[0.02] pointer-events-none select-none">
        <div className="w-full h-full border-[1px] border-slate-900 rounded-full animate-[spin_60s_linear_infinite]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-slate-900 rounded-[4rem] overflow-hidden relative shadow-2xl">
          {/* Animated Gradient Orbs */}
          <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-10 md:p-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-accent text-[10px] font-bold uppercase tracking-widest mb-8"
              >
                <Sparkles size={12} />
                Get in Touch
              </motion.div>
              
              <h2 className="text-6xl md:text-8xl font-display font-bold text-white mb-10 leading-[0.85] tracking-tighter">
                LET'S BUILD <br />
                <span className="text-accent italic">SOMETHING</span> <br />
                GREAT.
              </h2>
              
              <p className="text-slate-400 text-lg mb-10 max-w-md leading-relaxed font-light">
                I'm currently available for freelance projects and full-time opportunities. 
                Let's turn your vision into a digital reality.
              </p>
              
              <div className="space-y-6">
                <a href="mailto:vishalinibasu1055@gmail.com" className="flex items-center gap-6 text-white group">
                  <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-[1.5rem] flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                    <Mail size={28} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Email Me</p>
                    <p className="text-xl font-display font-bold group-hover:text-accent transition-colors">vishalinibasu1055@gmail.com</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-6 text-white">
                  <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-[1.5rem] flex items-center justify-center">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Location</p>
                    <p className="text-xl font-display font-bold">Chennai, India</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-10 shadow-2xl"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="VISHALINI B"
                    className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all font-display font-bold"
                  />
                </div>
                
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="HELLO@VISHALINI.DEV"
                    className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all font-display font-bold"
                  />
                </div>
                
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-2">Your Message</label>
                  <textarea
                    rows={4}
                    placeholder="TELL ME ABOUT YOUR PROJECT..."
                    className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all resize-none font-display font-bold"
                  />
                </div>
                
                <button className="w-full bg-accent text-white py-6 rounded-2xl font-display font-bold text-lg flex items-center justify-center gap-3 hover:bg-accent/90 transition-all shadow-2xl shadow-accent/20 group">
                  SEND MESSAGE 
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
