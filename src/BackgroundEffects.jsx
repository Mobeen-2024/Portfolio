export default function BackgroundEffects({ isGodMode }) {
  if (!isGodMode) return null;

  return (
    <>
      <div className="matrix-grid absolute inset-0 pointer-events-none" />
      <div className="scanline" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(22,101,52,0.15)_0%,transparent_70%)] pointer-events-none" />
    </>
  );
}