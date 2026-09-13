import React, { useState, useEffect } from 'react';
import BiometricScanner from '../ui/BiometricScanner';
import { Volume2, VolumeX, Menu, X, Terminal, Sparkles, ExternalLink } from 'lucide-react';
import { isMuted, toggleMute, playClick } from '../../utils/audio';

export default function Navigation({ isGodMode, isScanning, onScan, activeLabel }) {
  const [muted, setMuted] = useState(() => isMuted());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMuteToggle = () => {
    const newMuted = toggleMute();
    setMuted(newMuted);
  };

  const scrollTo = (id) => {
    playClick(500, 0.03);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { id: 'about', label: isGodMode ? '// 01_ABOUT' : 'About' },
    { id: 'skills', label: isGodMode ? '// 02_STACK' : 'Competencies' },
    { id: 'projects', label: isGodMode ? '// 03_PROJECTS' : 'Projects' },
    { id: 'timeline', label: isGodMode ? '// 04_TIMELINE' : 'Experience' },
    { id: 'contact', label: isGodMode ? '// 05_CONTACT' : 'Contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
      scrolled ? "py-2" : "py-3 md:py-4"
    }`}>
      <nav className={`max-w-7xl mx-auto px-4 md:px-8 transition-all duration-500 rounded-2xl md:rounded-3xl border backdrop-blur-xl ${
        isGodMode 
          ? "bg-[#050706]/90 border-green-500/30 shadow-[0_4px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(34,197,94,0.1)]" 
          : "bg-white/80 border-slate-200/80 shadow-[0_10px_35px_-5px_rgba(15,23,42,0.06),0_0_1px_1px_rgba(226,232,240,0.6)]"
      }`}>
        <div className="h-16 md:h-20 flex items-center justify-between">
          
          {/* Logo Section */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3.5 cursor-pointer group select-none"
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg transition-all duration-300 group-hover:scale-105 ${
              isGodMode 
                ? "bg-green-500 text-black shadow-[0_0_20px_rgba(34,197,94,0.5)] group-hover:bg-green-400 font-mono" 
                : "bg-gradient-to-tr from-blue-700 to-blue-500 text-white shadow-md shadow-blue-500/25"
            }`}>
              M
            </div>
            <div className="flex flex-col">
              <span className={`text-sm font-black tracking-wider transition-colors ${
                isGodMode ? "text-green-400 font-mono" : "text-slate-900 font-sans"
              }`}>
                MOBEEN
              </span>
              <div className="flex items-center gap-1.5">
                <span className={`w-1.5 h-1.5 rounded-full ${
                  isGodMode ? "bg-green-400 animate-pulse" : "bg-emerald-500"
                }`} />
                <span className={`text-[10px] font-bold uppercase tracking-[0.18em] ${
                  isGodMode ? "text-green-500/70 font-mono" : "text-slate-500 font-sans"
                }`}>
                  {isGodMode ? "KERNEL: ONLINE" : activeLabel || "Growth & Systems"}
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <ul className="flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => scrollTo(link.id)} 
                    className={`text-xs uppercase font-bold tracking-wider transition-all px-3.5 py-1.5 rounded-xl cursor-pointer ${
                      isGodMode 
                        ? "text-green-400/70 hover:text-green-300 hover:bg-green-500/10 font-mono" 
                        : "text-slate-600 hover:text-blue-600 hover:bg-blue-50/70 font-sans"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Controls: Sound Toggle, Scanner, Mobile Hamburger */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Audio Toggle */}
            <button
              onClick={handleMuteToggle}
              title={muted ? "Unmute UI Sound Effects" : "Mute Sound Effects"}
              className={`p-2.5 rounded-xl border transition-all duration-300 ${
                isGodMode 
                  ? "border-green-500/30 text-green-400/80 hover:text-green-300 hover:bg-green-500/10 hover:border-green-400/60" 
                  : "border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-100 hover:border-slate-300"
              }`}
            >
              {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            {/* Biometric Reality Scanner */}
            <div className="scale-90 sm:scale-100">
              <BiometricScanner isScanning={isScanning} isGodMode={isGodMode} onScan={onScan} />
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2.5 rounded-xl border transition-all ${
                isGodMode 
                  ? "border-green-500/30 text-green-400 hover:bg-green-500/10" 
                  : "border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className={`lg:hidden border-t py-4 px-2 animate-in slide-in-from-top-2 duration-300 ${
            isGodMode ? "border-green-500/20" : "border-slate-100"
          }`}>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-xs uppercase font-bold tracking-wider transition-colors ${
                      isGodMode 
                        ? "text-green-400 hover:bg-green-500/10 font-mono" 
                        : "text-slate-700 hover:bg-slate-100 font-sans"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}