import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;    
    --red: #e52e4d;
    --green: #33cc95;
    --grey: #808080;
    --grey-light: #ADA9A9;
    --text-title: #363F5F;
    --text-body: #969cb3;
    --shape: #FFFFFF;
  }
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    @media (min-width: 1080px) {
      font-size: 93.75%;
    }

    @media (min-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }
`;
