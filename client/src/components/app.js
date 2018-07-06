import React, { Component } from 'react';
import { Provider, Client } from 'urql';
import { Router } from '@reach/router';
import Login from './login';
import Home from './home';

const client = new Client({
  url: 'http://localhost:4000',
  fetchOptions: () => {
    try {
      const token = window.localStorage.getItem('planini-token');
      return {
        headers: {
          Authorization: token ? `Bearer ${token}` : '',
          'Content-Type': 'application/json',
        },
      };
    } catch (error) {
      console.error(`Auth error: ${error}`);
    }
  },
});

class App extends Component {
  state = {
    token: '',
  };

  componentDidMount() {
    const token = window.localStorage.getItem('planini-token');
    this.setState({ token });
  }

  setToken = token => this.setState({ token });

  render() {
    const { token } = this.state;
    return (
      <Provider client={client}>
        <Router>
          {!token ? (
            <Login path="/" setToken={this.setToken} />
          ) : (
            <Home path="/" />
          )}
        </Router>
      </Provider>
    );
  }
}

export default App;
