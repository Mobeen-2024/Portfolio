import { useTypewriter } from "../../hooks/useTypewriter";

export default function Hero({ title, subtitle, isGodMode }) {
  // Set speed and enable glitching in Architect mode
  const typingSpeed = isGodMode ? 35 : 55;
  const animatedTitle = useTypewriter(title, typingSpeed, isGodMode);

  return (
    <section className="text-center space-y-6 max-w-4xl mx-auto py-20 min-h-[350px] flex flex-col justify-center">
      <div className="space-y-4">
        
        {/* The 'key' ensures the hook resets when title changes */}
        <h1 
          key={title} 
          className={`text-4xl md:text-6xl font-extrabold tracking-tight transition-all duration-700 ${
            isGodMode ? "text-green-500 font-mono drop-shadow-[0_0_12px_rgba(34,197,94,0.4)]" : "text-slate-900 font-sans"
          }`}
        >
          {animatedTitle}
          <span className={`animate-pulse ml-1 ${isGodMode ? "text-green-400" : "text-blue-600"}`}>_</span>
        </h1>
        
        <p 
          key={subtitle}
          className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed transition-all duration-700 ${
            isGodMode ? "text-green-400/60 font-mono" : "text-slate-500 font-normal"
          }`}
        >
          {subtitle}
        </p>

      </div>
    </section>
  );
}