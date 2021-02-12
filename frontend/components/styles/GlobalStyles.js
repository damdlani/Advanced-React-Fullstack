import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2')
    format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  html {
    --red: #FF0000;
    --black: #393939;
    --grey: #3A3A3A;
    --gray: var(--grey);
    --lightGrey: #E1E1E1;
    --lightGray: var(--lightGrey);
    --offWhite: #EDEDED;
    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09); //box-shadow
    font-size: 62.5%;
    box-sizing: border-box;

  };

  *, *::after, *::before {
    box-sizing: inherit;
  };

  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;

    font-family: 'radnika_next', --apple-system, 
    BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', 
    sans-serif;
  }

  a {
    text-decoration: none;
    color: var(--black);
  }
  a:hover {
    text-decoration: underline;
  }
  button {
    font-family: 'radnika_next', --apple-system, 
    BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', 
    sans-serif;
  }



`;
