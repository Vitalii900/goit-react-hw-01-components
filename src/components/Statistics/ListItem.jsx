import PropTypes from 'prop-types';

export function ListItem({ stats }) {
  return (
    <li class="item">
      <span class="label">{stats.label}</span>
      <span class="percentage">{stats.percentage}</span>
    </li>
  );
}

ListItem.propTypes = {
  stats: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  }),
};