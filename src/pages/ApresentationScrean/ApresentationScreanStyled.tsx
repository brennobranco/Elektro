import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 330px;
    }

    h1 {
        font-family: "Russo One", serif;
        font-size: 56px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: #2A2A2A;
        text-align: center;
    }
  }
`;