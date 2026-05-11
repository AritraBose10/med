import { Building2, BedDouble, UserCheck, Zap, Stethoscope, HeartPulse, TriangleAlert, CalendarClock } from 'lucide-react';

const WARDS = [
  { name: 'General Ward', beds: 24, used: 20, pct: 83 },
  { name: 'Cardiology',   beds: 12, used: 10, pct: 83 },
  { name: 'Pediatrics',   beds: 16, used: 11, pct: 69 },
];

const SUBMODULES = [
  { icon: Stethoscope,  label: 'AI Doctors'   },
  { icon: HeartPulse,   label: 'ICU Monitor'  },
  { icon: TriangleAlert,label: 'Triage'       },
  { icon: BedDouble,    label: 'Bed Mgmt'     },
  { icon: CalendarClock,label: 'OT Schedule'  },
];

export default function HospitalDashboard() {
  return (
    <div className="card p-18">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="icon-wrap iw-40 icon-purple"><Building2 size={18} /></div>
          <div>
            <h3 className="display font-semibold" style={{ fontSize: '0.9375rem' }}>Agent Hospital</h3>
            <p className="text-xs muted">AI Powered Operations</p>
          </div>
        </div>
        <span className="badge badge-purple"><Zap size={9} /> Live</span>
      </div>

      {/* Top stats */}
      <div className="grid-2" style={{ marginTop: 14 }}>
        <div className="stat-tile">
          <div className="flex items-center gap-1" style={{ marginBottom: 3 }}>
            <BedDouble size={10} style={{ color: 'var(--text-secondary)' }} />
            <span className="stat-label">Total Beds</span>
          </div>
          <div className="stat-value">112</div>
        </div>
        <div className="stat-tile">
          <div className="flex items-center gap-1" style={{ marginBottom: 3 }}>
            <HeartPulse size={10} style={{ color: 'var(--text-secondary)' }} />
            <span className="stat-label">ICU Beds</span>
          </div>
          <div className="stat-value col-red">18</div>
        </div>
        <div className="stat-tile">
          <div className="flex items-center gap-1" style={{ marginBottom: 3 }}>
            <UserCheck size={10} style={{ color: 'var(--text-secondary)' }} />
            <span className="stat-label">Occupancy</span>
          </div>
          <div className="stat-value col-amber">92<span className="text-xs muted font-medium">%</span></div>
        </div>
        <div className="stat-tile">
          <div className="flex items-center gap-1" style={{ marginBottom: 3 }}>
            <Zap size={10} style={{ color: 'var(--text-secondary)' }} />
            <span className="stat-label">On Surgeries</span>
          </div>
          <div className="stat-value col-blue">6</div>
        </div>
      </div>

      {/* Ward bars */}
      <div className="flex flex-col gap-3" style={{ marginTop: 14 }}>
        {WARDS.map((w, i) => (
          <div key={i}>
            <div className="flex justify-between items-center" style={{ marginBottom: 5 }}>
              <span className="text-sm font-medium">{w.name}</span>
              <span className="text-xs muted">{w.used}/{w.beds} beds</span>
            </div>
            <div className="vbar">
              <div className="vbar-fill" style={{ width: `${w.pct}%`, background: w.pct >= 80 ? 'var(--amber)' : 'var(--green)' }} />
            </div>
          </div>
        ))}
      </div>

      {/* Sub-modules */}
      <div className="submodule-grid">
        {SUBMODULES.map((s, i) => (
          <button key={i} className="submodule-item">
            <div className="icon-wrap iw-28 icon-purple" style={{ margin: '0 auto' }}>
              <s.icon size={12} />
            </div>
            <span>{s.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
