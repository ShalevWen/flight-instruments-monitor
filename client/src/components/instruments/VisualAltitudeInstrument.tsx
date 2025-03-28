const MAX_ALTITUDE = 3000;

export default function VisualAltitudeInstrument({ value = 0 }: { value: number }) {
  const dialHeight = value / 30;
  return (
    <div className="altitude-gauge-container">
      <div className="altitude-gauge">
        3000
        <div className="altitude-gauge-tick">2000</div>
        <div className="altitude-gauge-tick">1000</div>0
      </div>
      <div className="altitude-gauge-dial" style={{
  bottom: `${dialHeight}%`}}>{value}</div>
    </div>
  );
}
