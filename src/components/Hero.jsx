import { useTypewriter } from "../hooks/useTypewriter";

export default function Hero({ title, subtitle, isGodMode }) {
  // The magic happens here: 
  // When 'title' changes because of the toggle, the hook restarts the typing.
  const animatedTitle = useTypewriter(title, isGodMode ? 40 : 60);

  return (
    <section className="text-center space-y-8 max-w-5xl mx-auto py-24 min-h-[450px] relative flex flex-col justify-center">
      
      {/* Visual Identity Label */}
      <div className={`text-xs uppercase tracking-[0.3em] font-bold transition-all duration-500 ${
        isGodMode ? "text-green-500/50" : "text-blue-600/60"
      }`}>
        {isGodMode ? "// SYSTEM_CORE_ACCESS" : "Strategic Overview"}
      </div>

      <div className="space-y-6">
        {/* The Power Switch Headline */}
        <h1 className={`text-5xl md:text-7xl lg:text-8xl font-black tracking-tight transition-all duration-700 ${
          isGodMode 
            ? "text-green-500 font-mono drop-shadow-[0_0_15px_rgba(34,197,94,0.6)]" 
            : "text-slate-900 font-sans leading-[1.1]"
        }`}>
          {animatedTitle}
          <span className={`inline-block w-3 h-10 md:h-16 ml-2 align-middle animate-pulse ${
            isGodMode ? "bg-green-500" : "bg-blue-600"
          }`} />
        </h1>
        
        {/* The Sub-headline */}
        <p className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed transition-all duration-700 ${
          isGodMode ? "text-green-400/70 font-mono" : "text-slate-500 font-light italic"
        }`}>
          {subtitle}
        </p>
      </div>

      {/* Decorative Mode Indicator for Architect Mode */}
      {isGodMode && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[10px] font-mono text-green-900 uppercase tracking-widest opacity-40">
          [ Memory_Addr: 0x7ffd15b3a4c0 // Mode: Root_Architect ]
        </div>
      )}
    </section>
  );
}