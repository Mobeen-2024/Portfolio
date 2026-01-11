import ABOUT_CONTENT from "./content/About_me";
import HERO_CONTENT from "./content/Hero_content";
import { useState, useEffect } from "react";
import Navigation from "./Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import CTA from "./CTA";
import BackgroundEffects from "./components/BackgroundEffects";
import FooterTerminal from "./FooterTerminal";
import ScanOverlay from "./components/ScanOverlay";
import IdentityStatus from "./components/IdentityStatus";
import { PROJECTS } from "./content/projects";
import ProjectCard from "./components/Sections/ProjectCard";

// ... imports ...

function App() {
  const [isGodMode, setIsGodMode] = useState(false);
  const [isScanning, setIsScanning] = useState(false);

  // Pick the correct object based on the mode
  const activeHero = isGodMode ? HERO_CONTENT.architect : HERO_CONTENT.executive;
  const activeAbout = isGodMode ? ABOUT_CONTENT.architect : ABOUT_CONTENT.executive;

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isGodMode);
  }, [isGodMode]);

  const handleAuthentication = () => {
    setIsScanning(true);

    // Switch the mode halfway through the laser sweep
    setTimeout(() => {
      setIsGodMode(!isGodMode);
    }, 800);

    // End scan state
    setTimeout(() => {
      setIsScanning(false);
    }, 1800);
  };

  return (
    <div className={`min-h-screen relative overflow-x-hidden transition-all duration-700 
      ${isGodMode 
        ? "bg-black text-green-500 font-mono selection:bg-green-500 selection:text-black" 
        : "bg-slate-50 text-slate-900 font-sans selection:bg-slate-200 selection:text-slate-900"}`}>
      
      {/* This sits behind your text content */}
      <BackgroundEffects isGodMode={isGodMode} />
      <ScanOverlay isScanning={isScanning} />
      <IdentityStatus isScanning={isScanning} isGodMode={isGodMode} />

      <Navigation 
        isGodMode={isGodMode} 
        isScanning={isScanning} 
        onScan={handleAuthentication}
        activeLabel={activeHero.label}
      />

      {/* PROFESSIONAL LAYOUT: 
          1. Removed h-[85vh] to allow scrolling.
          2. Added pt-32 (padding-top) so content clears the fixed navbar.
          3. Added space-y-24 to separate Hero, About, and CTA properly.
      */}
      <main className={`relative z-10 pt-32 pb-20 px-8 md:px-12 max-w-[1400px] mx-auto flex flex-col items-center space-y-32 transition-all duration-500 ${
        isScanning ? "blur-md scale-[0.98]" : "blur-0 scale-100"
      }`}>
        
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

        <section className="w-full py-20">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-sm font-bold tracking-[0.4em] uppercase opacity-40 mb-4">
              {isGodMode ? "// EXECUTED_PROJECTS" : "Featured Case Studies"}
            </h2>
            <div className={`h-1 w-24 rounded-full ${isGodMode ? "bg-green-500" : "bg-blue-600"}`} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                isGodMode={isGodMode} 
              />
            ))}
          </div>
        </section>

        <CTA isGodMode={isGodMode} />
      </main>

      <FooterTerminal isGodMode={isGodMode} />
    </div>
  );
}

export default App;