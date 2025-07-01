import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Huninn&display=swap" rel="stylesheet');
      a {
    text-decoration: none;
    color: inherit;
    background-color: #ffd426;

  }

  a:hover {
    font-size: 22px;
    background-color:rgb(224, 180, 1);
  }

  * {

    margin: 0;
    padding: 0;
    font-family: 'Huninn', sans-serif;
    font-size: 20px
  }
`;
