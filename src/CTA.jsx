export default function CTA({ isGodMode }) {
  return (
    <div className="pt-8">
      <button
        className={`px-10 py-4 font-bold rounded-lg transition-all
        ${
          isGodMode
            ? "bg-green-600 text-black hover:bg-green-400"
            : "bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-200"
        }`}
      >
        {isGodMode ? "View_Source_Code" : "Review Case Studies"}
      </button>
    </div>
  );
}