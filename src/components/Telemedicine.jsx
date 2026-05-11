import { useState } from 'react';
import { Video, Mic, MicOff, Camera, MessageSquare, PhoneOff, CheckCircle, Users } from 'lucide-react';

const FEATURES = [
  'HD Video',
  'AI Transcription',
  'Live Translation',
  'AI Medical Scribe',
  'E-Prescription',
  'Follow-up Plan',
];

const QUEUE = [
  { name: 'Marcus Williams', wait: '2 min', ready: true  },
  { name: 'Priya Sharma',    wait: '8 min', ready: false },
  { name: "James O'Brien",   wait: '14 min',ready: false },
];

export default function Telemedicine() {
  const [micOn, setMicOn]   = useState(true);
  const [timer]             = useState('24:15');

  return (
    <div className="card p-18">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="icon-wrap iw-40 icon-blue"><Video size={18} /></div>
          <div>
            <h3 className="display font-semibold" style={{ fontSize: '0.9375rem' }}>Telemedicine Center</h3>
            <div className="flex items-center gap-1">
              <div className="video-live-dot" style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green)', animation: 'blink-anim 1.2s infinite' }} />
              <span className="text-xs" style={{ color: 'var(--green)' }}>Live Consultations</span>
            </div>
          </div>
        </div>
        <span className="badge badge-amber"><Users size={9} /> 4 waiting</span>
      </div>

      {/* Video mock */}
      <div className="video-mock" style={{ marginTop: 14 }}>
        <div className="video-patient-icon">
          <Users size={26} />
        </div>
        <div className="video-self">
          <Video size={18} />
        </div>
        <div className="video-timer">
          <div className="video-live-dot" />
          <span className="text-xs font-semibold" style={{ color: '#fff' }}>{timer}</span>
        </div>
      </div>

      {/* Call controls */}
      <div className="call-controls">
        <button className="ctrl-btn" onClick={() => setMicOn(!micOn)}>
          {micOn ? <Mic size={15} /> : <MicOff size={15} style={{ color: 'var(--red)' }} />}
        </button>
        <button className="ctrl-btn"><Camera size={15} /></button>
        <button className="ctrl-btn"><MessageSquare size={15} /></button>
        <button className="ctrl-btn-end"><PhoneOff size={16} /></button>
      </div>

      {/* Feature list + queue side by side */}
      <div className="grid-2" style={{ marginTop: 14 }}>
        {/* Features */}
        <div className="flex flex-col gap-1">
          {FEATURES.map((f, i) => (
            <div key={i} className="tele-feature">
              <span className="tele-feature-dot" />
              <span className="text-xs">{f}</span>
            </div>
          ))}
        </div>

        {/* Queue */}
        <div className="flex flex-col gap-2">
          {QUEUE.map((p, i) => (
            <div key={i} className="patient-row" style={{ padding: '7px 10px' }}>
              <div className="grow">
                <p className="text-xs font-medium">{p.name}</p>
                <p style={{ fontSize: '0.625rem', color: 'var(--text-secondary)' }}>{p.wait} wait</p>
              </div>
              {p.ready && <CheckCircle size={11} style={{ color: 'var(--green)', flexShrink: 0 }} />}
            </div>
          ))}
        </div>
      </div>

      <button className="btn btn-primary btn-full" style={{ marginTop: 14 }}>
        <Video size={14} /> Start Consultation
      </button>
    </div>
  );
}
