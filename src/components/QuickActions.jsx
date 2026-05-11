import { Mic, FileUp, Sparkles, FileText, ScanLine } from 'lucide-react';

export default function QuickActions() {
  return (
    <div className="quick-actions">
      {/* Left pair */}
      <div className="qa-pair">
        <button className="qa-btn">
          <div className="icon-wrap iw-28 icon-blue">
            <Mic size={13} />
          </div>
          <div>
            <div className="qa-btn-label">Voice</div>
            <div className="qa-btn-sub">Talk to AI</div>
          </div>
        </button>
        <button className="qa-btn">
          <div className="icon-wrap iw-28 icon-purple">
            <FileUp size={13} />
          </div>
          <div>
            <div className="qa-btn-label">Upload</div>
            <div className="qa-btn-sub">AI Analysis</div>
          </div>
        </button>
      </div>

      {/* Centre AI button */}
      <button className="qa-ai-btn">
        <Sparkles size={18} />
        <span className="qa-ai-label">AI</span>
      </button>

      {/* Right pair */}
      <div className="qa-pair">
        <button className="qa-btn">
          <div className="icon-wrap iw-28 icon-green">
            <FileText size={13} />
          </div>
          <div>
            <div className="qa-btn-label">Rx Pad</div>
            <div className="qa-btn-sub">Smart eRx</div>
          </div>
        </button>
        <button className="qa-btn">
          <div className="icon-wrap iw-28 icon-teal">
            <ScanLine size={13} />
          </div>
          <div>
            <div className="qa-btn-label">Scanner</div>
            <div className="qa-btn-sub">AI OCR</div>
          </div>
        </button>
      </div>
    </div>
  );
}
