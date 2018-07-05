import React from 'react';
import styled from 'react-emotion';
import { Connect, query } from 'urql';

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  padding: 1rem;
  background-color: hsl(220, 20%, 92%);
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  & > * + * {
    margin-left: 1rem;
  }
`;

const userQuery = `
{
  me {
    email
  }
}
`;

const Header = ({ token }) => (
  <Connect query={query(userQuery)}>
    {({ loaded, fetching, data, error }) => {
      console.log({ error });
      if (error) return <p>Whoops... {error}</p>;
      return (
        <Container>
          <strong>Planini</strong>
          <nav>
            <NavList>
              {loaded && <li>{data.me}</li>}
              <li>Sign out</li>
            </NavList>
          </nav>
        </Container>
      );
    }}
  </Connect>
);

export default Header;
