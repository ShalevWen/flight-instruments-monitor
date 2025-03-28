// using trigonometry to translate from the center
function getTranslation(angle: number): string {
  return `translateY(${-Math.cos((angle * Math.PI) / 180) * 42}%) translateX(${
    -Math.sin((angle * Math.PI) / 180) * 42
  }%)`;
}

export default function VisualHisInstrument({ value = 0 }: { value: number }) {
  function AngleIndicator({ angle }: { angle: number }) {
    return (
      <div className="his-gauge-number" style={{ transform: getTranslation(value - angle) }}>
        {angle}
      </div>
    );
  }

  return (
    <div className="his-gauge-container">
      <div className="his-gauge">
        <br />
      </div>
      <div className="his-gauge-arrow">
        <div className="his-gauge-arrow-tip">&#9650;</div>
      </div>
      <AngleIndicator angle={0} />
      <AngleIndicator angle={90} />
      <AngleIndicator angle={180} />
      <AngleIndicator angle={270} />
    </div>
  );
}
