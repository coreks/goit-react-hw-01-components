import { Statistics } from 'components/Statistics/Statistics.jsx';
import css from 'components/Statistics/Statistics.module.css';
import PropTypes from 'prop-types';

export const StatisticsList = ({ title = 'Upload stats', stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>

      <ul className={css.stat_list}>
        {stats.map(({ id, label, percentage }) => (
          <Statistics key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
};

StatisticsList.propTypes = {
  title: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
