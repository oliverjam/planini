import React, { Component } from 'react';
import { Router, Link } from '@reach/router';
import Header from './header';
import Login from './login';

class App extends Component {
  state = {
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjamo4cHg5NXBhenpiMGI4MjZtOXp0b2FnIiwiaWF0IjoxNTMwODA1MjUzfQ.E91-T_WxE1a1288YOZmsM1G-YFQcAFmo2KkEciSiAr8',
  };

  setToken = token => this.setState({ token });

  render() {
    const { token, loggedIn } = this.state;
    return (
      <React.Fragment>
        <Login />
        {/* <Header /> */}
        <main />
      </React.Fragment>
    );
  }
}

export default App;
