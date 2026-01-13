import { useState, useEffect } from "react";

// Content & Data
import ABOUT_CONTENT from "./content/About_me";
import HERO_CONTENT from "./content/Hero_content";
import { PROJECTS } from "./content/projects";

// Components
import Navigation from "./Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Sections/Contact"
import ProjectCard from "./components/Sections/ProjectCard";
import BackgroundEffects from "./components/BackgroundEffects";
import FooterTerminal from "./FooterTerminal";
import ScanOverlay from "./components/ScanOverlay";
import IdentityStatus from "./components/IdentityStatus";

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
    if (isScanning) return; // Prevent double-triggering

    setIsScanning(true);

    // Switch the mode halfway through the laser sweep
    setTimeout(() => {
      setIsGodMode((prev) => !prev);
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

      <main className={`relative z-10 pt-32 pb-20 px-8 md:px-12 max-w-[1400px] mx-auto flex flex-col items-center space-y-32 transition-all duration-500 ${
        isScanning ? "blur-md opacity-50 scale-[0.98]" : "blur-0 opacity-100 scale-100"
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

        <section id="projects" className="w-full py-20">
          <div className="flex flex-col items-center mb-16 space-y-4">
            <h2 className={`text-xs font-bold tracking-[0.5em] uppercase transition-colors duration-500 ${
              isGodMode ? "text-green-500/50" : "text-blue-600/50"
            }`}>
              {isGodMode ? "// SYSTEM_OUTPUT: CASE_STUDIES" : "Featured Strategic Success"}
            </h2>
            <div className={`h-[2px] w-20 transition-all duration-500 ${isGodMode ? "bg-green-500" : "bg-blue-600"}`} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PROJECTS.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                isGodMode={isGodMode} 
              />
            ))}
          </div>
        </section>

        <Contact isGodMode={isGodMode} />
      </main>

      <FooterTerminal isGodMode={isGodMode} />
    </div>
  );
}

export default App;