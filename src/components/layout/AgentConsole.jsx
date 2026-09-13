import React, { useState, useRef, useEffect } from 'react';
import { 
  Terminal, 
  Sparkles, 
  X, 
  ChevronUp, 
  ChevronDown, 
  Send, 
  CornerDownLeft, 
  CheckCircle2, 
  Cpu, 
  ShieldCheck, 
  Maximize2, 
  Minimize2 
} from 'lucide-react';
import { 
  AGENT_ROLES, 
  processExecutiveQuery, 
  executeCliCommand 
} from '../../content/agent_knowledge';

export default function AgentConsole({ isGodMode, isOpen, setIsOpen }) {
  // Terminal history for Architect mode
  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'system', lines: [
      '>> INITIALIZING SYS_ORCHESTRATOR v2.4 (HARDWARE_&_SYSTEMS_KERNEL)...',
      '>> KERNEL LOADED: React 19.2 / Vite / CompTIA A+ / Lightweight Charts / WebSockets / CCXT',
      '>> TYPE "help" FOR AVAILABLE COMMANDS OR CLICK SUGGESTIONS BELOW.'
    ]}
  ]);
  const [cliInput, setCliInput] = useState('');

  // Executive mode conversation state
  const [execConversation, setExecConversation] = useState([
    {
      role: 'assistant',
      title: 'IT Systems Briefing Ready',
      thoughtTrace: 'Hardware diagnostics and infrastructure credentials loaded.',
      content: 'Welcome. I am Mobeen\'s IT Systems & Support Copilot. You can explore verified hardware competencies, CompTIA A+ progress, networking deployments, or ask questions regarding technical projects and UK availability.'
    }
  ]);
  const [execInput, setExecInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const terminalEndRef = useRef(null);
  const execEndRef = useRef(null);

  // Auto-scroll terminal or exec stream
  useEffect(() => {
    if (isOpen) {
      terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      execEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [terminalHistory, execConversation, isOpen]);

  // Handle Architect CLI Execution
  const handleCliSubmit = (e) => {
    e?.preventDefault();
    const cmd = cliInput.trim();
    if (!cmd) return;

    if (cmd.toLowerCase() === 'clear') {
      setTerminalHistory([]);
      setCliInput('');
      return;
    }

    const result = executeCliCommand(cmd);
    setTerminalHistory(prev => [
      ...prev,
      { type: 'user', command: cmd },
      { type: result.type, lines: result.lines }
    ]);
    setCliInput('');
  };

  const runQuickCommand = (cmd) => {
    setCliInput(cmd);
    const result = executeCliCommand(cmd);
    setTerminalHistory(prev => [
      ...prev,
      { type: 'user', command: cmd },
      { type: result.type, lines: result.lines }
    ]);
    setCliInput('');
  };

  // Handle Executive Query Submission
  const handleExecSubmit = (e) => {
    e?.preventDefault();
    const q = execInput.trim();
    if (!q) return;

    setExecConversation(prev => [
      ...prev,
      { role: 'user', content: q }
    ]);
    setExecInput('');
    setIsProcessing(true);

    setTimeout(() => {
      const answer = processExecutiveQuery(q);
      setExecConversation(prev => [
        ...prev,
        {
          role: 'assistant',
          title: answer.title,
          thoughtTrace: answer.thoughtTrace,
          content: answer.response
        }
      ]);
      setIsProcessing(false);
    }, 400);
  };

  const handleExecutivePromptClick = (promptItem) => {
    setExecConversation(prev => [
      ...prev,
      { role: 'user', content: promptItem.query }
    ]);
    setIsProcessing(true);

    setTimeout(() => {
      const answer = processExecutiveQuery(promptItem.query);
      setExecConversation(prev => [
        ...prev,
        {
          role: 'assistant',
          title: answer.title,
          thoughtTrace: answer.thoughtTrace,
          content: answer.response
        }
      ]);
      setIsProcessing(false);
    }, 350);
  };

  return (
    <aside 
      aria-label="Interactive Agent Console"
      className={`fixed bottom-4 right-4 z-[150] transition-all duration-500 ease-in-out ${
        isOpen ? "w-[94vw] sm:w-[540px] md:w-[600px] h-[580px] max-h-[85vh]" : "w-auto h-auto"
      }`}
    >
      {/* Minimized Floating Dock Pill */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className={`group flex items-center gap-3 px-4 py-3 rounded-2xl shadow-2xl transition-all duration-300 border ${
            isGodMode
              ? "bg-black/90 border-green-500/50 text-green-400 hover:border-green-400 shadow-[0_0_25px_rgba(34,197,94,0.3)] font-mono"
              : "bg-white/95 border-slate-200 text-slate-800 hover:border-blue-400 shadow-xl shadow-blue-500/10 font-sans"
          }`}
          aria-label="Open Agent Console"
        >
          <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
            isGodMode ? "bg-green-500/20 text-green-400" : "bg-blue-50 text-blue-600"
          }`}>
            {isGodMode ? <Terminal className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
          </div>
          <div className="text-left hidden sm:block">
            <p className="text-xs font-bold leading-tight flex items-center gap-1.5">
              <span>{isGodMode ? "SYS_ORCHESTRATOR v2.4" : "IT Systems & Support AI"}</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
            </p>
            <p className="text-[10px] opacity-60 uppercase tracking-wider font-semibold">
              {isGodMode ? "CLI KERNEL READY" : "SYSTEMS ADVISOR"}
            </p>
          </div>
          <ChevronUp className="w-4 h-4 opacity-60 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}

      {/* Expanded Interactive Window */}
      {isOpen && (
        <div 
          className={`flex flex-col h-full rounded-3xl border shadow-2xl overflow-hidden backdrop-blur-2xl transition-all duration-500 ${
            isGodMode 
              ? "bg-black/95 border-green-500/40 text-green-400 font-mono shadow-[0_0_50px_rgba(34,197,94,0.2)]" 
              : "bg-white/95 border-slate-200 text-slate-800 font-sans shadow-2xl shadow-blue-900/15"
          }`}
        >
          {/* Header Bar */}
          <div className={`px-5 py-4 border-b flex items-center justify-between transition-colors ${
            isGodMode ? "border-green-500/20 bg-green-950/20" : "border-slate-100 bg-slate-50/80"
          }`}>
            <div className="flex items-center gap-3">
              <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                isGodMode ? "bg-green-500 text-black font-black" : "bg-blue-600 text-white font-bold"
              }`}>
                {isGodMode ? <Terminal className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
              </div>
              <div>
                <h3 className="text-xs font-bold tracking-wider uppercase flex items-center gap-2">
                  <span>{isGodMode ? AGENT_ROLES.architect.name : AGENT_ROLES.executive.name}</span>
                  <span className={`text-[9px] px-1.5 py-0.5 rounded font-mono ${
                    isGodMode ? "bg-green-500/20 text-green-300" : "bg-blue-100 text-blue-700"
                  }`}>
                    {isGodMode ? AGENT_ROLES.architect.badge : AGENT_ROLES.executive.badge}
                  </span>
                </h3>
                <p className="text-[10px] opacity-60 line-clamp-1">
                  {isGodMode ? AGENT_ROLES.architect.tagline : AGENT_ROLES.executive.tagline}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsOpen(false)}
                className={`p-1.5 rounded-lg border transition-colors ${
                  isGodMode 
                    ? "border-green-500/30 text-green-400 hover:bg-green-500/10" 
                    : "border-slate-200 text-slate-500 hover:bg-slate-200/60"
                }`}
                aria-label="Minimize Agent Console"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div 
            className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 text-xs sm:text-sm no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {isGodMode ? (
              /* ARCHITECT CLI TERMINAL */
              <div className="space-y-3 font-mono">
                {terminalHistory.map((entry, idx) => (
                  <div key={idx} className="space-y-1">
                    {entry.command && (
                      <div className="flex items-center gap-2 text-green-300 font-bold">
                        <span className="opacity-60 text-green-600">guest@mobeen-arch:~$</span>
                        <span>{entry.command}</span>
                      </div>
                    )}
                    {entry.lines && (
                      <div className={`pl-2 border-l-2 space-y-0.5 ${
                        entry.type === 'error' 
                          ? "border-red-500/50 text-red-400" 
                          : entry.type === 'system'
                          ? "border-green-500/30 text-green-500/80"
                          : "border-green-500/40 text-green-400"
                      }`}>
                        {entry.lines.map((line, lIdx) => (
                          <pre key={lIdx} className="font-mono text-xs whitespace-pre-wrap leading-relaxed">
                            {line}
                          </pre>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div ref={terminalEndRef} />
              </div>
            ) : (
              /* EXECUTIVE AI CO-PILOT CHAT */
              <div className="space-y-4">
                {execConversation.map((msg, idx) => (
                  <div 
                    key={idx} 
                    className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    {msg.role === 'assistant' ? (
                      <div className="max-w-[88%] space-y-2">
                        {msg.thoughtTrace && (
                          <div className="text-[10px] text-blue-600/70 font-mono flex items-center gap-1.5 bg-blue-50/80 px-2.5 py-1 rounded-md border border-blue-100">
                            <Cpu className="w-3 h-3" />
                            <span>{msg.thoughtTrace}</span>
                          </div>
                        )}
                        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-slate-800 leading-relaxed shadow-sm">
                          {msg.title && (
                            <h4 className="font-bold text-xs uppercase tracking-wider text-blue-600 mb-1.5">
                              {msg.title}
                            </h4>
                          )}
                          <p className="text-xs sm:text-sm">{msg.content}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="max-w-[80%] p-3 px-4 rounded-2xl bg-blue-600 text-white font-medium text-xs sm:text-sm shadow-md">
                        {msg.content}
                      </div>
                    )}
                  </div>
                ))}

                {isProcessing && (
                  <div className="flex items-center gap-2 text-xs text-blue-600 font-medium py-1">
                    <div className="w-2 h-2 rounded-full bg-blue-600 animate-bounce" />
                    <div className="w-2 h-2 rounded-full bg-blue-600 animate-bounce [animation-delay:0.2s]" />
                    <div className="w-2 h-2 rounded-full bg-blue-600 animate-bounce [animation-delay:0.4s]" />
                    <span className="text-[11px] font-mono opacity-80">Synthesizing executive response...</span>
                  </div>
                )}
                <div ref={execEndRef} />
              </div>
            )}
          </div>

          {/* Quick Suggestions Chips */}
          <div className={`px-4 py-2.5 border-t overflow-x-auto flex gap-2 no-scrollbar ${
            isGodMode ? "border-green-500/20 bg-black/60" : "border-slate-100 bg-slate-50/50"
          }`}>
            {isGodMode ? (
              AGENT_ROLES.architect.suggestedCommands.map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => runQuickCommand(cmd)}
                  className="px-2.5 py-1 rounded-md text-[11px] font-mono whitespace-nowrap bg-green-500/10 hover:bg-green-500/25 border border-green-500/20 text-green-400 transition-colors"
                >
                  ${cmd}
                </button>
              ))
            ) : (
              AGENT_ROLES.executive.suggestedQueries.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleExecutivePromptClick(item)}
                  className="px-3 py-1 rounded-full text-[11px] font-medium whitespace-nowrap bg-white hover:bg-blue-50 border border-slate-200 text-slate-700 transition-colors shadow-xs"
                >
                  {item.label}
                </button>
              ))
            )}
          </div>

          {/* Input Controls */}
          <div className={`p-3 sm:p-4 border-t ${
            isGodMode ? "border-green-500/20 bg-black/80" : "border-slate-100 bg-white"
          }`}>
            {isGodMode ? (
              <form onSubmit={handleCliSubmit} className="flex items-center gap-2">
                <span className="text-green-500 font-mono font-bold">$</span>
                <input
                  type="text"
                  value={cliInput}
                  onChange={(e) => setCliInput(e.target.value)}
                  placeholder="type command (e.g. status, projects, eval_metrics, help)..."
                  className="flex-1 bg-transparent text-green-400 font-mono text-xs sm:text-sm outline-none placeholder:text-green-500/30"
                  autoFocus
                />
                <button
                  type="submit"
                  className="p-2 rounded-lg bg-green-500/20 hover:bg-green-500/30 text-green-400 border border-green-500/30 transition-colors"
                  aria-label="Execute command"
                >
                  <CornerDownLeft className="w-3.5 h-3.5" />
                </button>
              </form>
            ) : (
              <form onSubmit={handleExecSubmit} className="flex items-center gap-2">
                <input
                  type="text"
                  value={execInput}
                  onChange={(e) => setExecInput(e.target.value)}
                  placeholder="Ask about CompTIA A+, hardware repair, CCTV setup, projects, or contact info..."
                  className="flex-1 bg-slate-100 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-800 outline-none border border-transparent focus:border-blue-400 transition-all placeholder:text-slate-400"
                />
                <button
                  type="submit"
                  className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-md transition-colors"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </aside>
  );
}
