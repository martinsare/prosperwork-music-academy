// Web Audio API Instrument Sound Synthesizer for ProsperWork Music Academy Hero

let audioCtx: AudioContext | null = null;
let activeNodes: { stop?: () => void; disconnect?: () => void }[] = [];

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!audioCtx) {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

export function stopAllSounds() {
  activeNodes.forEach((node) => {
    try {
      if (node.stop) node.stop();
      if (node.disconnect) node.disconnect();
    } catch {
      // already stopped
    }
  });
  activeNodes = [];
}

/**
 * 1. PIANO: Rich acoustic piano chord with harmonic overtones and natural decay
 */
function playPiano(ctx: AudioContext, masterGain: GainNode) {
  // Cmaj9 chord notes (Hz): C3, G3, B3, D4, E4, G4
  const freqs = [130.81, 196.0, 246.94, 293.66, 329.63, 392.0];
  const now = ctx.currentTime;

  freqs.forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    // Harmonics for piano timbre
    osc.type = idx % 2 === 0 ? "triangle" : "sine";
    osc.frequency.setValueAtTime(freq, now + idx * 0.04);

    // Dynamic velocity and decay envelope
    const noteStart = now + idx * 0.04;
    gain.gain.setValueAtTime(0.0001, noteStart);
    gain.gain.exponentialRampToValueAtTime(0.18 / (idx * 0.4 + 1), noteStart + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, noteStart + 2.5);

    osc.connect(gain);
    gain.connect(masterGain);

    osc.start(noteStart);
    osc.stop(noteStart + 2.6);
    activeNodes.push(osc);
  });
}

/**
 * 2. SAXOPHONE: Warm, expressive brassy melodic motif with vibrato and formant filter
 */
function playSaxophone(ctx: AudioContext, masterGain: GainNode) {
  // Saxophone melodic notes: E4 -> G4 -> A4 -> B4
  const notes = [
    { freq: 329.63, start: 0.0, dur: 0.35 },
    { freq: 392.0, start: 0.35, dur: 0.35 },
    { freq: 440.0, start: 0.7, dur: 0.4 },
    { freq: 493.88, start: 1.1, dur: 1.2 },
  ];
  const now = ctx.currentTime;

  notes.forEach(({ freq, start, dur }) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    // Sawtooth + warm lowpass filter mimics saxophone reed resonance
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(freq, now + start);

    // Vibrato LFO
    const vibrato = ctx.createOscillator();
    const vibratoGain = ctx.createGain();
    vibrato.frequency.setValueAtTime(5.5, now + start); // 5.5 Hz vibrato
    vibratoGain.gain.setValueAtTime(freq * 0.015, now + start);
    vibrato.connect(osc.frequency);
    vibrato.start(now + start + 0.1);
    vibrato.stop(now + start + dur);

    // Formant filter (sax body resonance)
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(1400, now + start);
    filter.Q.setValueAtTime(3.5, now + start);

    // Expressive swell & breath envelope
    const noteStart = now + start;
    gain.gain.setValueAtTime(0.0001, noteStart);
    gain.gain.linearRampToValueAtTime(0.12, noteStart + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, noteStart + dur);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(masterGain);

    osc.start(noteStart);
    osc.stop(noteStart + dur + 0.05);
    activeNodes.push(osc, vibrato);
  });
}

/**
 * 3. VOICE TRAINING: Harmonized vocal choir "Aah" with resonant formant filters
 */
function playVoice(ctx: AudioContext, masterGain: GainNode) {
  // Vocal triad harmony (A3, C#4, E4, A4)
  const freqs = [220.0, 277.18, 329.63, 440.0];
  const now = ctx.currentTime;

  freqs.forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const formantFilter = ctx.createBiquadFilter();

    osc.type = "triangle";
    osc.frequency.setValueAtTime(freq, now);

    // Gentle vocal vibrato
    const vibrato = ctx.createOscillator();
    const vibGain = ctx.createGain();
    vibrato.frequency.setValueAtTime(4.8, now);
    vibGain.gain.setValueAtTime(freq * 0.01, now);
    vibrato.connect(osc.frequency);
    vibrato.start(now + 0.2);
    vibrato.stop(now + 2.5);

    // Vocal vowel "Aah" formant peak (~800Hz / 1200Hz)
    formantFilter.type = "bandpass";
    formantFilter.frequency.setValueAtTime(850 + idx * 80, now);
    formantFilter.Q.setValueAtTime(2.2, now);

    // Smooth vocal breath swell & release
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(0.14, now + 0.5);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.4);

    osc.connect(formantFilter);
    formantFilter.connect(gain);
    gain.connect(masterGain);

    osc.start(now);
    osc.stop(now + 2.5);
    activeNodes.push(osc, vibrato);
  });
}

/**
 * 4. DRUMS: Crisp acoustic kick, snare roll, and shimmering hi-hat groove
 */
function playDrums(ctx: AudioContext, masterGain: GainNode) {
  const now = ctx.currentTime;

  // Kick Drum helper
  const triggerKick = (time: number) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.frequency.setValueAtTime(140, time);
    osc.frequency.exponentialRampToValueAtTime(38, time + 0.12);

    gain.gain.setValueAtTime(0.3, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.25);

    osc.connect(gain);
    gain.connect(masterGain);
    osc.start(time);
    osc.stop(time + 0.26);
    activeNodes.push(osc);
  };

  // Snare Drum helper (Noise + pitch snap)
  const triggerSnare = (time: number) => {
    // Noise buffer
    const bufferSize = ctx.sampleRate * 0.18;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = "highpass";
    noiseFilter.frequency.setValueAtTime(1000, time);

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.18, time);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, time + 0.18);

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(masterGain);

    // Tonal body
    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();
    osc.frequency.setValueAtTime(200, time);
    osc.frequency.exponentialRampToValueAtTime(80, time + 0.08);
    oscGain.gain.setValueAtTime(0.12, time);
    oscGain.gain.exponentialRampToValueAtTime(0.001, time + 0.12);

    osc.connect(oscGain);
    oscGain.connect(masterGain);

    noise.start(time);
    osc.start(time);
    osc.stop(time + 0.13);
    activeNodes.push(noise, osc);
  };

  // Hi-Hat helper
  const triggerHiHat = (time: number) => {
    const bufferSize = ctx.sampleRate * 0.05;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = "highpass";
    filter.frequency.setValueAtTime(7000, time);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.08, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.04);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(masterGain);
    noise.start(time);
    activeNodes.push(noise);
  };

  // Rhythm Pattern: Kick -> Hat -> Snare -> Hat -> Kick -> Snare
  triggerKick(now);
  triggerHiHat(now + 0.15);
  triggerSnare(now + 0.35);
  triggerHiHat(now + 0.52);
  triggerKick(now + 0.7);
  triggerSnare(now + 0.95);
  triggerHiHat(now + 1.15);
}

/**
 * 5. VIOLIN: Pure intonation, clean bowing string passage with vibrato
 */
function playViolin(ctx: AudioContext, masterGain: GainNode) {
  // Violin phrase: D4 -> A4 -> F#5
  const notes = [
    { freq: 293.66, start: 0.0, dur: 0.5 },
    { freq: 440.0, start: 0.5, dur: 0.5 },
    { freq: 739.99, start: 1.0, dur: 1.3 },
  ];
  const now = ctx.currentTime;

  notes.forEach(({ freq, start, dur }) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(freq, now + start);

    // Warm violin body resonance filter
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(freq * 1.5, now + start);
    filter.Q.setValueAtTime(1.8, now + start);

    // Bowing vibrato
    const vibrato = ctx.createOscillator();
    const vibGain = ctx.createGain();
    vibrato.frequency.setValueAtTime(6.0, now + start);
    vibGain.gain.setValueAtTime(freq * 0.015, now + start);
    vibrato.connect(osc.frequency);
    vibrato.start(now + start + 0.15);
    vibrato.stop(now + start + dur);

    // Bow attack & release
    const noteStart = now + start;
    gain.gain.setValueAtTime(0.0001, noteStart);
    gain.gain.linearRampToValueAtTime(0.12, noteStart + 0.12);
    gain.gain.exponentialRampToValueAtTime(0.0001, noteStart + dur);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(masterGain);

    osc.start(noteStart);
    osc.stop(noteStart + dur + 0.05);
    activeNodes.push(osc, vibrato);
  });
}

/**
 * 6. GUITAR: Acoustic guitar fingerpicking arpeggio (warm decay, string resonance)
 */
function playGuitar(ctx: AudioContext, masterGain: GainNode) {
  // G Major fingerpicked arpeggio: G3, B3, D4, G4, B4, D5
  const freqs = [196.0, 246.94, 293.66, 392.0, 493.88, 587.33];
  const now = ctx.currentTime;

  freqs.forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.type = "triangle";
    osc.frequency.setValueAtTime(freq, now + idx * 0.12);

    // Acoustic wooden soundboard resonance
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(2200, now + idx * 0.12);
    filter.Q.setValueAtTime(2.0, now + idx * 0.12);

    const noteStart = now + idx * 0.12;
    gain.gain.setValueAtTime(0.0001, noteStart);
    gain.gain.exponentialRampToValueAtTime(0.16, noteStart + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, noteStart + 1.6);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(masterGain);

    osc.start(noteStart);
    osc.stop(noteStart + 1.7);
    activeNodes.push(osc);
  });
}

/**
 * Dispatcher: Plays the corresponding instrument sound
 */
export function playInstrumentSound(instrumentId: string, volume = 0.7) {
  const ctx = getAudioContext();
  if (!ctx) return;

  stopAllSounds();

  const masterGain = ctx.createGain();
  masterGain.gain.setValueAtTime(Math.max(0, Math.min(1, volume)), ctx.currentTime);
  masterGain.connect(ctx.destination);

  switch (instrumentId) {
    case "piano":
      playPiano(ctx, masterGain);
      break;
    case "saxophone":
      playSaxophone(ctx, masterGain);
      break;
    case "voice":
      playVoice(ctx, masterGain);
      break;
    case "drums":
      playDrums(ctx, masterGain);
      break;
    case "violin":
      playViolin(ctx, masterGain);
      break;
    case "guitar":
      playGuitar(ctx, masterGain);
      break;
    default:
      playPiano(ctx, masterGain);
      break;
  }
}

