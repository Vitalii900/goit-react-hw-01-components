import styled from '@emotion/styled';

export const FriendListCss = styled.ul`
  width: 300px;
  list-style: none;
  margin: auto;
  padding-left: 0;
`;

export const FriendListItemCss = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;

  padding: 20px;
  margin-bottom: 20px;

  background-color: white;

  box-shadow: 0px 3px 1px rgb(0 0 0 / 10%), 0px 1px 2px rgb(0 0 0 / 8%),
    0px 2px 2px rgb(0 0 0 / 12%);
`;

export const Status = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 20px;
  border-radius: 50%;
  background-color: ${({ status }) => {
    if (status) {
      return 'green';
    }
    return 'red';
  }};
`;

export const Name = styled.p`
  margin-left: 20px;
  font-size: 24px;
  font-weight: bold;
`;
