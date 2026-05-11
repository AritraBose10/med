import { useState, useEffect } from 'react';

function getGreeting(h) {
  if (h < 12) return 'Good morning';
  if (h < 17) return 'Good afternoon';
  return 'Good evening';
}

export default function Greeting() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(t);
  }, []);

  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const dateStr = now.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });

  return (
    <div className="fade-up d2" style={{ textAlign: 'center', marginTop: -4, paddingBottom: 4 }}>
      <p className="text-xs dimmed display" style={{ letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 600 }}>
        {dateStr} &middot; {timeStr}
      </p>
      <h1 className="display font-bold" style={{ fontSize: '1.5rem', marginTop: 6, letterSpacing: '-0.02em' }}>
        {getGreeting(now.getHours())}, Dr. Sarah
      </h1>
      <p className="text-sm muted" style={{ marginTop: 5 }}>
        System optimal &mdash;&nbsp;
        <span className="col-green font-medium">12 active patients</span>
      </p>
    </div>
  );
}
