import React, { useState } from 'react';
import { Send, Terminal, ShieldCheck, AlertCircle } from 'lucide-react';

export default function Contact({ isGodMode }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('IDLE');

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        setStatus('SUCCESS');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('ERROR');
      }
    } catch {
      setStatus('ERROR');
    }
  };

  // The "Theme Object" - now fully utilized below
  const theme = isGodMode 
    ? {
        text: "text-green-500 font-mono",
        accent: "text-green-400",
        border: "border-green-900 focus:border-green-400",
        button: "bg-green-500 text-black hover:bg-green-400 shadow-[0_0_20px_rgba(34,197,94,0.3)]",
        container: "bg-black border border-green-500/20",
        label: "text-green-500/50"
      }
    : {
        text: "text-slate-800",
        accent: "text-blue-600",
        border: "border-slate-100 focus:border-blue-600",
        button: "bg-blue-600 text-white hover:bg-blue-700 shadow-xl",
        container: "bg-white",
        label: "text-slate-500"
      };

  return (
    <section id="contact" className="w-full py-20 max-w-4xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className={`text-xs font-bold tracking-[0.5em] uppercase mb-4 opacity-70 ${theme.accent}`}>
          {isGodMode ? "// PROTOCOL: INITIATE_COMMUNICATION" : "Strategic Consultation"}
        </h2>
        <h3 className={`text-4xl font-black ${theme.text}`}>
          {isGodMode ? "POST_DATA_PACKET" : "Secure Your Growth Strategy"}
        </h3>
      </div>

      <div className={`relative p-1 rounded-3xl transition-all duration-700 ${isGodMode ? "bg-green-500/10" : "bg-slate-100"}`}>
        <form onSubmit={handleSubmit} className={`p-8 md:p-12 rounded-[22px] transition-all duration-500 ${theme.container}`}>
          
          {status === 'SUCCESS' ? (
            <SuccessState isGodMode={isGodMode} onReset={() => setStatus('IDLE')} theme={theme} />
          ) : (
            <div className="space-y-8">
              {/* Input Mapping to prevent code duplication */}
              {[
                { id: 'name', label: isGodMode ? '"sender_id":' : 'Your Name', type: 'text', placeholder: isGodMode ? '"Enter Name..."' : 'John Doe' },
                { id: 'email', label: isGodMode ? '"return_address":' : 'Business Email', type: 'email', placeholder: isGodMode ? '"Enter Email..."' : 'john@company.com' }
              ].map((field) => (
                <div key={field.id} className="group">
                  <label className={`block text-[10px] uppercase tracking-widest font-bold mb-2 ${theme.label}`}>
                    {field.label}
                  </label>
                  <input
                    required
                    type={field.type}
                    value={formData[field.id]}
                    placeholder={field.placeholder}
                    className={`w-full bg-transparent border-b-2 p-3 outline-none transition-all ${theme.border} ${theme.accent}`}
                    onChange={(e) => setFormData({...formData, [field.id]: e.target.value})}
                  />
                </div>
              ))}

              <div className="group">
                <label className={`block text-[10px] uppercase tracking-widest font-bold mb-2 ${theme.label}`}>
                  {isGodMode ? '"payload": {' : "Project Scope"}
                </label>
                <textarea
                  required
                  rows="4"
                  value={formData.message}
                  placeholder={isGodMode ? '"Describe your data challenges..."' : "How can I help your business grow?"}
                  className={`w-full bg-transparent border-2 rounded-xl p-4 outline-none transition-all ${theme.border} ${theme.accent}`}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'SENDING'}
                className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest flex items-center justify-center gap-3 transition-all active:scale-[0.98] ${theme.button}`}
              >
                {status === 'SENDING' ? (
                  <span className="animate-pulse">Processing...</span>
                ) : (
                  <>
                    {isGodMode ? <Terminal className="w-4 h-4" /> : <Send className="w-4 h-4" />}
                    {isGodMode ? "EXECUTE_SEND" : "Book Strategic Call"}
                  </>
                )}
              </button>

              {status === 'ERROR' && (
                <div className="flex items-center gap-2 text-red-500 text-xs font-mono animate-pulse">
                  <AlertCircle className="w-4 h-4" />
                  <span>CRITICAL_ERROR: DATA_PACKET_LOST</span>
                </div>
              )}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

const SuccessState = ({ isGodMode, onReset, theme }) => (
  <div className={`py-12 text-center animate-in zoom-in duration-500`}>
    <div className="flex flex-col items-center gap-6">
      <div className={`p-4 rounded-full ${isGodMode ? "bg-green-500/20 shadow-lg" : "bg-blue-600 text-white"}`}>
        <ShieldCheck className="w-12 h-12" />
      </div>
      <div className="space-y-2">
        <h4 className={`text-3xl font-black ${theme.text}`}>
          {isGodMode ? "TRANSMISSION_COMPLETE" : "Request Received"}
        </h4>
        <p className={`text-sm opacity-70 ${isGodMode ? "font-mono" : "font-light italic"}`}>
          {isGodMode ? "> Packet_ID: #7721 verified." : "I will respond within 24 hours."}
        </p>
      </div>
      <button onClick={onReset} className={`mt-4 text-[10px] font-bold uppercase tracking-[0.3em] ${theme.label} hover:opacity-100 underline underline-offset-8 transition-all`}>
        {isGodMode ? "[ RE_INITIALIZE_GATEWAY ]" : "Send another message"}
      </button>
    </div>
  </div>
);