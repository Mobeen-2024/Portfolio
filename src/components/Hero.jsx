export default function Hero({ title, subtitle, isGodMode }) {
  return (
    <>
      <h2
        className={`text-4xl md:text-7xl font-extrabold leading-tight transition-all duration-500
        ${
          isGodMode
            ? "drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]"
            : "text-slate-800"
        }`}
      >
        {title}
      </h2>

      <p
        className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed transition-opacity duration-500
        ${isGodMode ? "text-green-400/80" : "text-slate-600"}`}
      >
        {subtitle}
      </p>
    </>
  );
}