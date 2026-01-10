import { useTypewriter } from "../hooks/useTypewriter";

export default function Hero({ title, subtitle, isGodMode }) {
  // We use the typewriter for the title to give it that "live" feeling
  const animatedTitle = useTypewriter(title, isGodMode ? 60 : 80);

  return (
    <section className="text-center space-y-6 max-w-4xl mx-auto py-20 min-h-[400px]">
      <div className="space-y-4">
        <h1 className={`text-5xl md:text-7xl font-extrabold tracking-tight transition-all duration-500 ${
          isGodMode 
            ? "text-green-500 font-mono drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]" 
            : "text-slate-900 font-sans"
        }`}>
          {animatedTitle}
          <span className="animate-pulse">_</span>
        </h1>
        
        <p className={`text-xl md:text-2xl transition-all duration-500 max-w-2xl mx-auto ${
          isGodMode ? "text-green-400/80 font-mono" : "text-slate-600 font-light"
        }`}>
          {subtitle}
        </p>
      </div>
    </section>
  );
}