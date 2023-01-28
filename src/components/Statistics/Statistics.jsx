import { ListItem } from '../Statistics/ListItem';

export function Statistics({ title, stats }) {
  return (
    <section class="statistics">
      <h2 class="title">{title}</h2>
      <ul class="stat-list">
        {stats.map(stat => (
          <ListItem key={stat.id} stats={stat}></ListItem>
        ))}
      </ul>
    </section>
  );
}
