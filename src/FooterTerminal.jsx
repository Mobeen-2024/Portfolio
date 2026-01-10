export default function FooterTerminal({ isGodMode }) {
  if (!isGodMode) return null;
  return (
    <div className="fixed bottom-4 left-4 text-[10px] text-green-900 opacity-40 pointer-events-none">
      <p>{`>> INITIALIZING_DATA_PIPELINES...`}</p>
      <p>{`>> STATUS: 100% ATTRIBUTION_LOADED`}</p>
    </div>
  );
}