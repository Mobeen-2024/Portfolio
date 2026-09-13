import React, { useState } from 'react';
import { Send, Terminal, ShieldCheck, AlertCircle, Copy, Check, Github, Phone, MapPin, Globe } from 'lucide-react';
import { playClick, playSuccess } from '../../utils/audio';

export default function Contact({ isGodMode, themeMode = 'dark' }) {
  const [formData, setFormData] = useState({ name: '', email: '', topic: 'IT Support & Systems Engineering', message: '' });
  const [status, setStatus] = useState('IDLE');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const directEmail = "muhammadmobeen20011@gmail.com";
  const directPhone = "07351187884";
  const location = "London, NW9 6EJ (Full Right to Work - Spouse Visa)";
  const portfolioUrl = "https://my-project-portfolios-projects-ed15ad56.vercel.app/";

  const topics = isGodMode ? [
    "// HARDWARE_DIAGNOSTICS_&_BMS",
    "// NETWORK_&_CCTV_SETUP",
    "// FULL_STACK_REACT_EXPRESS",
    "// IT_SUPPORT_ROLE_ENGAGEMENT"
  ] : [
    "IT Support & Systems Engineering",
    "Hardware Diagnostics & Soldering",
    "CCTV & Network Deployment",
    "Full-Stack Web Development"
  ];

  const handleCopyEmail = () => {
    playClick(650, 0.04);
    navigator.clipboard.writeText(directEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleTopicClick = (topic) => {
    playClick(520, 0.03);
    setFormData(prev => ({
      ...prev,
      topic: topic,
      message: prev.message ? prev.message : (isGodMode ? `Requesting technical review for ${topic}: ` : `I would like to discuss ${topic}: `)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    playClick(700, 0.05);
    setStatus('SENDING');

    try {
      const response = await fetch("https://formspree.io/f/xkoonpjk", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          ...formData,
          reality_mode: isGodMode ? 'ARCHITECT' : 'EXECUTIVE',
        })
      });

      if (response.ok) {
        playSuccess();
        setStatus('SUCCESS');
        setFormData({ name: '', email: '', topic: 'IT Support & Systems Engineering', message: '' });
      } else {
        setStatus('ERROR');
      }
    } catch {
      setStatus('ERROR');
    }
  };

  const theme = isGodMode 
    ? {
        text: "text-green-400 font-mono",
        accent: "text-green-400",
        border: "border-green-500/30 focus:border-green-400",
        button: "bg-green-500 text-black hover:bg-green-400 shadow-[0_0_30px_rgba(34,197,94,0.4)] font-mono",
        container: "bg-[#060a08]/95 border border-green-500/30 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)]",
        label: "text-green-500/60 font-mono"
      }
    : themeMode === "light"
    ? {
        text: "text-slate-900 font-sans",
        accent: "text-blue-600",
        border: "border-slate-300 focus:border-blue-600",
        button: "bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white hover:from-blue-700 hover:to-cyan-600 shadow-[0_0_25px_rgba(37,99,235,0.3)] border border-blue-400/50 font-sans",
        container: "bg-white/95 border border-slate-200/90 backdrop-blur-2xl shadow-xl shadow-slate-200/50",
        label: "text-slate-600 font-sans"
      }
    : {
        text: "text-white font-sans",
        accent: "text-cyan-400",
        border: "border-slate-800 focus:border-blue-500",
        button: "bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white hover:from-blue-500 hover:to-cyan-400 shadow-[0_0_35px_rgba(37,99,235,0.4)] border border-blue-400/30 font-sans",
        container: "bg-[#0c1222]/85 border border-slate-800/80 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.06)]",
        label: "text-slate-400 font-sans"
      };

  return (
    <section id="contact" className="w-full py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 scroll-mt-24">
      <div className="text-center mb-12 space-y-3">
        <h2 className={`text-xs sm:text-sm font-bold tracking-[0.5em] uppercase ${theme.accent}`}>
          {isGodMode ? "// PROTOCOL: INITIATE_COMMUNICATION" : "Direct Transmission & Inquiries"}
        </h2>
        <h3 className={`text-3xl sm:text-4xl font-black ${theme.text} ${isGodMode ? "text-glow-green" : ""}`}>
          {isGodMode ? "OPEN_SYSTEM_CHANNEL" : "Connect With Muhammad Mobeen"}
        </h3>
        <p className={`text-sm max-w-md mx-auto opacity-70 ${
          isGodMode ? "font-mono text-green-400/70" : themeMode === "light" ? "text-slate-600 font-normal" : "text-slate-300 font-normal"
        }`}>
          {isGodMode 
            ? "Transmit hardware specifications, network deployments, or IT support inquiries."
            : "Available for IT Support Technician, Hardware Specialist, and Systems Engineering roles."}
        </p>

        {/* Contact Badges & Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <button
            onClick={handleCopyEmail}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 border cursor-pointer active:scale-95 ${
              isGodMode 
                ? "bg-black/60 border-green-500/30 text-green-300 hover:border-green-400 font-mono" 
                : themeMode === "light"
                ? "bg-white/90 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-100 hover:text-slate-950 shadow-sm font-sans"
                : "bg-[#101728]/80 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-[#151f36] hover:text-white shadow-md font-sans"
            }`}
          >
            {copiedEmail ? <Check className="w-3.5 h-3.5 text-cyan-400" /> : <Copy className={`w-3.5 h-3.5 ${themeMode === "light" && !isGodMode ? "text-blue-600" : "text-cyan-400"}`} />}
            <span>{copiedEmail ? "Copied to Clipboard!" : directEmail}</span>
          </button>

          <a 
            href={`tel:${directPhone}`}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all ${
              isGodMode 
                ? "bg-black/60 border-green-500/30 text-green-400 hover:bg-green-500/10 font-mono" 
                : themeMode === "light"
                ? "bg-white/90 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-100 hover:text-slate-950 shadow-sm font-sans"
                : "bg-[#101728]/80 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-[#151f36] hover:text-white font-sans"
            }`}
          >
            <Phone className={`w-3.5 h-3.5 ${themeMode === "light" && !isGodMode ? "text-blue-600" : "text-cyan-400"}`} />
            <span>{directPhone}</span>
          </a>

          <div 
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border select-none ${
              isGodMode 
                ? "bg-black/60 border-green-500/20 text-green-400/80 font-mono" 
                : themeMode === "light"
                ? "bg-white/90 border-slate-200 text-slate-700 shadow-sm font-sans"
                : "bg-[#101728]/80 border-slate-800 text-slate-300 font-sans"
            }`}
          >
            <MapPin className="w-3.5 h-3.5 text-red-500" />
            <span>{location}</span>
          </div>

          <a 
            href="https://github.com/Mobeen-2024" 
            target="_blank" 
            rel="noreferrer"
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all ${
              isGodMode 
                ? "bg-black/60 border-green-500/30 text-green-400 hover:bg-green-500/10 font-mono" 
                : themeMode === "light"
                ? "bg-white/90 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-100 hover:text-slate-950 shadow-sm font-sans"
                : "bg-[#101728]/80 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-[#151f36] hover:text-white font-sans"
            }`}
          >
            <Github className={`w-3.5 h-3.5 ${themeMode === "light" && !isGodMode ? "text-blue-600" : "text-cyan-400"}`} />
            <span>GitHub</span>
          </a>

          <a 
            href={portfolioUrl} 
            target="_blank" 
            rel="noreferrer"
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all ${
              isGodMode 
                ? "bg-black/60 border-green-500/30 text-green-400 hover:bg-green-500/10 font-mono" 
                : themeMode === "light"
                ? "bg-white/90 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-100 hover:text-slate-950 shadow-sm font-sans"
                : "bg-[#101728]/80 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-[#151f36] hover:text-white font-sans"
            }`}
          >
            <Globe className={`w-3.5 h-3.5 ${themeMode === "light" && !isGodMode ? "text-blue-600" : "text-cyan-400"}`} />
            <span>Live Portfolio</span>
          </a>
        </div>
      </div>

      {/* Main Form Container */}
      <div className={`p-8 sm:p-12 rounded-3xl transition-all duration-500 ${theme.container}`}>
        
        {status === 'SUCCESS' ? (
          <SuccessState isGodMode={isGodMode} onReset={() => setStatus('IDLE')} theme={theme} />
        ) : (
          <form onSubmit={handleSubmit} className="space-y-7">
            
            {/* Topic Preset Chips */}
            <div>
              <label className={`block text-[10px] uppercase tracking-widest font-bold mb-2.5 ${theme.label}`}>
                {isGodMode ? "// SELECT_TRANSMISSION_DOMAIN:" : "Inquiry Category / Technical Domain:"}
              </label>
              <div className="flex flex-wrap gap-2">
                {topics.map((t, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleTopicClick(t)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 border cursor-pointer ${
                      formData.topic === t
                        ? isGodMode
                          ? "bg-green-500 text-black border-green-400 font-mono shadow-[0_0_15px_rgba(34,197,94,0.4)]"
                          : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-blue-400 shadow-[0_0_15px_rgba(37,99,235,0.4)] font-sans"
                        : isGodMode
                          ? "bg-black/50 text-green-400/70 border-green-500/20 hover:border-green-400 font-mono"
                          : themeMode === "light"
                          ? "bg-slate-100 text-slate-700 border-slate-200 hover:border-slate-300 hover:text-slate-950 font-sans"
                          : "bg-[#101728] text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white font-sans"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Inputs: Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="group">
                <label className={`block text-[10px] uppercase tracking-widest font-bold mb-2 ${theme.label}`}>
                  {isGodMode ? '"sender_id":' : 'Your Name'}
                </label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  placeholder={isGodMode ? '"Enter Name..."' : 'e.g. Hiring Manager / Team Lead'}
                  className={`w-full bg-transparent border-b-2 p-3 text-sm outline-none transition-all ${
                    themeMode === "light" && !isGodMode ? "text-slate-900 placeholder:text-slate-400" : "text-white placeholder:text-slate-500"
                  } ${theme.border} ${theme.accent}`}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="group">
                <label className={`block text-[10px] uppercase tracking-widest font-bold mb-2 ${theme.label}`}>
                  {isGodMode ? '"return_address":' : 'Contact Email'}
                </label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  placeholder={isGodMode ? '"Enter Email..."' : 'recruiter@company.com'}
                  className={`w-full bg-transparent border-b-2 p-3 text-sm outline-none transition-all ${
                    themeMode === "light" && !isGodMode ? "text-slate-900 placeholder:text-slate-400" : "text-white placeholder:text-slate-500"
                  } ${theme.border} ${theme.accent}`}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            {/* Message Area */}
            <div className="group">
              <label className={`block text-[10px] uppercase tracking-widest font-bold mb-2 ${theme.label}`}>
                {isGodMode ? '"payload_body": {' : "Project or Opportunity Details"}
              </label>
              <textarea
                required
                rows="4"
                value={formData.message}
                placeholder={isGodMode ? '"Specify hardware repair, network specs, or IT support requirements..."' : "Describe the role, project, or IT infrastructure requirements..."}
                className={`w-full bg-transparent border-2 rounded-2xl p-4 text-sm outline-none transition-all ${
                  themeMode === "light" && !isGodMode ? "text-slate-900 placeholder:text-slate-400" : "text-white placeholder:text-slate-500"
                } ${theme.border} ${theme.accent}`}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'SENDING'}
              className={`w-full py-4 rounded-2xl font-bold uppercase tracking-widest flex items-center justify-center gap-3 transition-all active:scale-[0.98] cursor-pointer ${theme.button}`}
            >
              {status === 'SENDING' ? (
                <span className="animate-pulse">Packaging Transmission...</span>
              ) : (
                <>
                  {isGodMode ? <Terminal className="w-4 h-4" /> : <Send className="w-4 h-4" />}
                  <span>{isGodMode ? "EXECUTE_TRANSMISSION" : "Send Message to Mobeen"}</span>
                </>
              )}
            </button>

            {status === 'ERROR' && (
              <div className="flex items-center justify-center gap-2 text-red-500 text-xs font-mono animate-pulse">
                <AlertCircle className="w-4 h-4" />
                <span>TRANSMISSION_FAILED. PLEASE CONTACT DIRECTLY: muhammadmobeen20011@gmail.com</span>
              </div>
            )}
          </form>
        )}

      </div>
    </section>
  );
}

const SuccessState = ({ isGodMode, onReset, theme }) => (
  <div className="py-12 text-center animate-in zoom-in duration-500 space-y-6">
    <div className={`p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center ${
      isGodMode ? "bg-green-500/20 border border-green-500/40 shadow-[0_0_25px_rgba(34,197,94,0.4)]" : "bg-blue-600 text-white shadow-xl shadow-blue-500/30"
    }`}>
      <ShieldCheck className="w-10 h-10 text-current" />
    </div>
    <div className="space-y-2">
      <h4 className={`text-2xl sm:text-3xl font-black ${theme.text}`}>
        {isGodMode ? "TRANSMISSION_VERIFIED_#7721" : "Message Received"}
      </h4>
      <p className={`text-sm opacity-75 max-w-md mx-auto ${isGodMode ? "font-mono" : "font-normal"}`}>
        {isGodMode 
          ? "> Handshake successful. Telemetry logged. Direct socket dispatched to Muhammad Mobeen."
          : "Thank you for reaching out. Muhammad Mobeen will review your inquiry and respond promptly."}
      </p>
    </div>
    <button 
      onClick={onReset} 
      className={`mt-4 text-xs font-bold uppercase tracking-[0.25em] ${theme.accent} hover:underline underline-offset-8 transition-all cursor-pointer`}
    >
      {isGodMode ? "[ RE_OPEN_SOCKET ]" : "Submit another message"}
    </button>
  </div>
);