import { useState, useEffect, useMemo } from "react";

// Content & Data
import ABOUT_CONTENT from "./content/About_me";
import HERO_CONTENT from "./content/Hero_content";
import { PROJECTS } from "./content/projects";

// Components
import Navigation from "./components/Navigation";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import ProjectCard from "./components/sections/ProjectCard";
import BackgroundEffects from "./components/sections/BackgroundEffects";
import FooterTerminal from "./FooterTerminal";
import ScanOverlay from "./components/sections/ScanOverlay";
import IdentityStatus from "./components/sections/IdentityStatus";

function App() {
  const [isGodMode, setIsGodMode] = useState(false);
  const [isScanning, setIsScanning] = useState(false);

  // 1. Content Selection: Wrapped in useMemo for performance
  const activeContent = useMemo(() => ({
    hero: isGodMode ? HERO_CONTENT.architect : HERO_CONTENT.executive,
    about: isGodMode ? ABOUT_CONTENT.architect : ABOUT_CONTENT.executive,
  }), [isGodMode]);

  // 2. Theme Configuration: Centralized logic to reduce JSX clutter
  const theme = {
    container: isGodMode
      ? "bg-black text-green-500 font-mono selection:bg-green-500 selection:text-black"
      : "bg-slate-50 text-slate-900 font-sans selection:bg-slate-200 selection:text-slate-900",
    heading: isGodMode ? "text-green-500/50" : "text-blue-600/50",
    separator: isGodMode ? "bg-green-500" : "bg-blue-600",
    projectTitle: isGodMode ? "// SYSTEM_OUTPUT: CASE_STUDIES" : "Featured Strategic Success",
    aboutLabel: isGodMode ? "// ROOT_LOG" : "The Background",
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isGodMode);
  }, [isGodMode]);

  const handleAuthentication = () => {
    if (isScanning) return;
    setIsScanning(true);
    
    // 1.5s delay matches the ScanOverlay animation duration
    setTimeout(() => {
      setIsGodMode(prev => !prev);
      setIsScanning(false);
    }, 1500);
  };

  return (
    <div className={`min-h-screen relative overflow-x-hidden transition-all duration-700 ${theme.container}`}>
      
      {/* Visual Infrastructure */}
      <BackgroundEffects isGodMode={isGodMode} isScanning={isScanning} />
      <ScanOverlay isScanning={isScanning} />
      <IdentityStatus isScanning={isScanning} isGodMode={isGodMode} />

      <Navigation 
        isGodMode={isGodMode} 
        isScanning={isScanning} 
        onScan={handleAuthentication}
        activeLabel={activeContent.hero.label}
      />

      {/* Main Content Layer */}
      <main className={`relative z-10 pt-32 pb-20 px-8 md:px-12 max-w-[1400px] mx-auto flex flex-col items-center space-y-32 transition-all duration-500 ${
        isScanning ? "blur-md opacity-50 scale-[0.98]" : "blur-0 opacity-100 scale-100"
      }`}>
        
        <Hero 
          title={activeContent.hero.title} 
          subtitle={activeContent.hero.subtitle} 
          isGodMode={isGodMode} 
        />

        <About
          title={activeContent.about.title}
          bio={activeContent.about.bio}
          metrics={activeContent.about.metrics}
          isGodMode={isGodMode}
          label={theme.aboutLabel}
        />

        {/* Projects Section */}
        <section id="projects" className="w-full py-20">
          <header className="flex flex-col items-center mb-16 space-y-4">
            <h2 className={`text-xs font-bold tracking-[0.5em] uppercase transition-colors duration-500 ${theme.heading}`}>
              {theme.projectTitle}
            </h2>
            <div className={`h-[2px] w-20 transition-all duration-500 ${theme.separator}`} />
          </header>

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