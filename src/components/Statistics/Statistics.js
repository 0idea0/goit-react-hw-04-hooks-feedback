import PropTypes from 'prop-types';
import Notification from '../Notification';

import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const totalFeedback = total();
  const positiveValue = positivePercentage();

  return (
    <div>
      {!!totalFeedback ? (
        <ul>
          <li className={styles.item}>
            <p>
              Good: <span className={styles.value}>{good}</span>
            </p>
          </li>
          <li className={styles.item}>
            <p>
              Neutral: <span className={styles.value}>{neutral}</span>
            </p>
          </li>
          <li className={styles.item}>
            <p>
              Bad: <span className={styles.value}>{bad}</span>
            </p>
          </li>
          <li className={styles.item}>
            <p>
              Total: <span className={styles.value}>{totalFeedback}</span>
            </p>
          </li>
          <li className={styles.item}>
            <p>
              Positive feedback:{' '}
              <span className={styles.value}>{positiveValue}%</span>
            </p>
          </li>
        </ul>
      ) : (
        <Notification message={'No feedback given'} />
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;
