import { TriangleAlert } from 'lucide-react';

export default function Alerts({ isEmergency }) {
  return (
    <div
      className={`alert-strip ${isEmergency ? 'critical critical-anim' : ''}`}
      style={{ marginTop: 16 }}
    >
      <div className={`ping-wrap ${isEmergency ? 'ping-red' : 'ping-amber'}`}>
        <span className="ping-ring" />
        <span className="ping-core" />
      </div>

      <div className="icon-wrap iw-32 shrink-0" style={{ background: isEmergency ? 'var(--red-dim)' : 'var(--amber-dim)', color: isEmergency ? 'var(--red)' : 'var(--amber)' }}>
        <TriangleAlert size={15} />
      </div>

      <div className="grow">
        <p className="text-sm font-semibold display">
          {isEmergency ? 'Critical Emergency Alert' : 'Patient Alert'}
        </p>
        <p className="text-xs muted" style={{ marginTop: 1 }}>
          Room 304 &mdash; Heart Rate Elevated &middot; {isEmergency ? 'URGENT' : '2 min ago'}
        </p>
      </div>

      <button className="btn btn-ghost btn-sm shrink-0">View</button>
    </div>
  );
}
