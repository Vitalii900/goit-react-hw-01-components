import PropTypes from 'prop-types';
import { Td, Tr } from './Transaction.styled';

export function OneTransaction({ item, index }) {
  return (
    <Tr index={index}>
      <Td>{item.type}</Td>
      <Td>{item.amount}</Td>
      <Td>{item.currency}</Td>
    </Tr>
  );
}

OneTransaction.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
