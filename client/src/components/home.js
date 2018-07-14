import React, { Component } from 'react';
import styled from 'react-emotion';
import { Redirect } from '@reach/router';
import Header from './header';
import RecipeFeed from './recipe-feed';

const Page = styled.div`
  min-height: 100vh;
  padding: 2rem 1rem;
  background-color: hsl(220, 10%, 95%);
  & > * + * {
    margin-top: 1.5rem;
  }
`;

class Home extends Component {
  render() {
    const token = window.localStorage.getItem('planini-token');
    if (!token) return <Redirect to="/login" />;
    return (
      <Page>
        <Header navigate={this.props.navigate} />
        <RecipeFeed />
      </Page>
    );
  }
}

export default Home;
