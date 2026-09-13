import { useState, useEffect, useMemo, useCallback } from "react";

// Content & Data
import ABOUT_CONTENT from "./content/About_me";
import HERO_CONTENT from "./content/Hero_content";
import { PROJECTS } from "./content/projects";

// Layout Components
import Navigation from "./components/layout/Navigation";
import BackgroundEffects from "./components/layout/BackgroundEffects";
import ScanOverlay from "./components/layout/ScanOverlay";
import IdentityStatus from "./components/layout/IdentityStatus";
import AgentConsole from "./components/layout/AgentConsole";

// Section Components
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import ProjectCard from "./components/ui/ProjectCard"; 
import ProjectDetailModal from "./components/ui/ProjectDetailModal";

function App() {
  const [isGodMode, setIsGodMode] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [isAgentConsoleOpen, setIsAgentConsoleOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // 1. Content Selection: Wrapped in useMemo for performance
  const activeContent = useMemo(() => ({
    hero: isGodMode ? HERO_CONTENT.architect : HERO_CONTENT.executive,
    about: isGodMode ? ABOUT_CONTENT.architect : ABOUT_CONTENT.executive,
  }), [isGodMode]);

  // 2. Theme Configuration: Centralized logic
  const theme = {
    container: isGodMode
      ? "bg-transparent text-green-500 font-mono selection:bg-green-500 selection:text-black"
      : "bg-slate-50 text-slate-900 font-sans selection:bg-slate-200 selection:text-slate-900",
    heading: isGodMode ? "text-green-500/50 font-mono" : "text-blue-600/50 font-sans",
    separator: isGodMode ? "bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]" : "bg-blue-600",
    projectTitle: isGodMode ? "// SYSTEM_OUTPUT: CASE_STUDIES" : "Featured Strategic Success",
    aboutLabel: isGodMode ? "// ROOT_LOG" : "The Background",
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isGodMode);
  }, [isGodMode]);

  const handleAuthentication = useCallback(() => {
    if (isScanning) return;
    setIsScanning(true);
    
    // 1.5s delay matches the ScanOverlay animation duration
    setTimeout(() => {
      setIsGodMode(prev => !prev);
      setIsScanning(false);
    }, 1500);
  }, [isScanning]);

  // Keyboard Shortcuts: Ctrl+G or ~ for Biometric, Ctrl+K for Agent Console
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      // Toggle God Mode via Ctrl+G or Backquote ~
      if ((e.ctrlKey && e.key.toLowerCase() === 'g') || (e.key === '`' && !['INPUT', 'TEXTAREA'].includes(e.target.tagName))) {
        e.preventDefault();
        handleAuthentication();
      }
      // Toggle Agent Console via Ctrl+K
      if (e.ctrlKey && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsAgentConsoleOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [handleAuthentication]);

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
      <main className={`relative z-10 pt-32 pb-20 px-6 sm:px-8 md:px-12 max-w-[1400px] mx-auto flex flex-col items-center space-y-28 md:space-y-36 transition-all duration-500 ${
        isScanning ? "blur-md opacity-50 scale-[0.98]" : "blur-0 opacity-100 scale-100"
      }`}>
        
        <Hero 
          title={activeContent.hero.title} 
          subtitle={activeContent.hero.subtitle} 
          isGodMode={isGodMode} 
          onOpenAgentConsole={() => setIsAgentConsoleOpen(true)}
        />

        <About
          title={activeContent.about.title}
          bio={activeContent.about.bio}
          metrics={activeContent.about.metrics}
          isGodMode={isGodMode}
          label={theme.aboutLabel}
        />

        {/* Projects Section */}
        <section id="projects" className="w-full py-12 md:py-20 scroll-mt-24">
          <header className="flex flex-col items-center mb-16 space-y-4 text-center">
            <h2 className={`text-xs sm:text-sm font-bold tracking-[0.5em] uppercase transition-colors duration-500 ${theme.heading}`}>
              {theme.projectTitle}
            </h2>
            <div className={`h-[2px] w-24 transition-all duration-500 ${theme.separator}`} />
            <p className="text-xs opacity-50 max-w-md pt-1">
              {isGodMode 
                ? "// CLICK ANY CASE STUDY TO INSPECT DETAILED PIPELINE ARCHITECTURE" 
                : "Select any case study to explore full business impact and strategic takeaways."}
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {PROJECTS.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                isGodMode={isGodMode} 
                onSelect={(p) => setSelectedProject(p)}
              />
            ))}
          </div>
        </section>

        <Contact isGodMode={isGodMode} />
      </main>

      {/* Interactive Dual-Reality Agent Console / Terminal Co-Pilot */}
      <AgentConsole 
        isGodMode={isGodMode} 
        isOpen={isAgentConsoleOpen} 
        setIsOpen={setIsAgentConsoleOpen} 
      />

      {/* Project Deep-Dive Architecture / Strategy Modal */}
      {selectedProject && (
        <ProjectDetailModal 
          project={selectedProject} 
          isGodMode={isGodMode} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
}

export default App;