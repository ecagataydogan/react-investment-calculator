import Result from "./Result";
export default function Results({ results, initialInvestment }) {
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment value</th>
          <th>Interest</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((yearlyResult, i) => {
          return (
            <Result
              key={i}
              initialInvestment={initialInvestment}
              yearlyResult={yearlyResult}
            ></Result>
          );
        })}
      </tbody>
    </table>
  );
}
