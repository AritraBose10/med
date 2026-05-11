import { useState, useEffect } from 'react';
import { Activity } from 'lucide-react';

export default function Loader({ onDone }) {
  const [phase, setPhase] = useState('visible'); // visible → fading → done

  useEffect(() => {
    const fadeTimer = setTimeout(() => setPhase('fading'), 2200);
    const doneTimer = setTimeout(() => { setPhase('done'); onDone?.(); }, 2800);
    return () => { clearTimeout(fadeTimer); clearTimeout(doneTimer); };
  }, [onDone]);

  if (phase === 'done') return null;

  return (
    <div className="loader-overlay" style={{ opacity: phase === 'fading' ? 0 : 1 }}>
      {/* Ambient glow */}
      <div className="loader-glow" />

      {/* Icon + wordmark */}
      <div className="loader-brand">
        <div className="loader-icon-ring">
          <div className="loader-icon-inner">
            <Activity size={28} color="#fff" />
          </div>
        </div>
        <h1 className="loader-title">Nova AI</h1>
        <p className="loader-sub">Healthcare Intelligence</p>
      </div>

      {/* Progress bar */}
      <div className="loader-bar-track">
        <div className="loader-bar-fill" />
      </div>

      <p className="loader-hint">Initialising AI systems…</p>
    </div>
  );
}
