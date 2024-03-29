import './Result.css';
import { formatter, calculateInvestmentResults } from '../../util/investment';
import TABLE_HEADERS from './tableHeaders.js';

export default function Result({ data }) {
  let annualData = calculateInvestmentResults(data);

  let totalInterest = 0;
  let capital = data.initialInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          {TABLE_HEADERS.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {annualData.map((data) => {
          totalInterest += data.interest;
          capital += data.annualInvestment;
          return (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{formatter.format(data.valueEndOfYear)}</td>
              <td>{formatter.format(data.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(capital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
