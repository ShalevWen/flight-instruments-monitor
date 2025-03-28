export default function VisualHisInstrument({ value = 0 }: { value: number }) {
  return (
    <div className="his-gauge-container">
      <div className="his-gauge">
        <br />
      </div>
      <div className="his-gauge-arrow">
        <div className="his-gauge-arrow-tip">&#9650;</div>
      </div>
      <div className="his-gauge-numbers-container">
        <table style={{ transform: `rotate(${-value}deg)` }}>
          <tr>
            <td />
            <td className="his-gauge-number-0">0</td>
            <td />
          </tr>
          <tr>
            <td className="his-gauge-number-270">270</td>
            <td />
            <td className="his-gauge-number-90">90</td>
          </tr>
          <tr>
            <td />
            <td className="his-gauge-number-180">180</td>
            <td />
          </tr>
        </table>
      </div>
    </div>
  );
}
