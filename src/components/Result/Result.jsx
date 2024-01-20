import './Result.css';
import { formatter, calculateInvestmentResults } from '../../util/investment';
import TABLE_HEADERS from './tableHeaders.js';

export default function Result({ initialInvestment, annualInvestment, expectedReturn, duration }) {
  let annualData = calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  });

  console.log(annualData);

  return (
    <div id="result">
      <table align="center">
        <thead>
          <tr>
            {TABLE_HEADERS.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {annualData.map((data) => (
            <tr>
              <td>{data.year}</td>
              <td>{formatter.format(data.annualInvestment)}</td>
              <td>{formatter.format(data.interest)}</td>
              <td>{0}</td>
              <td>{formatter.format(data.valueEndOfYear)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
