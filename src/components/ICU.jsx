import { HeartPulse, Activity } from 'lucide-react';

const patients = [
  {
    bed: 'Bed 04',
    name: 'John Doe',
    status: 'Stabilizing',
    statusColor: 'badge-green',
    hr: 72,
    bp: '118/76',
    spo2: 98,
    barPct: 72,
    barColor: 'var(--green)',
  },
  {
    bed: 'Bed 12',
    name: 'Jane Smith',
    status: 'BP Fluctuation',
    statusColor: 'badge-amber',
    hr: 91,
    bp: '148/92',
    spo2: 95,
    barPct: 91,
    barColor: 'var(--amber)',
  },
  {
    bed: 'Bed 07',
    name: 'Robert Chen',
    status: 'Critical',
    statusColor: 'badge-red',
    hr: 112,
    bp: '90/60',
    spo2: 88,
    barPct: 88,
    barColor: 'var(--red)',
  },
];

export default function ICU() {
  return (
    <div className="card p-18">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="icon-wrap iw-40 icon-red">
            <HeartPulse size={18} />
          </div>
          <div>
            <h3 className="display font-semibold" style={{ fontSize: '0.9375rem' }}>ICU Intelligence</h3>
            <p className="text-xs muted">Real-time vitals monitoring</p>
          </div>
        </div>
        <span className="badge badge-red">2 critical</span>
      </div>

      {/* Patient list */}
      <div className="flex flex-col gap-3" style={{ marginTop: 16 }}>
        {patients.map((p, i) => (
          <div key={i} className="patient-row" style={{ flexDirection: 'column', alignItems: 'stretch', gap: 10 }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold">{p.name}</p>
                <p className="text-xs muted">{p.bed}</p>
              </div>
              <span className={`badge ${p.statusColor}`}>{p.status}</span>
            </div>

            {/* Vitals row */}
            <div className="flex gap-3">
              <div className="flex items-center gap-1">
                <Activity size={11} style={{ color: 'var(--text-secondary)' }} />
                <span className="text-xs muted">HR</span>
                <span className="text-xs font-semibold">{p.hr}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-xs muted">BP</span>
                <span className="text-xs font-semibold">{p.bp}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-xs muted">SpO₂</span>
                <span className="text-xs font-semibold">{p.spo2}%</span>
              </div>
            </div>

            {/* Vitals bar */}
            <div className="vbar">
              <div className="vbar-fill" style={{ width: `${p.barPct}%`, background: p.barColor }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
