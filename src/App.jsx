import React, { useState } from 'react';
import {
  Activity, Video, Building2, HeartPulse, BrainCircuit,
  Pill, Globe2, Siren, TriangleAlert
} from 'lucide-react';
import Globe from './components/Globe';
import Greeting from './components/Greeting';
import Alerts from './components/Alerts';
import EmergencyMode from './components/EmergencyMode';
import Telemedicine from './components/Telemedicine';
import HospitalDashboard from './components/HospitalDashboard';
import ICU from './components/ICU';
import DiagnosisEngine from './components/DiagnosisEngine';
import Prescription from './components/Prescription';
import Insights from './components/Insights';
import BottomNav from './components/BottomNav';

const FEATURES = [
  { id: 'tele',    icon: Video,          label: 'Telemedicine',   sub: '4 waiting',      color: 'icon-blue'   },
  { id: 'hosp',    icon: Building2,      label: 'Hospital',       sub: '82% occupancy',  color: 'icon-purple' },
  { id: 'icu',     icon: HeartPulse,     label: 'ICU Intel',      sub: '2 critical',     color: 'icon-red'    },
  { id: 'diag',    icon: BrainCircuit,   label: 'AI Diagnosis',   sub: 'Engine ready',   color: 'icon-blue'   },
  { id: 'rx',      icon: Pill,           label: 'Prescription',   sub: '3 pending',      color: 'icon-green'  },
  { id: 'emerg',   icon: Siren,          label: 'Emergency AI',   sub: 'Standby',        color: 'icon-amber'  },
  { id: 'insights',icon: Globe2,         label: 'Global Insights',sub: '14 nations',     color: 'icon-teal'   },
  { id: 'alerts',  icon: TriangleAlert,  label: 'Patient Alerts', sub: '2 active',       color: 'icon-amber'  },
];

function FeatureBtn({ icon: Icon, label, sub, color, onClick }) {
  return (
    <button className="feature-btn" onClick={onClick}>
      <div className={`icon-wrap iw-36 ${color}`}>
        <Icon size={17} />
      </div>
      <div>
        <div className="fb-name">{label}</div>
        <div className="fb-sub">{sub}</div>
      </div>
    </button>
  );
}

function App() {
  const [isEmergency, setIsEmergency] = useState(false);

  React.useEffect(() => {
    document.body.classList.toggle('emergency-mode', isEmergency);
  }, [isEmergency]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="app">
      {/* ── Header ─────────────────────────────── */}
      <header className="site-header fade-up d0">
        <div className="logo">
          <div className="logo-icon">
            <Activity size={16} />
          </div>
          <span className="logo-name">Nova AI</span>
          <span className="badge badge-green"><span className="badge-dot"></span>Online</span>
        </div>
        <EmergencyMode isEmergency={isEmergency} setIsEmergency={setIsEmergency} />
      </header>

      {/* ── Globe hero ─────────────────────────── */}
      <Globe />

      {/* ── Doctor greeting ────────────────────── */}
      <Greeting />

      {/* ── Stats row ──────────────────────────── */}
      <div className="stat-row fade-up d3" style={{ marginTop: 16 }}>
        <div className="stat-tile">
          <div className="stat-label">Active Patients</div>
          <div className="stat-value col-blue">12</div>
        </div>
        <div className="stat-tile">
          <div className="stat-label">In Queue</div>
          <div className="stat-value">4</div>
        </div>
        <div className="stat-tile">
          <div className="stat-label">AI Accuracy</div>
          <div className="stat-value col-green">98%</div>
        </div>
      </div>

      {/* ── Live alert ─────────────────────────── */}
      <div className="fade-up d4">
        <Alerts isEmergency={isEmergency} />
      </div>

      {/* ── Quick Access grid ──────────────────── */}
      <div className="section fade-up d5">
        <div className="section-label">Quick Access</div>
        <div className="feature-grid">
          {FEATURES.map((f) => (
            <FeatureBtn
              key={f.id}
              icon={f.icon}
              label={f.label}
              sub={f.sub}
              color={f.color}
              onClick={() => scrollTo(f.id)}
            />
          ))}
        </div>
      </div>

      {/* ── Detailed sections ──────────────────── */}
      <div className="section fade-up d6" id="tele">
        <Telemedicine />
      </div>

      <div className="section fade-up d7" id="hosp">
        <HospitalDashboard />
      </div>

      <div className="section fade-up d8" id="icu">
        <ICU />
      </div>

      <div className="section fade-up d9" id="diag">
        <DiagnosisEngine />
      </div>

      <div className="section fade-up d10" id="rx">
        <Prescription />
      </div>

      <div id="emerg" style={{ scrollMarginTop: 80 }}>
        {/* Emergency AI section — accessible via header button & quick access */}
      </div>

      <div className="section" id="insights">
        <Insights />
      </div>

      <BottomNav />
    </div>
  );
}

export default App;
