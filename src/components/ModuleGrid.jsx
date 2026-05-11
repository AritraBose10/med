import { Users, BrainCircuit, ScanLine, FlaskConical, FileText, ShoppingBag, Shield, LayoutGrid } from 'lucide-react';

const MODULES = [
  { icon: Users,        label: 'Patients',    sub: 'Smart EHR',        color: 'icon-blue'   },
  { icon: BrainCircuit, label: 'AI Diag',     sub: 'Decision AI',      color: 'icon-purple' },
  { icon: ScanLine,     label: 'Radiology',   sub: 'AI Imaging',       color: 'icon-teal'   },
  { icon: FlaskConical, label: 'Lab Reports', sub: 'AI Insights',      color: 'icon-green'  },
  { icon: FileText,     label: 'Rx',          sub: 'AI Powered',       color: 'icon-blue'   },
  { icon: ShoppingBag,  label: 'Pharmacy',    sub: 'Drug Safety',      color: 'icon-amber'  },
  { icon: Shield,       label: 'Insurance',   sub: 'Claims AI',        color: 'icon-green'  },
  { icon: LayoutGrid,   label: 'More',        sub: 'All Modules',      color: 'icon-purple' },
];

export default function ModuleGrid() {
  return (
    <div>
      <div className="section-label">Modules</div>
      <div className="module-grid">
        {MODULES.map((m, i) => (
          <button key={i} className="module-item fade-up" style={{ animationDelay: `${i * 40}ms` }}>
            <div className={`icon-wrap iw-32 ${m.color}`}>
              <m.icon size={14} />
            </div>
            <span className="mi-label">{m.label}</span>
            <span className="mi-sub">{m.sub}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
