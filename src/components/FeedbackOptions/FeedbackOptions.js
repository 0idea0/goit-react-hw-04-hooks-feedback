import PropTypes from 'prop-types';

import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onIncrement }) => (
  <ul className={styles.list}>
    {options.map(option => (
      <button
        className={styles.button}
        name={option}
        key={option}
        onClick={() => onIncrement(option)}
      >
        {option.replace(option[0], option[0].toUpperCase())}
      </button>
    ))}
  </ul>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onIncrement: PropTypes.func.isRequired,
};

export default FeedbackOptions;
