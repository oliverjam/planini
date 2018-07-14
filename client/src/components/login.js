import React, { Component } from 'react';
// import { Connect, mutation } from 'urql';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const signupMutation = gql`
  mutation signup($email: String!, $password: String!) {
    signup(email: $email, password: $password) {
      token
      user {
        id
        email
      }
    }
  }
`;

class Login extends Component {
  state = {
    email: '',
    password: '',
    passwordVisible: false,
  };

  handleChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  handleSubmit = signup => async e => {
    console.log('submitted');
    e.preventDefault();
    const { email, password } = this.state;
    const res = await signup({ email, password });
    console.log(res);
  };

  auth = ({ signup: { token } }) => {
    window.localStorage.setItem('planini-token', token);
    this.props.navigate('/');
  };

  render() {
    const { passwordVisible, email, password } = this.state;
    return (
      <Mutation mutation={signupMutation} onCompleted={this.auth}>
        {(signup, { loading, error, data }) => {
          console.log({ loading, error, data });
          if (error) {
            console.error('error', error);
            return null;
          }
          if (data) {
            console.log('loaded', data);
            return null;
          }
          return (
            <form
              onSubmit={e => {
                e.preventDefault();
                signup({ variables: { email, password } });
              }}
            >
              <div>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label htmlFor="password">password</label>
                <input
                  id="password"
                  name="password"
                  value={password}
                  type={passwordVisible ? 'text' : 'password'}
                  onChange={this.handleChange}
                />
                <button
                  type="button"
                  onClick={() =>
                    this.setState(({ passwordVisible }) => ({
                      passwordVisible: !passwordVisible,
                    }))
                  }
                >
                  <span role="img" aria-label="Show password">
                    👀
                  </span>
                </button>
              </div>
              <button type="submit">Sign up</button>
            </form>
          );
        }}
      </Mutation>
    );
  }
}

export default Login;
