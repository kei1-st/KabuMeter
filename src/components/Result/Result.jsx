import './Result.css';
import { formatter, calculateInvestmentResults } from '../../util/investment';
import TABLE_HEADERS from './tableHeaders.js';

export default function Result({ initialInvestment, annualInvestment, expectedReturn, duration }) {
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
          <tr>
            <td>{formatter.format(initialInvestment)}</td>
            <td>{formatter.format(annualInvestment)}</td>
            <td>{formatter.format(expectedReturn)}</td>
            <td>{duration}</td>
            <td>5</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
