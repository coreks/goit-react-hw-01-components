import PropTypes from 'prop-types';
import { TransactionItem } from 'components/TransactionHistory/TransactionItem';
import css from 'components/TransactionHistory/TransactionHistory.module.css';

export const TransactionList = ({ transactions }) => {
  return (
    <table className={css.transaction_history}>
      <thead className={css.table_head}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={css.table_body}>
        {transactions.map(({ id, type, amount, currency }) => (
          <TransactionItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </table>
  );
};

TransactionList.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
