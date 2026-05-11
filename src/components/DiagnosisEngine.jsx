import { useState } from 'react';
import { BrainCircuit, Loader2, Sparkles, ChevronRight } from 'lucide-react';

const TOP_PREDICTIONS = [
  { disease: 'Heart Failure',  pct: 78, risk: 'High Risk',   riskCls: 'risk-high',   barColor: 'var(--red)'    },
  { disease: 'Pneumonia',      pct: 62, risk: 'Medium Risk', riskCls: 'risk-medium', barColor: 'var(--amber)'  },
  { disease: 'Diabetes Type 2',pct: 35, risk: 'Low Risk',    riskCls: 'risk-low',    barColor: 'var(--green)'  },
  { disease: 'Sepsis',         pct: 81, risk: 'High Risk',   riskCls: 'risk-high',   barColor: 'var(--red)'    },
];

export default function DiagnosisEngine() {
  const [text, setText]   = useState('');
  const [state, setState] = useState('default'); // default | input | loading | result

  const handleAnalyze = () => {
    if (!text.trim()) return;
    setState('loading');
    setTimeout(() => setState('result'), 1800);
  };

  return (
    <div className="card p-18">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="icon-wrap iw-40 icon-blue"><BrainCircuit size={18} /></div>
          <div>
            <h3 className="display font-semibold" style={{ fontSize: '0.9375rem' }}>AI Diagnosis Insights</h3>
            <p className="text-xs muted">Top Predictions</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="badge badge-blue"><Sparkles size={9} /> AI</span>
          <button className="btn btn-ghost btn-sm">View all →</button>
        </div>
      </div>

      {/* Top predictions (always visible) */}
      {state !== 'result' && (
        <div className="flex flex-col gap-3" style={{ marginTop: 14 }}>
          {TOP_PREDICTIONS.map((p, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="grow">
                <div className="flex items-center justify-between" style={{ marginBottom: 5 }}>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold">{p.disease}</span>
                    <span className={`risk-tag ${p.riskCls}`}>{p.risk}</span>
                  </div>
                  <span className="text-sm font-bold" style={{ color: p.barColor }}>{p.pct}%</span>
                </div>
                <div className="vbar">
                  <div className="vbar-fill" style={{ width: `${p.pct}%`, background: p.barColor, height: 4 }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Custom analysis input */}
      {state === 'input' && (
        <div className="input-field" style={{ marginTop: 14 }}>
          <textarea
            rows={3}
            placeholder="Enter patient symptoms or paste MRI / X-ray notes…"
            value={text}
            onChange={e => setText(e.target.value)}
            autoFocus
          />
        </div>
      )}

      {/* Custom result */}
      {state === 'result' && (
        <div className="flex flex-col gap-3" style={{ marginTop: 14 }}>
          <p className="text-xs muted">Custom differential diagnosis</p>
          {TOP_PREDICTIONS.map((p, i) => (
            <div key={i}>
              <div className="flex justify-between items-center" style={{ marginBottom: 4 }}>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold">{p.disease}</span>
                  <span className={`risk-tag ${p.riskCls}`}>{p.risk}</span>
                </div>
                <span className="text-sm font-bold" style={{ color: p.barColor }}>{p.pct}%</span>
              </div>
              <div className="vbar">
                <div className="vbar-fill" style={{ width: `${p.pct}%`, background: p.barColor, height: 4 }} />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-2" style={{ marginTop: 14 }}>
        {state === 'result' ? (
          <>
            <button className="btn btn-primary grow">Accept Diagnosis</button>
            <button className="btn btn-ghost" onClick={() => { setText(''); setState('default'); }}>Reset</button>
          </>
        ) : state === 'input' ? (
          <button className="btn btn-primary btn-full" onClick={handleAnalyze} disabled={!text.trim()}>
            <BrainCircuit size={14} /> Run AI Analysis
          </button>
        ) : state === 'loading' ? (
          <button className="btn btn-primary btn-full" disabled>
            <Loader2 size={14} className="spin-anim" /> Analysing…
          </button>
        ) : (
          <button className="btn btn-primary btn-full" onClick={() => setState('input')}>
            <BrainCircuit size={14} /> New Custom Analysis
            <ChevronRight size={14} style={{ marginLeft: 'auto' }} />
          </button>
        )}
      </div>
    </div>
  );
}
