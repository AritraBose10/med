import { useState, useEffect } from 'react';
import { Calendar, Bell, BrainCircuit, Globe2 } from 'lucide-react';

const STATS = [
  { icon: Calendar,    label: "Today's Appts",  value: '24', sub: 'View all →',     color: 'icon-blue'   },
  { icon: Bell,        label: 'Critical Alerts', value: '3',  sub: 'View all →',     color: 'icon-red'    },
  { icon: BrainCircuit,label: 'AI Insights',     value: '7',  sub: 'New insights →', color: 'icon-purple' },
  { icon: Globe2,      label: 'Global Patients', value: '12', sub: 'Countries',      color: 'icon-teal'   },
];

export default function StatsRow() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(t);
  }, []);

  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const dateStr = now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });

  return (
    <div className="stats-scroll fade-up d2">
      {STATS.map((s, i) => (
        <div key={i} className="stat-card">
          <div className="flex items-center justify-between" style={{ marginBottom: 6 }}>
            <span className="stat-card-label">{s.label}</span>
            <div className={`icon-wrap iw-28 ${s.color}`}>
              <s.icon size={12} />
            </div>
          </div>
          <div className="stat-card-value">{s.value}</div>
          <div className="stat-card-sub">{s.sub}</div>
        </div>
      ))}

      {/* Live clock tile */}
      <div className="stat-card stat-card-time">
        <div className="stat-card-time-val">{timeStr}</div>
        <div className="stat-card-sub" style={{ marginTop: 5 }}>{dateStr}</div>
        <div className="text-xs dimmed" style={{ marginTop: 3 }}>🌤 New York, USA</div>
      </div>
    </div>
  );
}
