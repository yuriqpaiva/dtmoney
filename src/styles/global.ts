import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --red: #E52E4D;
    --blue: #5429CC;

    --blue-light: #6933FF;

    --text-title: #363F5F;
    --text-body: #969CB3;

    --background: #F0F2F5;
    --shape: #FFFFFF;  
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // Font decreases depending on screen width
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;  // If user's default font size is 16px then it will set to 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // If user's default font size is 16px then it will set to 14px
    }
  }

  body {
    background: var(--background);
    --webkit-font-smoothing: antialiased; // Making fonts look smoother
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
