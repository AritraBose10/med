import { ChevronRight, Heart, Activity, AlertTriangle, ClipboardList } from 'lucide-react';

const PROTOCOLS = [
  { icon: Heart,          label: 'Stroke',    sub: 'Protocol' },
  { icon: Activity,       label: 'CPR',       sub: 'Guide'    },
  { icon: AlertTriangle,  label: 'Trauma',    sub: 'Care'     },
  { icon: ClipboardList,  label: 'Emergency', sub: 'Triage'   },
];

export default function EmergencySection() {
  return (
    <div className="card p-18 emerg-card">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="display font-extrabold col-red" style={{ fontSize: '0.9375rem', letterSpacing: '0.04em' }}>
            EMERGENCY MODE
          </h3>
          <p className="text-xs muted">Instant Access</p>
        </div>
        <button className="btn btn-ghost btn-sm">
          <ChevronRight size={14} />
        </button>
      </div>

      {/* SOS + Protocol buttons */}
      <div className="flex items-center gap-3" style={{ marginTop: 14 }}>
        <button className="sos-btn">SOS</button>
        <div className="flex gap-2 grow">
          {PROTOCOLS.map((p, i) => (
            <button key={i} className="emerg-proto">
              <div className="icon-wrap iw-32 icon-red" style={{ margin: '0 auto' }}>
                <p.icon size={14} />
              </div>
              <span className="ep-label">{p.label}</span>
              <span className="ep-sub">{p.sub}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
