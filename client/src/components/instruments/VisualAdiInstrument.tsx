export default function VisualAdiInstrument({ value = 0 }: { value: number }) {
  // use the ADI value as padding to move the horizon accordingly
  const groundHeight = (value + 100) / 2
  return (
    <div className="adi-gauge-container">
      <div className="adi-gauge">
        <div className="adi-gauge-sky" style={{paddingTop: `${groundHeight}%`}}/>
      </div>
    </div>
  );
}