import React, { useState } from 'react';
import { Send, Terminal, ShieldCheck } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact({ isGodMode }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('IDLE'); // IDLE, SENDING, SUCCESS

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('SENDING');

    // 1. Pull IDs from your .env file
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // 2. Prepare the data to match your EmailJS Template
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      mode: isGodMode ? 'ARCHITECT' : 'EXECUTIVE'
    };

    // 3. Send! Notice the publicKey is the 4th argument
    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((result) => {
        console.log('SUCCESS:', result.text);
        setStatus('SUCCESS');
      })
      .catch((error) => {
        console.error('ERROR:', error);
        setStatus('IDLE');
        alert("System Error: Data packet lost. Please try again.");
      });
  };

  return (
    <section className="w-full py-24 max-w-4xl mx-auto">
      <div className="flex flex-col items-center mb-12">
        <h2 className={`text-xs font-bold tracking-[0.5em] uppercase mb-4 ${
          isGodMode ? "text-green-500/50" : "text-blue-600/50"
        }`}>
          {isGodMode ? "// PROTOCOL: INITIATE_COMMUNICATION" : "Strategic Consultation"}
        </h2>
        <h3 className={`text-3xl font-bold ${isGodMode ? "text-green-400 font-mono" : "text-slate-800"}`}>
          {isGodMode ? "POST_DATA_PACKET" : "Secure Your Growth Strategy"}
        </h3>
      </div>

      <div className={`relative p-1 transition-all duration-700 rounded-3xl ${
        isGodMode ? "bg-green-500/20 shadow-[0_0_50px_rgba(34,197,94,0.1)]" : "bg-white shadow-2xl"
      }`}>
        <form 
          onSubmit={handleSubmit}
          className={`p-8 md:p-12 rounded-[calc(1.5rem-4px)] transition-all duration-500 ${
            isGodMode ? "bg-black font-mono text-green-500" : "bg-white text-slate-700"
          }`}
        >
          {status === 'SUCCESS' ? (
            <div className={`py-16 px-8 text-center animate-in fade-in zoom-in duration-500 rounded-2xl border-2 ${
              isGodMode 
                ? "bg-green-500/5 border-green-500/30 text-green-500 font-mono" 
                : "bg-blue-50/50 border-blue-100 text-slate-800"
            }`}>
              <div className="flex flex-col items-center gap-6">
                {/* Icon with mode-specific glow */}
                <div className={`p-4 rounded-full ${
                  isGodMode ? "bg-green-500/20 shadow-[0_0_20px_rgba(34,197,94,0.4)]" : "bg-blue-600 text-white shadow-lg"
                }`}>
                  <ShieldCheck className="w-12 h-12" />
                </div>

                <div className="space-y-2">
                  <h4 className={`text-3xl font-black tracking-tighter ${isGodMode ? "uppercase" : ""}`}>
                    {isGodMode ? "TRANSMISSION_COMPLETE" : "Strategy Request Received"}
                  </h4>
                  <p className={`text-sm opacity-70 max-w-xs mx-auto ${isGodMode ? "font-mono" : "font-light italic"}`}>
                    {isGodMode 
                      ? "> Packet_ID: #7721 verified. Standby for callback." 
                      : "Your message is secure. I will personally review and respond within 24 hours."}
                  </p>
                </div>

                {/* Action to go back */}
                <button 
                  onClick={() => setStatus('IDLE')}
                  className={`mt-4 text-[10px] font-bold uppercase tracking-[0.3em] hover:opacity-100 opacity-50 transition-opacity underline underline-offset-8`}
                >
                  {isGodMode ? "[ RE_INITIALIZE_GATEWAY ]" : "Send another message"}
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Name Field */}
              <div className="group">
                <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 opacity-50">
                  {isGodMode ? '"sender_id":' : "Your Name"}
                </label>
                <input
                  required
                  type="text"
                  placeholder={isGodMode ? '"Enter Name..."' : "John Doe"}
                  className={`w-full bg-transparent border-b-2 p-3 outline-none transition-all ${
                    isGodMode 
                      ? "border-green-900 focus:border-green-400 text-green-400" 
                      : "border-slate-100 focus:border-blue-600 text-slate-900"
                  }`}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              {/* Email Field */}
              <div className="group">
                <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 opacity-50">
                  {isGodMode ? '"return_address":' : "Business Email"}
                </label>
                <input
                  required
                  type="email"
                  placeholder={isGodMode ? '"Enter Email..."' : "john@company.com"}
                  className={`w-full bg-transparent border-b-2 p-3 outline-none transition-all ${
                    isGodMode 
                      ? "border-green-900 focus:border-green-400 text-green-400" 
                      : "border-slate-100 focus:border-blue-600 text-slate-900"
                  }`}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              {/* Message Field */}
              <div className="group">
                <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 opacity-50">
                  {isGodMode ? '"payload": {' : "Project Scope"}
                </label>
                <textarea
                  required
                  rows="4"
                  placeholder={isGodMode ? '"Describe your data challenges..."' : "How can I help your business grow?"}
                  className={`w-full bg-transparent border-2 rounded-xl p-4 outline-none transition-all ${
                    isGodMode 
                      ? "border-green-900 focus:border-green-400 text-green-400" 
                      : "border-slate-100 focus:border-blue-600 text-slate-900 shadow-inner"
                  }`}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'SENDING'}
                className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-300 ${
                  isGodMode 
                    ? "bg-green-500 text-black hover:bg-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)]" 
                    : "bg-blue-600 text-white hover:bg-blue-700 shadow-xl"
                }`}
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
            </div>
          )}
        </form>
      </div>
    </section>
  );
}