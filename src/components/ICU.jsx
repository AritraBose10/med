import { HeartPulse, Activity, CheckCircle } from 'lucide-react';

function Waveform({ color }) {
  return (
    <svg viewBox="0 0 62 18" width="62" height="18" className="waveform-svg" aria-hidden="true">
      <polyline
        points="0,9 6,9 8,5 10,13 12,2 14,16 16,9 24,9 26,9 28,7 30,12 32,4 34,15 36,9 50,9 52,9 54,6 56,13 58,3 60,15 62,9"
        fill="none"
        stroke={color}
        strokeWidth="1.4"
        strokeLinejoin="round"
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>
  );
}

const PATIENTS = [
  { bed: 'ICU-101', name: 'John Doe',      hr: 68, spo2: 98, status: 'Stable',        statusCls: 'badge-green', waveColor: '#34D399' },
  { bed: 'ICU-102', name: 'Emma Wilson',   hr: 76, spo2: 97, status: 'Monitoring',    statusCls: 'badge-blue',  waveColor: '#7096FF' },
  { bed: 'ICU-103', name: 'Michael Brown', hr: 91, spo2: 95, status: 'BP Fluctuation',statusCls: 'badge-amber', waveColor: '#F59E0B' },
];

export default function ICU() {
  return (
    <div className="card p-18">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="icon-wrap iw-40 icon-red"><HeartPulse size={18} /></div>
          <div>
            <h3 className="display font-semibold" style={{ fontSize: '0.9375rem' }}>ICU Monitoring</h3>
            <p className="text-xs muted">Live Patients</p>
          </div>
        </div>
        <button className="btn btn-ghost btn-sm">View all →</button>
      </div>

      {/* Patient rows */}
      <div className="flex flex-col gap-3" style={{ marginTop: 14 }}>
        {PATIENTS.map((p, i) => (
          <div key={i} className="patient-row">
            {/* Avatar */}
            <div className="icon-wrap iw-32 icon-blue shrink-0" style={{ borderRadius: '50%' }}>
              <span className="text-xs font-bold">{p.name.split(' ').map(n => n[0]).join('')}</span>
            </div>

            {/* Name + waveform */}
            <div className="grow" style={{ minWidth: 0 }}>
              <p className="text-sm font-semibold" style={{ lineHeight: 1.2 }}>{p.bed} &middot; {p.name}</p>
              <Waveform color={p.waveColor} />
            </div>

            {/* Vitals */}
            <div className="flex flex-col items-center shrink-0" style={{ gap: 2, minWidth: 40 }}>
              <div className="flex items-center gap-1">
                <Activity size={9} style={{ color: 'var(--text-secondary)' }} />
                <span className="text-xs font-bold">{p.hr}</span>
              </div>
              <span style={{ fontSize: '0.55rem', color: 'var(--text-secondary)' }}>HR bpm</span>
              <span className="text-xs font-bold" style={{ marginTop: 2 }}>{p.spo2}%</span>
              <span style={{ fontSize: '0.55rem', color: 'var(--text-secondary)' }}>SpO₂</span>
            </div>

            {/* Status */}
            <span className={`badge ${p.statusCls} shrink-0`} style={{ fontSize: '0.6rem' }}>{p.status}</span>
          </div>
        ))}
      </div>

      {/* All stable footer */}
      <div className="flex items-center gap-2" style={{ marginTop: 12, padding: '8px 12px', background: 'var(--green-dim)', borderRadius: 8, border: '1px solid rgba(16,185,129,0.18)' }}>
        <CheckCircle size={13} style={{ color: 'var(--green)', flexShrink: 0 }} />
        <span className="text-xs" style={{ color: 'var(--green-light)' }}>All ICU patients within safe parameters</span>
      </div>
    </div>
  );
}
