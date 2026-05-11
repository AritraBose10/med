import { Siren } from 'lucide-react';

export default function EmergencyMode({ isEmergency, setIsEmergency }) {
  return (
    <button
      onClick={() => setIsEmergency(!isEmergency)}
      className={`btn btn-sm ${isEmergency ? 'btn-danger' : 'btn-ghost'}`}
    >
      <Siren size={13} />
      {isEmergency ? 'Emergency ON' : 'Emergency'}
    </button>
  );
}
