import { Building2, BedDouble, UserCheck, Zap } from 'lucide-react';

const wards = [
  { name: 'General Ward',  beds: 24, used: 20, pct: 83 },
  { name: 'Cardiology',    beds: 12, used: 10, pct: 83 },
  { name: 'Pediatrics',    beds: 16, used: 11, pct: 69 },
];

export default function HospitalDashboard() {
  return (
    <div className="card p-18">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="icon-wrap iw-40 icon-purple">
            <Building2 size={18} />
          </div>
          <div>
            <h3 className="display font-semibold" style={{ fontSize: '0.9375rem' }}>Agent Hospital</h3>
            <p className="text-xs muted">Live dashboard</p>
          </div>
        </div>
        <span className="badge badge-purple"><Zap size={9} /> AI Agent</span>
      </div>

      {/* Top stats */}
      <div className="grid-2" style={{ marginTop: 16 }}>
        <div className="stat-tile">
          <div className="flex items-center gap-1" style={{ marginBottom: 3 }}>
            <BedDouble size={11} style={{ color: 'var(--text-secondary)' }} />
            <span className="stat-label">Occupancy</span>
          </div>
          <div className="stat-value col-purple">82<span className="text-xs muted font-medium">%</span></div>
        </div>
        <div className="stat-tile">
          <div className="flex items-center gap-1" style={{ marginBottom: 3 }}>
            <UserCheck size={11} style={{ color: 'var(--text-secondary)' }} />
            <span className="stat-label">Staff On-duty</span>
          </div>
          <div className="stat-value">34</div>
        </div>
      </div>

      {/* Ward breakdown */}
      <div className="flex flex-col gap-3" style={{ marginTop: 14 }}>
        {wards.map((w, i) => (
          <div key={i}>
            <div className="flex justify-between items-center" style={{ marginBottom: 5 }}>
              <span className="text-sm font-medium">{w.name}</span>
              <span className="text-xs muted">{w.used}/{w.beds} beds</span>
            </div>
            <div className="vbar">
              <div
                className="vbar-fill"
                style={{
                  width: `${w.pct}%`,
                  background: w.pct >= 80 ? 'var(--amber)' : 'var(--green)',
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <button className="btn btn-ghost btn-full" style={{ marginTop: 14 }}>
        View Full Dashboard
      </button>
    </div>
  );
}
