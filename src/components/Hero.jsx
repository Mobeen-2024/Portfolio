export default function Hero({ title, subtitle, isGodMode }) {
  return (
    <section className="text-center space-y-6 max-w-4xl mx-auto py-20">
      <div className="space-y-4">
        <h1 className={`text-5xl md:text-7xl font-extrabold tracking-tight transition-all duration-500 ${
          isGodMode 
            ? "text-green-500 font-mono drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]" 
            : "text-slate-900 font-sans"
        }`}>
          {title}
        </h1>
        
        <p className={`text-xl md:text-2xl transition-all duration-500 ${
          isGodMode ? "text-green-400/80 font-mono" : "text-slate-600 font-light"
        }`}>
          {subtitle}
        </p>
      </div>
    </section>
  );
}