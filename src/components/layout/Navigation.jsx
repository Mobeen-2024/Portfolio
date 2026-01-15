import React from 'react';
import BiometricScanner from '../ui/BiometricScanner';

export default function Navigation({ isGodMode, isScanning, onScan, activeLabel }) {
  // The scroll function
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for the fixed navbar (approx 80px)
      const offset = 80;
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

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 border-b ${
      isGodMode 
        ? "bg-black/60 border-green-500/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]" 
        : "bg-white/60 border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]"
    } backdrop-blur-xl`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo Section - Professional Sizing */}
        <div className="flex items-center gap-4">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl ${
            isGodMode ? "bg-green-500 text-black shadow-lg" : "bg-blue-600 text-white"
          }`}>
            M
          </div>
          <div className="flex flex-col">
            <span className={`text-sm font-bold tracking-tight ${isGodMode ? "text-green-500" : "text-slate-900"}`}>
              MOBEEN
            </span>
            <span className={`text-[10px] font-medium uppercase tracking-[0.2em] opacity-60 ${isGodMode ? "text-green-400" : "text-slate-500"}`}>
              {activeLabel}
            </span>
          </div>
        </div>

        {/* Menu & Scanner */}
        <div className="flex items-center gap-8">
          <ul className={`hidden md:flex gap-8 ${
            isGodMode ? "text-green-500" : "text-slate-500"
          }`}>
            <li>
              <button onClick={() => scrollTo('about')} className="hover:opacity-100 opacity-70 transition-all uppercase text-xs font-bold tracking-widest">
                About
              </button>
            </li>
            <li>
              <button onClick={() => scrollTo('projects')} className="hover:opacity-100 opacity-70 transition-all uppercase text-xs font-bold tracking-widest">
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => scrollTo('contact')} className="hover:opacity-100 opacity-70 transition-all uppercase text-xs font-bold tracking-widest">
                Contact
              </button>
            </li>
          </ul>

          <BiometricScanner isScanning={isScanning} isGodMode={isGodMode} onScan={onScan} />
        </div> 
      </div>
    </nav>
  );
}