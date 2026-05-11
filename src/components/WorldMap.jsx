const CONTINENTS = [
  // North America
  'M 22,18 L 58,10 L 102,18 L 126,30 L 122,53 L 104,75 L 87,77 L 62,90 L 47,83 L 26,68 L 18,47 Z',
  // South America
  'M 88,80 L 113,80 L 130,95 L 127,140 L 112,152 L 94,138 L 83,114 Z',
  // Greenland
  'M 134,10 L 155,8 L 158,23 L 143,29 L 130,22 Z',
  // Europe
  'M 164,22 L 208,16 L 224,28 L 218,48 L 193,58 L 168,54 Z',
  // Africa
  'M 168,55 L 215,50 L 228,68 L 222,115 L 197,133 L 171,118 L 160,87 Z',
  // Asia
  'M 218,18 L 324,14 L 336,32 L 318,58 L 295,82 L 267,86 L 250,72 L 228,70 L 218,52 Z',
  // Australia
  'M 290,108 L 330,102 L 336,128 L 312,136 L 288,123 Z',
  // Japan (small)
  'M 320,44 L 328,42 L 330,52 L 322,54 Z',
];

const OUTBREAKS = [
  { cx: 312, cy: 46, color: '#EF4444', r: 4, label: 'COVID-19' },
  { cx: 182, cy: 40, color: '#EF4444', r: 3 },
  { cx: 94,  cy: 56, color: '#EF4444', r: 3 },
  { cx: 290, cy: 78, color: '#F59E0B', r: 4, label: 'Dengue'   },
  { cx: 104, cy: 98, color: '#F59E0B', r: 3 },
  { cx: 186, cy: 36, color: '#7096FF', r: 3, label: 'Influenza'},
  { cx: 72,  cy: 46, color: '#7096FF', r: 2.5 },
  { cx: 200, cy: 78, color: '#F59E0B', r: 2.5 },
];

export default function WorldMap() {
  return (
    <div className="world-map-wrap">
      <svg
        viewBox="0 0 360 170"
        width="100%"
        style={{ display: 'block' }}
        aria-label="Global disease outbreak map"
      >
        {/* Ocean */}
        <rect width="360" height="170" fill="rgba(61,107,255,0.05)" />

        {/* Grid lines */}
        <g stroke="rgba(61,107,255,0.07)" strokeWidth="0.5">
          {[28, 57, 85, 113, 142].map(y => (
            <line key={y} x1="0" y1={y} x2="360" y2={y} />
          ))}
          {[72, 144, 216, 288].map(x => (
            <line key={x} x1={x} y1="0" x2={x} y2="170" />
          ))}
        </g>

        {/* Continents */}
        <g fill="rgba(61,107,255,0.18)" stroke="rgba(61,107,255,0.32)" strokeWidth="0.6">
          {CONTINENTS.map((d, i) => <path key={i} d={d} />)}
        </g>

        {/* Outbreak dots */}
        {OUTBREAKS.map((o, i) => (
          <g key={i}>
            <circle cx={o.cx} cy={o.cy} r={o.r + 3} fill={o.color} opacity="0.15" />
            <circle cx={o.cx} cy={o.cy} r={o.r} fill={o.color}>
              <animate attributeName="opacity" values="1;0.4;1" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}
      </svg>

      {/* Legend */}
      <div className="flex gap-3" style={{ padding: '10px 12px', borderTop: '1px solid var(--border)' }}>
        {[
          { color: 'var(--red)',        label: 'COVID-19',  sub: 'High Risk · 12 Countries' },
          { color: 'var(--amber)',      label: 'Dengue',    sub: 'Rising · 8 Countries'     },
          { color: 'var(--blue-light)', label: 'Influenza', sub: 'Moderate · 5 Countries'   },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-1 grow">
            <div style={{ width: 7, height: 7, borderRadius: '50%', background: item.color, flexShrink: 0 }} />
            <div>
              <div className="text-xs font-semibold display" style={{ color: item.color }}>{item.label}</div>
              <div style={{ fontSize: '0.55rem', color: 'var(--text-secondary)', lineHeight: 1.3 }}>{item.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
