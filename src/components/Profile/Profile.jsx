import PropTypes from 'prop-types';
import {
  Avatar,
  ProfileCard,
  ProfileName,
  TagAndLocation,
  SocialActivityInfoList,
  SocialActivityItem,
  Text,
  Quantity,
} from './Profile.styled';

export function Profile({ username, tag, location, avatar, stats }) {
  return (
    <ProfileCard>
      <div>
        <Avatar src={avatar} alt={username} />
        <ProfileName>{username}</ProfileName>
        <TagAndLocation>@{tag}</TagAndLocation>
        <TagAndLocation>{location}</TagAndLocation>
      </div>

      <SocialActivityInfoList>
        <SocialActivityItem>
          <Text>Followers</Text>
          <Quantity>{stats.followers}</Quantity>
        </SocialActivityItem>
        <SocialActivityItem>
          <Text>Views</Text>
          <Quantity>{stats.views}</Quantity>
        </SocialActivityItem>
        <SocialActivityItem>
          <Text>Likes</Text>
          <Quantity>{stats.likes}</Quantity>
        </SocialActivityItem>
      </SocialActivityInfoList>
    </ProfileCard>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};