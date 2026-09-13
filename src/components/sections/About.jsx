import { useTypewriter } from "../../hooks/useTypewriter";

export default function About({ title, bio, metrics, isGodMode, label }) {
  const typingSpeed = isGodMode ? 35 : 50;
  const animatedBio = useTypewriter(bio, typingSpeed);

  return (
    <section id="about" className="py-12 md:py-24 px-6 max-w-6xl mx-auto scroll-mt-24">
      <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start w-full">
        <div className="text-left space-y-6">
          <h3 className={`text-sm tracking-widest uppercase font-bold ${
            isGodMode ? "text-green-500/60 font-mono" : "text-blue-600 font-sans"
          }`}>
            {label}
          </h3>
          <h2 className="text-4xl font-bold tracking-tight">{title}</h2>
          <p className={`text-lg leading-relaxed min-h-[160px] ${
            isGodMode ? "text-green-400/70 font-mono" : "text-slate-600 font-sans"
          }`}>
            {animatedBio}
            <span className="animate-pulse inline-block w-2 h-5 ml-1 bg-current" />
          </p>
        </div>
        
        {/* Metrics 2x2 Grid */}
        <div className={`grid grid-cols-2 gap-4 p-6 md:p-8 rounded-2xl transition-all duration-500 ${
          isGodMode 
            ? "bg-green-950/20 border border-green-500/30 backdrop-blur-md shadow-[0_0_25px_rgba(34,197,94,0.1)]" 
            : "bg-white border border-slate-200 shadow-xl shadow-slate-200/50"
        }`}>
          {metrics.map((item, idx) => (
            <div key={idx} className={`p-4 rounded-xl transition-all ${
              isGodMode ? "bg-black/40 border border-green-500/10" : "bg-slate-50 border border-slate-100"
            }`}>
              <p className="text-[11px] uppercase tracking-wider font-semibold opacity-60 mb-1">{item.label}</p>
              <p className={`text-2xl md:text-3xl font-black ${isGodMode ? "text-green-400 font-mono" : "text-blue-600 font-sans"}`}>
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}