import { Mic, FileUp, Sparkles, FileText, ScanLine } from 'lucide-react';

const LEFT  = [
  { icon: Mic,      label: 'Voice',   color: 'icon-blue'   },
  { icon: FileUp,   label: 'Upload',  color: 'icon-purple' },
];
const RIGHT = [
  { icon: FileText, label: 'Rx Pad',  color: 'icon-green'  },
  { icon: ScanLine, label: 'Scanner', color: 'icon-teal'   },
];

export default function QuickActions() {
  return (
    <div className="quick-actions">
      {LEFT.map(({ icon: Icon, label, color }) => (
        <button key={label} className="qa-item">
          <div className={`icon-wrap iw-28 ${color}`}><Icon size={13} /></div>
          <span className="qa-item-label">{label}</span>
        </button>
      ))}

      <button className="qa-ai-btn">
        <Sparkles size={19} />
        <span className="qa-ai-label">AI</span>
      </button>

      {RIGHT.map(({ icon: Icon, label, color }) => (
        <button key={label} className="qa-item">
          <div className={`icon-wrap iw-28 ${color}`}><Icon size={13} /></div>
          <span className="qa-item-label">{label}</span>
        </button>
      ))}
    </div>
  );
}
