import React, { Component } from 'react';

class App extends Component {
  state = {
    email: '',
    password: '',
    passwordVisible: false,
    token: '',
  };

  handleChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  render() {
    const { passwordVisible, token, email, password } = this.state;
    return (
      <form
        onSubmit={async e => {
          e.preventDefault();
          const { email, password } = this.state;
          const res = await fetch('http://localhost:4000', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              variables: {
                email,
                password,
              },
              query: `mutation($email: String!, $password: String!) {
                signup(email: $email, password: $password) {
                  token
                }
              }`,
            }),
            // body: JSON.stringify({
            //   query:
            //     'mutation {\n  signup(email: "a@a.com", password: "h") {\n    token\n  }\n}\n',
            // }),
          });
          const json = await res.json();
          console.log(json);
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
        {token && <span>token</span>}
      </form>
    );
  }
}

export default App;
