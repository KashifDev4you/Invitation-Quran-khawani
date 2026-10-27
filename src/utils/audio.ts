/**
 * Gentle ambient audio synthesizer using Web Audio API.
 * Provides respectful, soothing acoustic tones for envelope opening and interactions.
 * Fully self-contained without any external audio asset dependencies.
 */

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Play a gentle, soothing crystal chime chord when opening the envelope.
 */
export function playChimeSound(): void {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    // Harmonic frequencies for a peaceful, meditative pentatonic chord (D major / oriental harmony)
    const notes = [293.66, 440.0, 587.33, 880.0, 1174.66]; // D4, A4, D5, A5, D6
    const startTime = ctx.currentTime;

    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, startTime);

      // Gentle attack and long natural exponential decay
      const noteStart = startTime + idx * 0.08;
      const duration = 2.4;

      gain.gain.setValueAtTime(0.0001, noteStart);
      gain.gain.exponentialRampToValueAtTime(0.06 / (idx + 1), noteStart + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.00001, noteStart + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(noteStart);
      osc.stop(noteStart + duration);
    });
  } catch {
    // Graceful fallback if audio is blocked by browser policy
  }
}

/**
 * Gentle soft parchment paper rustle tone
 */
export function playPaperSound(): void {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const startTime = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(320, startTime);
    osc.frequency.exponentialRampToValueAtTime(180, startTime + 0.35);

    gain.gain.setValueAtTime(0.0001, startTime);
    gain.gain.linearRampToValueAtTime(0.03, startTime + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.00001, startTime + 0.35);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(startTime);
    osc.stop(startTime + 0.35);
  } catch {
    // Graceful fallback
  }
}

/**
 * Gentle click feedback
 */
export function playSoftClick(): void {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const startTime = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(520, startTime);
    osc.frequency.exponentialRampToValueAtTime(340, startTime + 0.12);

    gain.gain.setValueAtTime(0.02, startTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.12);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(startTime);
    osc.stop(startTime + 0.12);
  } catch {
    // Graceful fallback
  }
}
