import styled from 'react-emotion';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  padding: 1rem;
  background-color: hsl(220, 20%, 92%);
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  & > * + * {
    margin-left: 1rem;
  }
`;
