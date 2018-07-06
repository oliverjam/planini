import React, { Component, Fragment } from 'react';
import Header from './header';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <main>Some stuff</main>
      </Fragment>
    );
  }
}

export default Home;
