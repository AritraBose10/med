import { Video, Clock, Users, CheckCircle } from 'lucide-react';

const queue = [
  { name: 'Marcus Williams', wait: '2 min', status: 'Ready' },
  { name: 'Priya Sharma',    wait: '8 min', status: 'Waiting' },
  { name: 'James O\'Brien',  wait: '14 min', status: 'Waiting' },
];

export default function Telemedicine() {
  return (
    <div className="card p-18">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="icon-wrap iw-40 icon-blue">
            <Video size={18} />
          </div>
          <div>
            <h3 className="display font-semibold" style={{ fontSize: '0.9375rem' }}>Telemedicine Center</h3>
            <p className="text-xs muted">Video consultation hub</p>
          </div>
        </div>
        <span className="badge badge-amber">4 waiting</span>
      </div>

      {/* Stats */}
      <div className="grid-2" style={{ marginTop: 16 }}>
        <div className="stat-tile">
          <div className="flex items-center gap-1" style={{ marginBottom: 3 }}>
            <Users size={11} style={{ color: 'var(--text-secondary)' }} />
            <span className="stat-label">Queue</span>
          </div>
          <div className="stat-value col-blue">4</div>
        </div>
        <div className="stat-tile">
          <div className="flex items-center gap-1" style={{ marginBottom: 3 }}>
            <Clock size={11} style={{ color: 'var(--text-secondary)' }} />
            <span className="stat-label">Avg Wait</span>
          </div>
          <div className="stat-value">8 <span className="text-xs muted font-medium">min</span></div>
        </div>
      </div>

      {/* Queue list */}
      <div className="flex flex-col gap-2" style={{ marginTop: 14 }}>
        {queue.map((p, i) => (
          <div key={i} className="patient-row">
            <div>
              <p className="text-sm font-medium">{p.name}</p>
              <p className="text-xs muted">{p.wait} wait</p>
            </div>
            <span className={`badge ${p.status === 'Ready' ? 'badge-green' : 'badge-blue'}`}>
              {p.status === 'Ready' && <CheckCircle size={9} />}
              {p.status}
            </span>
          </div>
        ))}
      </div>

      <button className="btn btn-primary btn-full mt-4" style={{ marginTop: 14 }}>
        <Video size={14} /> Start Next Consultation
      </button>
    </div>
  );
}
