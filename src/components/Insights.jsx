import { Globe2, TrendingUp, TrendingDown, ShieldCheck } from 'lucide-react';
import WorldMap from './WorldMap';

const METRICS = [
  { label: 'Local Viral Load', value: '+14%',   sub: 'Flu variant A',   color: 'var(--red)',        trend: 'up'     },
  { label: 'Supply Index',     value: '92/100', sub: 'Supplies optimal',color: 'var(--green-light)',trend: 'stable' },
  { label: 'Outbreaks',        value: '3',      sub: 'Under surveillance',color:'var(--amber)',      trend: 'down'   },
  { label: 'WHO Alert Level',  value: '2/5',    sub: 'Moderate',        color: 'var(--blue-light)', trend: 'stable' },
];

export default function Insights() {
  return (
    <div className="card p-18">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="icon-wrap iw-40 icon-teal"><Globe2 size={18} /></div>
          <div>
            <h3 className="display font-semibold" style={{ fontSize: '0.9375rem' }}>Global Health Map</h3>
            <p className="text-xs muted">Disease Outbreaks</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="badge badge-teal"><ShieldCheck size={9} /> Live</span>
          <button className="btn btn-ghost btn-sm">View all →</button>
        </div>
      </div>

      {/* World map */}
      <WorldMap />

      {/* Metrics grid */}
      <div className="grid-2" style={{ marginTop: 14, gap: 10 }}>
        {METRICS.map((m, i) => (
          <div key={i} className="stat-tile" style={{ gap: 4 }}>
            <p className="stat-label">{m.label}</p>
            <div className="flex items-center gap-2">
              <span className="stat-value" style={{ fontSize: '1.15rem', color: m.color }}>{m.value}</span>
              {m.trend === 'up'   && <TrendingUp   size={11} style={{ color: 'var(--red)',         flexShrink: 0 }} />}
              {m.trend === 'down' && <TrendingDown  size={11} style={{ color: 'var(--green)',       flexShrink: 0 }} />}
            </div>
            <p className="text-xs muted">{m.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
