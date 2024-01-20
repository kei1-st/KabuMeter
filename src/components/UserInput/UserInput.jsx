import './UserInput.css';

export default function UserInput({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
  setInitialInvestmentValue,
  setAnnualInvestmentValue,
  setExpectedReturnValue,
  setDurationValue,
}) {
  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label>INITIAL INVESTMENT</label>
          <input type="number" value={initialInvestment} onChange={setInitialInvestmentValue} />
        </div>
        <div>
          <label>ANNUAL INVESTMENT</label>
          <input type="number" value={annualInvestment} onChange={setAnnualInvestmentValue} />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label>EXPECTED RETURN</label>
          <input type="number" value={expectedReturn} onChange={setExpectedReturnValue} />
        </div>
        <div>
          <label>DURATION</label>
          <input type="number" value={duration} onChange={setDurationValue} />
        </div>
      </div>
    </div>
  );
}
