import { useState, useEffect } from 'react';
import Loader           from './components/Loader';
import DoctorProfile    from './components/DoctorProfile';
import SearchBar        from './components/SearchBar';
import StatsRow         from './components/StatsRow';
import Globe            from './components/Globe';
import Greeting         from './components/Greeting';
import Alerts           from './components/Alerts';
import ModuleGrid       from './components/ModuleGrid';
import Telemedicine     from './components/Telemedicine';
import HospitalDashboard from './components/HospitalDashboard';
import ICU              from './components/ICU';
import DiagnosisEngine  from './components/DiagnosisEngine';
import Insights         from './components/Insights';
import EmergencySection from './components/EmergencySection';
import ResearchHub      from './components/ResearchHub';
import Prescription     from './components/Prescription';
import QuickActions     from './components/QuickActions';
import BottomNav        from './components/BottomNav';

function App() {
  const [isEmergency, setIsEmergency] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.classList.toggle('emergency-mode', isEmergency);
  }, [isEmergency]);

  return (
    <>
      {loading && <Loader onDone={() => setLoading(false)} />}
    <div className="app">

      {/* ── Doctor profile header (sticky) ──────── */}
      <DoctorProfile isEmergency={isEmergency} setIsEmergency={setIsEmergency} />

      {/* ── AI search bar ────────────────────────── */}
      <SearchBar />

      {/* ── Stats row (horizontal scroll) ────────── */}
      <StatsRow />

      {/* ── Animated globe ───────────────────────── */}
      <Globe />

      {/* ── Doctor greeting ──────────────────────── */}
      <Greeting />

      {/* ── Live patient alert ───────────────────── */}
      <div className="fade-up d4">
        <Alerts isEmergency={isEmergency} />
      </div>

      {/* ── Telemedicine center ──────────────────── */}
      <div className="section fade-up d5" id="tele">
        <Telemedicine />
      </div>

      {/* ── Agent Hospital dashboard ─────────────── */}
      <div className="section fade-up d6" id="hosp">
        <HospitalDashboard />
      </div>

      {/* ── 8-module shortcut grid ───────────────── */}
      <div className="section fade-up d7">
        <ModuleGrid />
      </div>

      {/* ── ICU intelligence ─────────────────────── */}
      <div className="section fade-up d8" id="icu">
        <ICU />
      </div>

      {/* ── AI diagnosis engine ──────────────────── */}
      <div className="section fade-up d9" id="diag">
        <DiagnosisEngine />
      </div>

      {/* ── Global health map / insights ─────────── */}
      <div className="section fade-up d10" id="insights">
        <Insights />
      </div>

      {/* ── Emergency AI mode ────────────────────── */}
      <div className="section fade-up" style={{ animationDelay: '680ms' }} id="emerg">
        <EmergencySection />
      </div>

      {/* ── AI Research & Knowledge Hub ──────────── */}
      <div className="section fade-up" style={{ animationDelay: '720ms' }} id="research">
        <ResearchHub />
      </div>

      {/* ── Smart prescription ───────────────────── */}
      <div className="section fade-up" style={{ animationDelay: '760ms' }} id="rx">
        <Prescription />
      </div>

      {/* ── Fixed bottom bars ────────────────────── */}
      <QuickActions />
      <BottomNav />

    </div>
    </>
  );
}

export default App;
