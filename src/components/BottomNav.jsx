import { useState } from 'react';
import { Home, Users, LayoutDashboard, Bell, UserCircle } from 'lucide-react';

const TABS = [
  { id: 'home',      icon: Home,            label: 'Home'      },
  { id: 'patients',  icon: Users,           label: 'Patients'  },
  { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { id: 'alerts',    icon: Bell,            label: 'Alerts'    },
  { id: 'profile',   icon: UserCircle,      label: 'Profile'   },
];

export default function BottomNav() {
  const [active, setActive] = useState('home');

  return (
    <nav className="bottom-nav">
      {TABS.map(({ id, icon: Icon, label }) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            className={`bnav-item ${isActive ? 'bnav-active' : ''}`}
            onClick={() => setActive(id)}
          >
            {isActive && <span className="bnav-indicator" />}
            <Icon size={20} strokeWidth={isActive ? 2.2 : 1.8} />
            <span className="bnav-label">{label}</span>
          </button>
        );
      })}
    </nav>
  );
}
