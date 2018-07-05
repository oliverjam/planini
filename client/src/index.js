import React from 'react';
import { render } from 'react-dom';
import { Provider, Client } from 'urql';
import './global';

import App from './components/app';

const client = new Client({
  url: 'http://localhost:4000',
  fetchOptions: () => {
    try {
      const token = window.localStorage.getItem('planini-token');
      console.log({ token });
      if (!token) throw new Error('no token found');
      return {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    } catch (error) {
      console.error(`Auth error: ${error}`);
    }
  },
});

render(
  <Provider client={client}>
    <App />
  </Provider>,
  document.querySelector('#🤡')
);
