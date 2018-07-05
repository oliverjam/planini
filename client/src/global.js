import { injectGlobal } from 'react-emotion';

injectGlobal`
  * {
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif;
    color: hsl(220, 10%, 20%);
  }
`;
