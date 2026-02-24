import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-12 pb-8 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-display font-bold tracking-tight mb-4 block">
              VISHALINI<span className="text-accent">_B</span>
            </a>
            <p className="text-slate-500 max-w-xs leading-relaxed">
              Building responsive, modern web experiences with clean code and elegant UI.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm font-bold text-slate-400 uppercase tracking-widest">
            <a href="#home" className="hover:text-accent transition-colors">Home</a>
            <a href="#about" className="hover:text-accent transition-colors">About</a>
            <a href="#work" className="hover:text-accent transition-colors">Work</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com"
              className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-accent hover:text-white transition-all"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/vishalini-b-7820062a4/"
              className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-accent hover:text-white transition-all"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:vishalinibasu1055@gmail.com"
              className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-accent hover:text-white transition-all"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-100 gap-4 text-xs font-medium text-slate-400 uppercase tracking-widest">
          <p>© {currentYear} Vishalini B. All rights reserved.</p>
          <p>Designed & Built by Vishalini B</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent">Privacy Policy</a>
            <a href="#" className="hover:text-accent">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
