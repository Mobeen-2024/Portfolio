// Web Audio API Synthesizer for high-tech micro-interaction sound effects
let audioCtx = null;
let isAudioMuted = typeof window !== 'undefined' ? localStorage.getItem('portfolio_audio_muted') === 'true' : false;

const getAudioContext = () => {
  if (!audioCtx && typeof window !== 'undefined') {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
};

export const isMuted = () => isAudioMuted;

export const toggleMute = () => {
  isAudioMuted = !isAudioMuted;
  if (typeof window !== 'undefined') {
    localStorage.setItem('portfolio_audio_muted', isAudioMuted.toString());
  }
  if (!isAudioMuted) {
    playClick(600, 0.05);
  }
  return isAudioMuted;
};

export const playClick = (freq = 440, duration = 0.04) => {
  if (isAudioMuted) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.5, ctx.currentTime + duration);

    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (_error) {
    // Ignore audio errors gracefully
  }
};

export const playLaserScan = () => {
  if (isAudioMuted) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    
    // Laser sweep
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(180, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.4);
    osc.frequency.exponentialRampToValueAtTime(220, now + 1.2);

    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.06, now + 0.3);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 1.2);
  } catch (_error) {
    // Ignore audio errors gracefully
  }
};

export const playModeSwitch = (isGodMode) => {
  if (isAudioMuted) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    
    // Power surge tone
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = isGodMode ? 'triangle' : 'sine';
    const startFreq = isGodMode ? 220 : 660;
    const endFreq = isGodMode ? 520 : 330;

    osc.frequency.setValueAtTime(startFreq, now);
    osc.frequency.exponentialRampToValueAtTime(endFreq, now + 0.25);

    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.25);
  } catch (_error) {
    // Ignore audio errors gracefully
  }
};

export const playSuccess = () => {
  if (isAudioMuted) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    [523.25, 659.25, 783.99].forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);
      gain.gain.setValueAtTime(0.05, now + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.18);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.18);
    });
  } catch (_error) {
    // Ignore audio errors gracefully
  }
};
