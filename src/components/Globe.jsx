const LATS = [-60, -40, -20, 0, 20, 40, 60];
const LNGS = [15, 30, 45, 60, 75, 105, 120, 135, 150, 165];
const R = 80;
const CX = 90, CY = 90;

function latEllipse(lat) {
  const rad = lat * Math.PI / 180;
  const dy = R * Math.sin(rad);
  const rx = R * Math.cos(rad);
  return { cx: CX, cy: CY + dy, rx, ry: rx * 0.28 };
}

function lngEllipse(lng) {
  const rad = lng * Math.PI / 180;
  const rx = R * Math.abs(Math.cos(rad));
  return { cx: CX, cy: CY, rx, ry: R };
}

export default function Globe() {
  return (
    <div className="globe-section fade-up d1">
      <div className="globe-core">
        {/* Rotating orbit rings */}
        <div className="globe-orbit globe-orbit-1" />
        <div className="globe-orbit globe-orbit-2" />

        {/* SVG Globe */}
        <svg
          viewBox="0 0 180 180"
          width="186"
          height="186"
          style={{ position: 'relative', zIndex: 2, display: 'block' }}
        >
          <defs>
            <radialGradient id="sphereFill" cx="38%" cy="32%" r="65%">
              <stop offset="0%"   stopColor="#162545" />
              <stop offset="55%"  stopColor="#0C1A34" />
              <stop offset="100%" stopColor="#050D1C" />
            </radialGradient>
            <radialGradient id="sphereShine" cx="34%" cy="28%" r="48%">
              <stop offset="0%"   stopColor="rgba(255,255,255,0.07)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
            <radialGradient id="sphereRim" cx="65%" cy="68%" r="45%">
              <stop offset="0%"   stopColor="rgba(61,107,255,0.06)" />
              <stop offset="100%" stopColor="rgba(61,107,255,0)" />
            </radialGradient>
            <clipPath id="globeClip">
              <circle cx={CX} cy={CY} r={R} />
            </clipPath>
          </defs>

          {/* Sphere base */}
          <circle cx={CX} cy={CY} r={R} fill="url(#sphereFill)" />

          {/* Grid lines */}
          <g clipPath="url(#globeClip)" stroke="rgba(100,150,255,0.55)" fill="none" strokeWidth="0.6" opacity="0.22">
            {LATS.map((lat, i) => {
              const { cx, cy, rx, ry } = latEllipse(lat);
              if (rx < 1) return null;
              return <ellipse key={`lat-${i}`} cx={cx} cy={cy} rx={rx} ry={ry} />;
            })}
            {LNGS.map((lng, i) => {
              const { cx, cy, rx, ry } = lngEllipse(lng);
              if (rx < 1) return null;
              return <ellipse key={`lng-${i}`} cx={cx} cy={cy} rx={rx} ry={ry} />;
            })}
            <line x1={CX} y1={CY - R} x2={CX} y2={CY + R} />
          </g>

          {/* Lighting overlays */}
          <circle cx={CX} cy={CY} r={R} fill="url(#sphereShine)" />
          <circle cx={CX} cy={CY} r={R} fill="url(#sphereRim)" />

          {/* Hotspot — Asia/Pacific (critical) */}
          <circle cx="132" cy="68" r="6" fill="rgba(239,68,68,0.15)" />
          <circle cx="132" cy="68" r="3" fill="#EF4444">
            <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0.45;1" dur="2s" repeatCount="indefinite" />
          </circle>

          {/* Hotspot — Europe (active) */}
          <circle cx="84" cy="55" r="5" fill="rgba(61,107,255,0.15)" />
          <circle cx="84" cy="55" r="2.5" fill="#7096FF">
            <animate attributeName="opacity" values="1;0.35;1" dur="2.6s" repeatCount="indefinite" begin="0.6s" />
          </circle>

          {/* Hotspot — Americas (stable) */}
          <circle cx="46" cy="90" r="4" fill="rgba(16,185,129,0.15)" />
          <circle cx="46" cy="90" r="2" fill="#34D399">
            <animate attributeName="opacity" values="1;0.3;1" dur="3.2s" repeatCount="indefinite" begin="1.3s" />
          </circle>

          {/* Outer border */}
          <circle cx={CX} cy={CY} r={R} fill="none" stroke="rgba(61,107,255,0.22)" strokeWidth="1" />
        </svg>

        {/* Status chips */}
        <div className="globe-chip globe-chip-l">
          <div className="text-xs font-semibold col-green display">Global: Stable</div>
          <div className="text-xs dimmed">14 nations</div>
        </div>
        <div className="globe-chip globe-chip-r">
          <div className="text-xs font-semibold col-amber display">Local: 98%</div>
          <div className="text-xs dimmed">capacity</div>
        </div>
      </div>
    </div>
  );
}
