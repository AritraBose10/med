import { Pill, CheckCircle2, AlertCircle } from 'lucide-react';

const meds = [
  { name: 'Amoxicillin 500mg',   dose: '3× daily',   duration: '7 days',   flag: null       },
  { name: 'Ibuprofen 400mg',     dose: 'As needed',  duration: 'PRN',      flag: null       },
  { name: 'Montelukast 10mg',    dose: '1× nightly', duration: '30 days',  flag: 'Allergy?' },
];

export default function Prescription() {
  return (
    <div className="card p-18">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="icon-wrap iw-40 icon-green">
            <Pill size={18} />
          </div>
          <div>
            <h3 className="display font-semibold" style={{ fontSize: '0.9375rem' }}>Smart Prescription</h3>
            <p className="text-xs muted">AI auto-drafted · pending review</p>
          </div>
        </div>
        <span className="badge badge-blue">3 items</span>
      </div>

      {/* Medication list */}
      <div className="flex flex-col gap-2" style={{ marginTop: 16 }}>
        {meds.map((m, i) => (
          <div key={i} className="patient-row">
            <div className="grow">
              <div className="flex items-center gap-2">
                <p className="text-sm font-semibold">{m.name}</p>
                {m.flag && (
                  <span className="badge badge-amber" style={{ padding: '1px 6px' }}>
                    <AlertCircle size={8} /> {m.flag}
                  </span>
                )}
              </div>
              <p className="text-xs muted">{m.dose} &middot; {m.duration}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Drug interaction notice */}
      <div
        className="flex items-center gap-2"
        style={{
          marginTop: 12,
          padding: '8px 12px',
          background: 'var(--green-dim)',
          borderRadius: 8,
          border: '1px solid rgba(16,185,129,0.18)',
        }}
      >
        <CheckCircle2 size={13} style={{ color: 'var(--green)', flexShrink: 0 }} />
        <p className="text-xs" style={{ color: 'var(--green-light)' }}>No critical drug interactions detected</p>
      </div>

      {/* Actions */}
      <div className="flex gap-2" style={{ marginTop: 14 }}>
        <button
          className="btn btn-primary grow"
          style={{ background: 'var(--green)', boxShadow: '0 2px 8px rgba(16,185,129,0.3)' }}
        >
          <CheckCircle2 size={14} /> Approve & Send
        </button>
        <button className="btn btn-ghost">Edit</button>
      </div>
    </div>
  );
}
