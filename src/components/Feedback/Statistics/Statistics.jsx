import PropTypes from 'prop-types';
import styles from './Statistics.module.css'

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className={styles.statList}>  
    <li className={styles.statItem}>good: {good}</li>
    <li className={styles.statItem}>neutral: {neutral}</li>
    <li className={styles.statItem}>bad: {bad}</li>
    <li className={styles.statItem}>total: {total}</li>
    <li className={styles.statItem}>positive feedback: {positivePercentage}%</li>
  </ul> 
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired

}

export default Statistics;