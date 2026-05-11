import { Bell, Siren } from 'lucide-react';

export default function DoctorProfile({ isEmergency, setIsEmergency }) {
  return (
    <div className="doctor-profile fade-up d0">
      {/* Left: avatar + info — flex: 1 + min-width: 0 so it can shrink */}
      <div className="flex items-center gap-3" style={{ flex: 1, minWidth: 0, overflow: 'hidden' }}>
        <div className="doc-avatar" style={{ flexShrink: 0 }}>
          AM
          <span className="doc-online-dot" />
        </div>

        <div style={{ minWidth: 0 }}>
          {/* Name row — nowrap, truncate if needed */}
          <div className="flex items-center gap-1" style={{ flexWrap: 'nowrap' }}>
            <span
              className="display font-bold"
              style={{ fontSize: '0.9rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
            >
              Dr. Alex Morgan
            </span>
            <svg width="12" height="12" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
              <circle cx="12" cy="12" r="10" fill="var(--blue)" />
              <path d="M8 12.5l3 3 5-5" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Subtitle — single line, ellipsis */}
          <p
            className="text-xs muted"
            style={{ marginTop: 2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
          >
            Cardiologist &middot; City Hospital, NY
          </p>
        </div>
      </div>

      {/* Right: bell + SOS — never shrink */}
      <div className="flex items-center gap-2" style={{ flexShrink: 0 }}>
        <button className="notif-btn">
          <Bell size={15} />
          <span className="notif-badge">8</span>
        </button>
        <button
          onClick={() => setIsEmergency(!isEmergency)}
          className={`btn btn-sm ${isEmergency ? 'btn-danger' : 'btn-ghost'}`}
          style={{ gap: 4, padding: '6px 10px' }}
        >
          <Siren size={13} />
          {isEmergency ? 'LIVE' : 'SOS'}
        </button>
      </div>
    </div>
  );
}
