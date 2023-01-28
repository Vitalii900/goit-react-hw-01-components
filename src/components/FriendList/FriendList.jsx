import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';

export function FriendList({ friends }) {
  return (
    <ul class="friend-list">
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend}></FriendListItem>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
