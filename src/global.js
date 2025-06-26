import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Huninn&display=swap" rel="stylesheet');
      a {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    font-size: 22px;
  }

  * {

    margin: 0;
    padding: 0;
    font-family: 'Huninn', sans-serif;
    font-size: 20px
  }
`;
