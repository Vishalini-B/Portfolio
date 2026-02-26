import { motion } from 'motion/react';
import { Mail, Send, MapPin, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);
    setStatus('idle');

    emailjs.sendForm(
      'service_st3m6yd',
      'template_5u76etv',
      formRef.current,
      '3lOJYX-jqfWObC51e'
    )
    .then(() => {
      setStatus('success');
      formRef.current?.reset();
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      setStatus('error');
    })
    .finally(() => {
      setIsSending(false);
      setTimeout(() => setStatus('idle'), 5000);
    });
  };

  return (
    <section id="contact" className="section-padding bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-[0.02] dark:opacity-[0.05] pointer-events-none select-none">
        <div className="w-full h-full border-[1px] border-slate-900 dark:border-white rounded-full animate-[spin_60s_linear_infinite]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-slate-100 dark:bg-slate-900 rounded-[4rem] overflow-hidden relative shadow-2xl transition-colors duration-300">
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
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 text-accent text-[10px] font-bold uppercase tracking-widest mb-8"
              >
                <Sparkles size={12} />
                Get in Touch
              </motion.div>
              
              <h2 className="text-6xl md:text-8xl font-display font-bold text-slate-900 dark:text-white mb-10 leading-[0.85] tracking-tighter">
                LET'S BUILD <br />
                <span className="text-accent italic">SOMETHING</span> <br />
                GREAT.
              </h2>
              
              <p className="text-slate-500 dark:text-slate-400 text-lg mb-10 max-w-md leading-relaxed font-light">
                I'm currently available for freelance projects and full-time opportunities. 
                Let's turn your vision into a digital reality.
              </p>
              
              <div className="space-y-6">
                <a href="mailto:vishalinibasu1055@gmail.com" className="flex items-center gap-6 text-slate-900 dark:text-white group">
                  <div className="w-16 h-16 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-[1.5rem] flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                    <Mail size={28} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">Email Me</p>
                    <p className="text-xl font-display font-bold group-hover:text-accent transition-colors">vishalinibasu1055@gmail.com</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-6 text-slate-900 dark:text-white">
                  <div className="w-16 h-16 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-[1.5rem] flex items-center justify-center">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">Location</p>
                    <p className="text-xl font-display font-bold">Chennai, India</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-[3rem] p-8 md:p-10 shadow-2xl"
            >
              <form ref={formRef} className="space-y-6" onSubmit={sendEmail}>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-2">Full Name</label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    placeholder="VISHALINI B"
                    className="w-full px-6 py-5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all font-display font-bold"
                  />
                </div>
                
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-2">Email Address</label>
                  <input
                    type="email"
                    name="from_email"
                    required
                    placeholder="HELLO@VISHALINI.DEV"
                    className="w-full px-6 py-5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all font-display font-bold"
                  />
                </div>
                
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-2">Your Message</label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    placeholder="TELL ME ABOUT YOUR PROJECT..."
                    className="w-full px-6 py-5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all resize-none font-display font-bold"
                  />
                </div>
                
                <button 
                  disabled={isSending}
                  className="w-full bg-accent text-white py-6 rounded-2xl font-display font-bold text-lg flex items-center justify-center gap-3 hover:bg-accent/90 transition-all shadow-2xl shadow-accent/20 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSending ? (
                    'SENDING...'
                  ) : status === 'success' ? (
                    <>SENT SUCCESSFULLY <CheckCircle2 size={20} /></>
                  ) : status === 'error' ? (
                    <>FAILED TO SEND <AlertCircle size={20} /></>
                  ) : (
                    <>SEND MESSAGE <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                  )}
                </button>

                {status === 'success' && (
                  <p className="text-center text-emerald-500 text-xs font-bold uppercase tracking-widest animate-bounce">
                    Thank you! I'll get back to you soon.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-center text-rose-500 text-xs font-bold uppercase tracking-widest">
                    Something went wrong. Please try again later.
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
