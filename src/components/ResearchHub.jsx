import { BookOpen, ClipboardList, FlaskConical, CalendarDays, ChevronRight } from 'lucide-react';

const ITEMS = [
  { icon: BookOpen,      label: 'Journals',       sub: 'AI Summaries', color: 'icon-green'  },
  { icon: ClipboardList, label: 'Guidelines',      sub: 'WHO / CDC',    color: 'icon-blue'   },
  { icon: FlaskConical,  label: 'Clinical Trials', sub: 'Global',       color: 'icon-purple' },
  { icon: CalendarDays,  label: 'Conferences',     sub: 'Updates',      color: 'icon-teal'   },
];

export default function ResearchHub() {
  return (
    <div className="card p-18">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="display font-semibold" style={{ fontSize: '0.9375rem' }}>AI Research Hub</h3>
          <p className="text-xs muted">Stay Updated</p>
        </div>
        <span className="badge badge-blue">New</span>
      </div>

      {/* Grid */}
      <div className="research-grid">
        {ITEMS.map((item, i) => (
          <button key={i} className="research-item">
            <div className={`icon-wrap iw-36 ${item.color}`}>
              <item.icon size={16} />
            </div>
            <span className="ri-label">{item.label}</span>
            <span className="ri-sub">{item.sub}</span>
          </button>
        ))}
      </div>

      <button className="btn btn-ghost btn-full btn-sm" style={{ marginTop: 12 }}>
        Browse All Resources <ChevronRight size={12} />
      </button>
    </div>
  );
}
