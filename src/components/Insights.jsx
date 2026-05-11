import { Globe2, TrendingUp, TrendingDown, ShieldCheck } from 'lucide-react';

const metrics = [
  {
    label:   'Local Viral Load',
    value:   '+14%',
    sub:     'Flu variant A rising',
    trend:   'up',
    color:   'var(--red)',
    badgeCls:'badge-red',
  },
  {
    label:   'Supply Index',
    value:   '92/100',
    sub:     'Supplies optimal',
    trend:   'stable',
    color:   'var(--green-light)',
    badgeCls:'badge-green',
  },
  {
    label:   'Regional Outbreaks',
    value:   '3',
    sub:     'Under surveillance',
    trend:   'down',
    color:   'var(--amber)',
    badgeCls:'badge-amber',
  },
  {
    label:   'WHO Alert Level',
    value:   '2 / 5',
    sub:     'Moderate vigilance',
    trend:   'stable',
    color:   'var(--blue-light)',
    badgeCls:'badge-blue',
  },
];

export default function Insights() {
  return (
    <div className="card p-18" style={{ marginBottom: 32 }}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="icon-wrap iw-40 icon-teal">
            <Globe2 size={18} />
          </div>
          <div>
            <h3 className="display font-semibold" style={{ fontSize: '0.9375rem' }}>Global Health Insights</h3>
            <p className="text-xs muted">WHO · CDC · Local feeds</p>
          </div>
        </div>
        <span className="badge badge-teal"><ShieldCheck size={9} /> Live</span>
      </div>

      {/* Metrics grid */}
      <div className="grid-2" style={{ marginTop: 16, gap: 10 }}>
        {metrics.map((m, i) => (
          <div
            key={i}
            className="stat-tile"
            style={{ gap: 6 }}
          >
            <p className="stat-label">{m.label}</p>
            <div className="flex items-center gap-2">
              <span className="stat-value" style={{ fontSize: '1.2rem', color: m.color }}>{m.value}</span>
              {m.trend === 'up'     && <TrendingUp   size={12} style={{ color: 'var(--red)',         flexShrink: 0 }} />}
              {m.trend === 'down'   && <TrendingDown  size={12} style={{ color: 'var(--green)',       flexShrink: 0 }} />}
              {m.trend === 'stable' && <TrendingUp    size={12} style={{ color: 'var(--text-muted)',  flexShrink: 0 }} />}
            </div>
            <p className="text-xs muted">{m.sub}</p>
          </div>
        ))}
      </div>

      <button className="btn btn-ghost btn-full" style={{ marginTop: 14 }}>
        View Full Report
      </button>
    </div>
  );
}
