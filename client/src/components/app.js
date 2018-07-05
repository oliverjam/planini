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
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjamo1ZWt1MWo3bzdwMGI2NHh5M282Z3ZuIiwiaWF0IjoxNTMwNjA0Nzk5fQ.54P_ST5SBQMYhXeY3kpeP0B5xvwPRcP1bs0dDTkIwZE',
            },
            body: JSON.stringify({
              query: `{
                me {
                  id
                  email
                }
              }`,
            }),
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
