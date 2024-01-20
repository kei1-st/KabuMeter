import './UserInput.css';

export default function UserInput({
  data,
  setInitialInvestmentValue,
  setAnnualInvestmentValue,
  setExpectedReturnValue,
  setDurationValue,
}) {
  const { initialInvestment, annualInvestment, expectedReturn, duration } = data;

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input
            type="number"
            required
            value={initialInvestment}
            onChange={setInitialInvestmentValue}
          />
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input
            type="number"
            required
            value={annualInvestment}
            onChange={setAnnualInvestmentValue}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>EXPECTED RETURN</label>
          <input type="number" required value={expectedReturn} onChange={setExpectedReturnValue} />
        </p>
        <p>
          <label>DURATION</label>
          <input type="number" required value={duration} onChange={setDurationValue} />
        </p>
      </div>
    </section>
  );
}
