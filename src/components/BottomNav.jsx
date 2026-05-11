import { useState } from 'react';
import { Home, Video, Building2, Users, BookOpen, UserCircle } from 'lucide-react';

const TABS = [
  { id: 'home',    icon: Home,        label: 'Home'       },
  { id: 'tele',    icon: Video,       label: 'Telemedicine'},
  { id: 'hosp',    icon: Building2,   label: 'Hospital'   },
  { id: 'patients',icon: Users,       label: 'Patients'   },
  { id: 'research',icon: BookOpen,    label: 'Research'   },
  { id: 'profile', icon: UserCircle,  label: 'Profile'    },
];

export default function BottomNav() {
  const [active, setActive] = useState('home');

  const handleTab = (id) => {
    setActive(id);
    if (id !== 'home') {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="bottom-nav">
      {TABS.map(({ id, icon: Icon, label }) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            className={`bnav-item ${isActive ? 'bnav-active' : ''}`}
            onClick={() => handleTab(id)}
          >
            {isActive && <span className="bnav-indicator" />}
            <Icon size={19} strokeWidth={isActive ? 2.2 : 1.8} />
            <span className="bnav-label">{label}</span>
          </button>
        );
      })}
    </nav>
  );
}
