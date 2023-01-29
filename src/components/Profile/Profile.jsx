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
      <div class="description">
        <Avatar src={avatar} alt={username} />
        <ProfileName>{username}</ProfileName>
        <TagAndLocation>@{tag}</TagAndLocation>
        <TagAndLocation>{location}</TagAndLocation>
      </div>

      <SocialActivityInfoList class="stats">
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
