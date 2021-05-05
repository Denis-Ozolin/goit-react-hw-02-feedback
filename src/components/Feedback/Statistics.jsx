const Statistics = ({ options }) => (
  <ul>  
    <li>good: {options.good}</li>
    <li>neutral: {options.neutral}</li>
    <li>bad: {options.bad}</li>
    <li>total: {options.total}</li>
    <li>positive feedback: {options.positivePercentage}%</li>
  </ul> 
);

export default Statistics;