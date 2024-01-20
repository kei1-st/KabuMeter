import './UserInput.css';
import { useState } from 'react';

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
      <div class="input-group">
        <div>
          <label>INITIAL INVESTMENT</label>
          <input type="number" val={initialInvestment} onChange={setInitialInvestmentValue} />
          {console.log(initialInvestment)}
        </div>
        <div>
          <label>ANNUAL INVESTMENT</label>
          <input type="number" val={annualInvestment} onChange={setAnnualInvestmentValue} />
          {console.log(annualInvestment)}
        </div>
      </div>
      <div class="input-group">
        <div>
          <label>EXPECTED RETURN</label>
          <input type="number" val={expectedReturn} onChange={setExpectedReturnValue} />
          {console.log(expectedReturn)}
        </div>
        <div>
          <label>DURATION</label>
          <input type="number" cal={duration} onChange={setDurationValue} />
          {console.log(duration)}
        </div>
      </div>
    </div>
  );
}
