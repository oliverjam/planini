import React, { Component } from 'react';
import Login from './login';

class Auth extends Component {
  state = {
    token: '',
  };

  componentDidMount() {
    try {
      const token = window.localStorage.getItem('planini-token');
      this.setState({ token });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    if (this.state.token) return this.props.children;
    return <Login />;
  }
}

export default Auth;
