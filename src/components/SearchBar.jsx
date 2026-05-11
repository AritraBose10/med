import { Search, Mic, Sparkles } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="search-row fade-up d1">
      <div className="search-field">
        <Search size={14} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
        <input
          type="text"
          placeholder="Ask MediGenie AI…"
          className="search-input"
        />
        <button className="search-mic">
          <Mic size={14} />
        </button>
      </div>
      <button className="ai-assist-btn">
        <Sparkles size={13} />
        AI
      </button>
    </div>
  );
}
