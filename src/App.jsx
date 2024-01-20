import Header from './components/Header/Header.jsx';
import Result from './components/Result/Result.jsx';
import { useState } from 'react';
import UserInput from './components/UserInput/UserInput.jsx';

function App() {
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [annualInvestment, setAnnualInvestment] = useState(1200);
  const [expectedReturn, setExpectedReturn] = useState(6);
  const [duration, setDuration] = useState(10);

  function setInitialInvestmentValue(e) {
    setInitialInvestment(Number(e.target.value));
  }
  function setAnnualInvestmentValue(e) {
    setAnnualInvestment(Number(e.target.value));
  }
  function setExpectedReturnValue(e) {
    setExpectedReturn(Number(e.target.value));
  }
  function setDurationValue(e) {
    setDuration(Number(e.target.value));
  }

  let data = {
    initialInvestment: initialInvestment,
    annualInvestment: annualInvestment,
    expectedReturn: expectedReturn,
    duration: duration,
  };

  return (
    <>
      <Header />
      <UserInput
        data={data}
        setInitialInvestmentValue={setInitialInvestmentValue}
        setAnnualInvestmentValue={setAnnualInvestmentValue}
        setExpectedReturnValue={setExpectedReturnValue}
        setDurationValue={setDurationValue}
      />
      <Result data={data} />
    </>
  );
}

export default App;
