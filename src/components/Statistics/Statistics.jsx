import PropTypes from 'prop-types';
import { ListItem } from '../Statistics/ListItem';
import { Title, StatList, Section } from './Statistics.styled';

export function Statistics({ title, stats }) {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(stat => (
          <ListItem key={stat.id} stat={stat}></ListItem>
        ))}
      </StatList>
    </Section>
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
