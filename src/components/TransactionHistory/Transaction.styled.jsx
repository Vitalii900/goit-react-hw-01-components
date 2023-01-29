import styled from '@emotion/styled';

export const Table = styled.table`
  margin: auto;
  width: 600px;
  box-shadow: 0px 3px 1px rgb(0 0 0 / 10%), 0px 1px 2px rgb(0 0 0 / 8%);
`;

export const ThHead = styled.th`
  padding: 15px;
  text-transform: uppercase;
  width: calc(100% / 3);
  color: white;

  font-size: 12px;

  background-color: #4598e4;
`;

export const Td = styled.td`
  padding: 15px;
  width: calc(100% / 3);
  text-align: center;
`;

export const Tr = styled.tr`
  background-color: ${({ index }) => {
    if (index % 2 === 0) {
      return 'white';
    }
  }};
`;
