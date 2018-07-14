import React, { Component } from 'react';
import { ThemeProvider } from 'emotion-theming';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Router, Redirect } from '@reach/router';
import theme from './styled/theme';
import Login from './login';
import Home from './home';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  request: operation => {
    const token = window.localStorage.getItem('planini-token');
    const headers = {
      Authorization: token ? `Bearer ${token}` : '',
      'Content-Type': 'application/json',
    };
    operation.setContext({ headers });
  },
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <Router>
            <Login path="/login" />
            <Home path="/" />
          </Router>
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}

export default App;
