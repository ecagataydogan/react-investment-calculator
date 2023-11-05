import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment.js";
import Header from "./components/Header.jsx";
import Results from "./components/Results.jsx";
import UserInputs from "./components/UserInputs.jsx";

function App() {
  const [userInputs, setUserInputs] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });
  const handleChange = (event, title) => {
    setUserInputs((prevInputs) => {
      const updatedInputs = { ...prevInputs };
      updatedInputs[title] = parseInt(event.target.value);
      return updatedInputs;
    });
  };

  let results = [];
  if (
    userInputs.annualInvestment &&
    userInputs.initialInvestment &&
    userInputs.duration &&
    userInputs.expectedReturn
  ) {
    results = calculateInvestmentResults(userInputs);
  }
  console.log(results);

  return (
    <>
      <Header />
      <UserInputs handleChange={handleChange}></UserInputs>
      {results.length !== 0 && (
        <Results
          initialInvestment={userInputs.initialInvestment}
          results={results}
        ></Results>
      )}
    </>
  );
}

export default App;
