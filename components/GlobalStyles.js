import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: "ComingSoon";
    src: url("/fonts/ComingSoon-Regular.ttf");
}

@font-face {
    font-family: "Poppins-Light";
    src: url("/fonts/Poppins-Light.ttf");
}

    html,
    body {
        padding: 0;
        margin: 0;
        background-color: var(--fourth-color);
        z-index: 0;
        
    }

    * {
        box-sizing: border-box;
        font-family: "Poppins-Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "ComingSoon";
    }
    

    :root {
  --primary-color: #4d5b5b;
  --secondary-color: #2f3737;
  --third-color: #fb752d;
  --fourth-color: #eeedec;
  --white-color: #ffffff;
  --black-color: #000000;
  --first-font-color: #596969;
  --second-font-color: #696159;
    }
`;

export default GlobalStyles;
