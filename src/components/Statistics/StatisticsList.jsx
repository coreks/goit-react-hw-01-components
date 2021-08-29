import { Statistics } from 'components/Statistics/Statistics.jsx';
import css from 'components/Statistics/Statistics.module.css';
import PropTypes from 'prop-types';

export const StatisticsList = ({ stats }) => {
  return (
    <ul className={css.stat_list}>
      {stats.map(({ id, label, percentage }) => (
        <Statistics key={id} label={label} percentage={percentage} />
      ))}
    </ul>
  );
};

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
