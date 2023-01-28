import PropTypes from 'prop-types';

export function ListItem({ stat }) {
  return (
    <li class="item">
      <span class="label">{stat.label}</span>
      <span class="percentage">{stat.percentage}</span>
    </li>
  );
}

ListItem.propTypes = {
  stat: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  }),
};