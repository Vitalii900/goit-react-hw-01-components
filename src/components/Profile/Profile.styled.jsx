import styled from '@emotion/styled';

export const Avatar = styled.img`
  height: auto;
  width: 100px;
  border-radius: 50%;
  margin-top: 20px;
  background-color: #bcbcbc;
`;

export const ProfileCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;

  width: 300px;
  height: 350px;
  border-radius: 10px;
  text-align: center;

  background-color: #fff;
`;

export const ProfileName = styled.p`
  font-weight: bold;
  font-size: 24px;
`;

export const TagAndLocation = styled.p`
  color: #bcbcbc;
`;

export const SocialActivityInfoList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding-left: 0;
  margin-bottom: 0;
  width: 100%;
  background-color: #f5f5f5;
  border-radius: 0 0 10px 10px;
`;

export const SocialActivityItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 80px;
  padding: 15px;
`;

export const Text = styled.span`
  color: #bcbcbc;
`;

export const Quantity = styled.span`
  font-weight: bold;
  font-size: 16px;
`;
