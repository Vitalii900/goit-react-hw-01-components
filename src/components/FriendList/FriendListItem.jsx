import PropTypes from 'prop-types';
import { Status, FriendListItemCss, Name } from './FriendList.styled';

export function FriendListItem({friend}) {
  return (
    <FriendListItemCss>
      <Status status={friend.isOnline}></Status>
      <img class="avatar" src={friend.avatar} alt={friend.name} width="64" />
      <Name>{friend.name}</Name>
    </FriendListItemCss>
  );
}

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,
  }),
};
