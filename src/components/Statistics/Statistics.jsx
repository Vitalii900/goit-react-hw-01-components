import PropTypes from 'prop-types';
import { ListItem } from '../Statistics/ListItem';

export function Statistics({ title, stats }) {
  return (
    <section class="statistics">
      {title && <h2 class="title">{title}</h2>}
      <ul class="stat-list">
        {stats.map(stat => (
          <ListItem key={stat.id} stat={stat}></ListItem>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
