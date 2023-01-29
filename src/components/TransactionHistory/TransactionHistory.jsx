import PropTypes from 'prop-types';
import { OneTransaction } from './OneTransaction';
import { Table, ThHead } from './Transaction.styled';

export function TransactionHistory({ items }) {
  return (
    <Table>
      <thead>
        <tr>
          <ThHead>Type</ThHead>
          <ThHead>Amount</ThHead>
          <ThHead>Currency</ThHead>
        </tr>
      </thead>

      <tbody>
        {items.map((item, index) => (
          <OneTransaction
            index={index}
            key={item.id}
            item={item}
          ></OneTransaction>
        ))}
      </tbody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
