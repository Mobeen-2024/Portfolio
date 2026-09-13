import { useTypewriter } from "../../hooks/useTypewriter";
import { ArrowRight, Terminal, Sparkles } from "lucide-react";

export default function Hero({ title, subtitle, isGodMode, onOpenAgentConsole }) {
  const typingSpeed = isGodMode ? 35 : 50;
  const animatedTitle = useTypewriter(title, typingSpeed, isGodMode);

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[75vh] flex flex-col justify-center items-center px-6 pt-16 md:pt-0">
      <div className="w-full max-w-4xl text-center space-y-8">
        
        {/* Animated Headline */}
        <h1 
          key={title} 
          className={`text-3xl sm:text-5xl md:text-6xl font-black tracking-tight transition-all duration-700 leading-[1.15] ${
            isGodMode 
              ? "text-green-500 font-mono drop-shadow-[0_0_15px_rgba(34,197,94,0.4)]" 
              : "text-slate-900 font-sans"
          }`}
        >
          {animatedTitle}
          <span className={`animate-pulse ml-1 ${isGodMode ? "text-green-400" : "text-blue-600"}`}>_</span>
        </h1>
        
        <p 
          key={subtitle}
          className={`text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed transition-all duration-700 ${
            isGodMode ? "text-green-400/70 font-mono" : "text-slate-600 font-normal"
          }`}
        >
          {subtitle}
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={scrollToProjects}
            className={`px-8 py-3.5 rounded-xl font-bold text-sm tracking-wider uppercase transition-all duration-300 flex items-center gap-2 group shadow-lg ${
              isGodMode
                ? "bg-green-500 text-black hover:bg-green-400 hover:shadow-[0_0_25px_rgba(34,197,94,0.4)]"
                : "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-blue-200"
            }`}
          >
            <span>{isGodMode ? "Inspect Systems Architecture" : "Explore Strategic Outcomes"}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={onOpenAgentConsole}
            className={`px-7 py-3.5 rounded-xl font-bold text-sm tracking-wider uppercase transition-all duration-300 flex items-center gap-2 border ${
              isGodMode
                ? "border-green-500/40 text-green-400 hover:bg-green-500/10 hover:border-green-400 font-mono"
                : "border-slate-300 text-slate-700 hover:bg-white hover:border-slate-400 bg-white/50"
            }`}
          >
            {isGodMode ? <Terminal className="w-4 h-4" /> : <Sparkles className="w-4 h-4 text-blue-600" />}
            <span>{isGodMode ? "Launch CLI Agent" : "Consult Executive AI"}</span>
          </button>
        </div>

      </div>
    </section>
  );
}