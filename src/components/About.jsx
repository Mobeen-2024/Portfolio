import { useTypewriter } from "../hooks/useTypewriter";

export default function About({ title, bio, metrics, isGodMode, label }) {
  // Pass only the bio and speed. Sound is no longer handled here.
  const typingSpeed = isGodMode ? 40 : 60;
  const animatedBio = useTypewriter(bio, typingSpeed);

  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto scroll-mt-24">
      <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start w-full">
        <div className="text-left space-y-6">
          <h3 className={`text-sm tracking-widest uppercase font-bold ${
            isGodMode ? "text-green-500/60" : "text-blue-600"
          }`}>
            {label}
          </h3>
          <h2 className="text-4xl font-bold">{title}</h2>
          <p className={`text-lg leading-relaxed min-h-[160px] ${
            isGodMode ? "text-green-400/70 font-mono" : "text-slate-600 font-sans"
          }`}>
            {animatedBio}
            <span className="animate-pulse inline-block w-2 h-5 ml-1 bg-current" />
          </p>
        </div>
        
        {/* Metrics Grid */}
        <div className={`grid grid-cols-1 gap-4 p-8 rounded-2xl ${
          isGodMode ? "bg-green-950/20 border border-green-500/30" : "bg-white border border-slate-200 shadow-xl"
        }`}>
          {metrics.map((item, idx) => (
            <div key={idx} className="p-4 border-b last:border-0 border-current/10">
              <p className="text-xs uppercase tracking-tighter opacity-60">{item.label}</p>
              <p className="text-2xl font-bold">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}