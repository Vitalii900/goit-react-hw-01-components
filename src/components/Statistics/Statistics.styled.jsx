import styled from '@emotion/styled';

export const Section = styled.section`
  width: 400px;
  margin: auto;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  text-align: center;
  background-color: #fff;
  padding: 20px;
  color: #999999;
  margin-bottom: 0;
`;

export const StatList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  width: 100%;
  padding-left: 0;
  margin-top: 0;
`;

export const ListItemCss = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(100% / 5);
  text-align: center;
  padding: 10px;
  background-color: ${({ percentage }) => {
    if (percentage <= 5) {
      return '#f44336';
    } else if (percentage > 5 && percentage <= 20) {
      return '#ffd966';
    } else if (percentage > 20 && percentage <= 30) {
      return '#6fa8dc';
    } else {
      return '#8fce00';
    }
  }};
`;

export const Percentage = styled.span`
  font-size: 24px;
  margin-top: 5px;
  color: #4c1130;
`;
