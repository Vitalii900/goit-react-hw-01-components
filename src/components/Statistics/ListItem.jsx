import PropTypes from 'prop-types';
import { ListItemCss, Percentage } from './Statistics.styled';

export function ListItem({ stat }) {
  return (
    <ListItemCss percentage={stat.percentage}>
      <span>{stat.label}</span>
      <Percentage>{stat.percentage}%</Percentage>
    </ListItemCss>
  );
}

ListItem.propTypes = {
  stat: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  }),
};