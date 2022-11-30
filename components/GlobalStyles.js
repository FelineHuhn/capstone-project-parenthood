import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        background-color: var(--fourth-color);
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        }

    * {
        box-sizing: border-box;
    }
    

    :root {
  --primary-color: #4d5b5b;
  --secondary-color: #2f3737;
  --third-color: #fb752d;
  --fourth-color: #eeedec;
  --white-color: #ffffff;
  --black-color: #000000;
    }
`;

export default GlobalStyles;
