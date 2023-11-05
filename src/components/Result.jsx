import { formatter } from "../util/investment";
export default function Result({ yearlyResult, initialInvestment }) {
  const totalInterest =
    yearlyResult.valueEndOfYear -
    yearlyResult.annualInvestment * yearlyResult.year -
    initialInvestment;
  const totalAmountInvested = yearlyResult.valueEndOfYear - totalInterest;
  return (
    <tr>
      <td>{yearlyResult.year}</td>
      <td>{formatter.format(yearlyResult.valueEndOfYear)}</td>
      <td>{formatter.format(yearlyResult.interest)}</td>
      <td>{formatter.format(totalInterest)}</td>
      <td>{formatter.format(totalAmountInvested)}</td>
    </tr>
  );
}
