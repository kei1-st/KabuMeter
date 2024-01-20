import Header from './components/Header/Header.jsx';
import Result from './components/Result/Result.jsx';
import { useState } from 'react';
import UserInput from './components/UserInput/UserInput.jsx';

function App() {
  const [data, updateValue] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(key, value) {
    updateValue((prevMap) => {
      return {
        ...prevMap,
        [key]: Number(value), // ...prevMap の key の値だけ value で更新
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput data={data} onChange={handleChange} />
      <Result data={data} />
    </>
  );
}

export default App;
