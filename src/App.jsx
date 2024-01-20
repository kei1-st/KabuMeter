import Header from './components/Header/Header.jsx';
import InputScreen from './components/UserInput/UserInput.jsx';
import Result from './components/Result/Result.jsx';
import { useState } from 'react';

function App() {
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [annualInvestment, setAnnualInvestment] = useState(1200);
  const [expectedReturn, setExpectedReturn] = useState(6);
  const [duration, setDuration] = useState(10);

  function setInitialInvestmentValue(e) {
    setInitialInvestment(e.target.value);
  }
  function setAnnualInvestmentValue(e) {
    setAnnualInvestment(e.target.value);
  }
  function setExpectedReturnValue(e) {
    setExpectedReturn(e.target.value);
  }
  function setDurationValue(e) {
    setDuration(e.target.value);
  }

  return (
    <>
      <Header />
      <InputScreen
        initialInvestment={initialInvestment}
        annualInvestment={annualInvestment}
        expectedReturn={expectedReturn}
        duration={duration}
        setInitialInvestmentValue={setInitialInvestmentValue}
        setAnnualInvestmentValue={setAnnualInvestmentValue}
        setExpectedReturnValue={setExpectedReturnValue}
        setDurationValue={setDurationValue}
      />
      <Result
        initialInvestment={initialInvestment}
        annualInvestment={annualInvestment}
        expectedReturn={expectedReturn}
        duration={duration}
      />
    </>
  );
}

export default App;
