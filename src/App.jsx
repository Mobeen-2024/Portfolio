import ABOUT_CONTENT from "./content/About_me";
import HERO_CONTENT from "./content/Hero_content";
import { useState, useEffect } from "react";
import Navigation from "./Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import CTA from "./CTA";
import BackgroundEffects from "./components/BackgroundEffects";
import FooterTerminal from "./FooterTerminal";

// ... imports ...

function App() {
  const [isGodMode, setIsGodMode] = useState(false);
  const [isSoundEnabled, setIsSoundEnabled] = useState(false);

  // Pick the correct object based on the mode
  const activeHero = isGodMode ? HERO_CONTENT.architect : HERO_CONTENT.executive;
  const activeAbout = isGodMode ? ABOUT_CONTENT.architect : ABOUT_CONTENT.executive;

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isGodMode);
  }, [isGodMode]);

  return (
    <div className={`min-h-screen relative overflow-x-hidden transition-all duration-700 
      ${isGodMode 
        ? "bg-black text-green-500 font-mono selection:bg-green-500 selection:text-black" 
        : "bg-slate-50 text-slate-900 font-sans selection:bg-slate-200 selection:text-slate-900"}`}>
      
      {/* This sits behind your text content */}
      <BackgroundEffects isGodMode={isGodMode} />

      <Navigation
        activeLabel={activeHero.label}
        isGodMode={isGodMode}
        onToggleMode={() => setIsGodMode(!isGodMode)}
        isSoundEnabled={isSoundEnabled}
        onToggleSound={() => {
          const newMuteState = !isSoundEnabled;
          setIsSoundEnabled(newMuteState);
          
          // This helps "unlock" audio on mobile/browsers without creating new contexts constantly
          if (newMuteState && (window.AudioContext || window.webkitAudioContext)) {
             const ctx = new (window.AudioContext || window.webkitAudioContext)();
             if (ctx.state === 'suspended') ctx.resume();
          }
        }}
      />

      {/* PROFESSIONAL LAYOUT: 
          1. Removed h-[85vh] to allow scrolling.
          2. Added pt-32 (padding-top) so content clears the fixed navbar.
          3. Added space-y-24 to separate Hero, About, and CTA properly.
      */}
      <main className="relative z-10 pt-32 pb-20 px-6 max-w-5xl mx-auto flex flex-col items-center space-y-32">
        
        <Hero 
          title={activeHero.title} 
          subtitle={activeHero.subtitle} 
          isGodMode={isGodMode} 
        />

        <About
          title={activeAbout.title}
          bio={activeAbout.bio}
          metrics={activeAbout.metrics}
          isGodMode={isGodMode}
          label={isGodMode ? "// ROOT_LOG" : "The Background"}
        />

        <CTA isGodMode={isGodMode} />
      </main>

      <FooterTerminal isGodMode={isGodMode} />
    </div>
  );
}

export default App;