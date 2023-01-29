import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { FriendListCss } from './FriendList.styled';

export function FriendList({ friends }) {
  return (
    <FriendListCss>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend}></FriendListItem>
      ))}
    </FriendListCss>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
