import { useState } from 'react';
import { BrainCircuit, Loader2, Sparkles } from 'lucide-react';

const RESULTS = [
  { label: 'Bacterial Pneumonia',       pct: 74, color: 'var(--red)'    },
  { label: 'Viral Upper Respiratory',   pct: 18, color: 'var(--amber)'  },
  { label: 'Allergic Rhinitis',          pct: 8,  color: 'var(--blue)'   },
];

export default function DiagnosisEngine() {
  const [text, setText] = useState('');
  const [state, setState] = useState('idle'); // idle | loading | done

  const handleAnalyze = () => {
    if (!text.trim()) return;
    setState('loading');
    setTimeout(() => setState('done'), 1800);
  };

  const handleReset = () => { setText(''); setState('idle'); };

  return (
    <div className="card p-18">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="icon-wrap iw-40 icon-blue">
            <BrainCircuit size={18} />
          </div>
          <div>
            <h3 className="display font-semibold" style={{ fontSize: '0.9375rem' }}>AI Diagnosis Engine</h3>
            <p className="text-xs muted">Symptom & imaging analysis</p>
          </div>
        </div>
        <span className="badge badge-blue"><Sparkles size={9} /> AI</span>
      </div>

      {/* Input */}
      {state !== 'done' && (
        <div className="input-field" style={{ marginTop: 16 }}>
          <textarea
            rows={3}
            placeholder="Enter patient symptoms or paste MRI / X-ray notes…"
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </div>
      )}

      {/* Results */}
      {state === 'done' && (
        <div className="flex flex-col gap-3" style={{ marginTop: 16 }}>
          <p className="text-xs muted">Differential diagnosis</p>
          {RESULTS.map((r, i) => (
            <div key={i}>
              <div className="flex justify-between items-center" style={{ marginBottom: 5 }}>
                <span className="text-sm font-medium">{r.label}</span>
                <span className="text-sm font-bold" style={{ color: r.color }}>{r.pct}%</span>
              </div>
              <div className="vbar">
                <div className="vbar-fill" style={{ width: `${r.pct}%`, background: r.color, height: 5 }} />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-2" style={{ marginTop: 14 }}>
        {state === 'done' ? (
          <>
            <button className="btn btn-primary grow">Accept Diagnosis</button>
            <button className="btn btn-ghost" onClick={handleReset}>Re-analyse</button>
          </>
        ) : (
          <button
            className="btn btn-primary btn-full"
            onClick={handleAnalyze}
            disabled={state === 'loading'}
          >
            {state === 'loading'
              ? <><Loader2 size={14} className="spin-anim" /> Analysing…</>
              : <><BrainCircuit size={14} /> Run AI Analysis</>
            }
          </button>
        )}
      </div>
    </div>
  );
}
