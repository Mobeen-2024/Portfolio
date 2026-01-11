import { useTypewriter } from "../hooks/useTypewriter";

export default function Hero({ title, subtitle, isGodMode }) {
  const animatedTitle = useTypewriter(title, isGodMode ? 40 : 60);

  return (
    <section className="text-center space-y-6 max-w-4xl mx-auto py-20 min-h-[350px] flex flex-col justify-center">
      <div className="space-y-4">
        {/* Title: Scaled back to 4xl/6xl for a balanced look */}
        <h1 className={`text-4xl md:text-6xl font-extrabold tracking-tight transition-all duration-700 ${
          isGodMode 
            ? "text-green-500 font-mono drop-shadow-[0_0_10px_rgba(34,197,94,0.3)]" 
            : "text-slate-900 font-sans leading-tight"
        }`}>
          {animatedTitle}
          <span className="animate-pulse">_</span>
        </h1>
        
        {/* Subtitle: Scaled back to lg/xl for readability */}
        <p className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed transition-all duration-700 ${
          isGodMode ? "text-green-400/60 font-mono" : "text-slate-500 font-normal"
        }`}>
          {subtitle}
        </p>
      </div>
    </section>
  );
}