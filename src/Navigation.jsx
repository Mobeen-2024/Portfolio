import { initAudio } from "./assets/audio";

export default function Navigation({ activeLabel, isGodMode, onToggleMode, isSoundEnabled, onToggleSound }) {
  
  // THE KEY: Unlock audio on the same click that toggles the state
  const handleSoundToggle = () => {
    initAudio(); 
    onToggleSound();
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-4 md:p-6">
      <div className={`max-w-6xl mx-auto px-6 py-3 rounded-2xl flex justify-between items-center transition-all duration-500 border shadow-2xl
        ${isGodMode 
          ? "bg-black/40 backdrop-blur-md border-green-500/20 shadow-green-900/20" 
          : "bg-white/70 backdrop-blur-md border-white/20 shadow-slate-200/50"}`}>
        
        {/* Brand / Mode Label */}
        <div className="flex flex-col">
          <span className="text-[9px] uppercase tracking-[0.4em] opacity-40 font-mono">
            {isGodMode ? "System_Status" : "Profile_View"}
          </span>
          <h1 className="text-sm font-bold tracking-widest uppercase">
            {activeLabel}
          </h1>
        </div>

        <div className="flex items-center gap-4">
          
          {/* Audio Button */}
          <button
            onClick={handleSoundToggle}
            className={`p-2 rounded-xl transition-all duration-300 ${
              isGodMode ? "text-green-500 hover:bg-green-500/10" : "text-slate-900 hover:bg-slate-100"
            } ${!isSoundEnabled && "opacity-40"}`}
          >
            {isSoundEnabled ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
              </svg>
            )}
          </button>

          {/* Reality Toggle */}
          <button
            onClick={onToggleMode}
            className={`px-5 py-2 text-xs font-bold rounded-xl transition-all duration-300 transform active:scale-95 border
              ${isGodMode
                  ? "bg-green-500 text-black border-green-400 shadow-[0_0_15px_rgba(34,197,94,0.3)]"
                  : "bg-slate-900 text-white border-slate-800 shadow-lg shadow-slate-300"
              }`}
          >
            {isGodMode ? "EXIT_ENV" : "VIEW_TECH_STACK"}
          </button>
        </div>
      </div>
    </nav>
  );
}