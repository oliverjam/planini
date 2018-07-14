import React from 'react';
// import { Connect, query } from 'urql';
// import { Query } from 'react-apollo';
import styled from 'react-emotion';
import gql from 'graphql-tag';
// import { Container, NavList } from './styled/nav';

const userQuery = gql`
  {
    me {
      email
    }
  }
`;

// const Header = ({ token, navigate }) => (
//   <Container>
//     <strong>Planini</strong>
//     <nav>
//       <NavList>
//         <Query query={userQuery}>
//           {({ loading, data, error, client }) => {
//             if (error) return <p>Whoops... {error.message}</p>;
//             if (!loading && data)
//               return (
//                 <React.Fragment>
//                   <li>{data.me.email.split('@')[0]}</li>
//                   <button
//                     onClick={() => {
//                       window.localStorage.removeItem('planini-token');
//                       navigate('/');
//                       client.resetStore();
//                     }}
//                   >
//                     Sign out
//                   </button>
//                 </React.Fragment>
//               );
//             return null;
//           }}
//         </Query>
//       </NavList>
//     </nav>
//   </Container>
// );

const SearchWrapper = styled.div`
  margin: 0 1rem;
  display: grid;
  grid-template-columns: 2.5rem 1fr;
  grid-template-rows: 1fr;
`;

const Input = styled.input`
  grid-column: 1 / -1;
  grid-row: 1;
  width: 100%;
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  border-radius: 1rem;
  background-color: white;
`;

const Icon = () => (
  <svg
    viewBox="0 0 32 32"
    width="24"
    height="24"
    fill="none"
    stroke="currentcolor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    css={`
      grid-column: 1;
      grid-row: 1;
      justify-self: center;
      align-self: center;
    `}
  >
    <circle cx="14" cy="14" r="12" />
    <path d="M23 23 L30 30" />
  </svg>
);

const Header = () => (
  <form>
    <SearchWrapper>
      <Input placeholder="Search for recipes" />
      <Icon />
    </SearchWrapper>
  </form>
);

export default Header;
