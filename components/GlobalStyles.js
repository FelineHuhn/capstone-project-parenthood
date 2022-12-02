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
    
        
    }

    * {
        box-sizing: border-box;
        font-family: "Poppins-Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "ComingSoon";
    }
    

    :root {
  --primary-color: #4d5b5b;
  --secondary-color: #2f3737;
  --third-color: #fa6819;
  --fourth-color: #eeedec;
  --white-color: #ffffff;
  --black-color: #000000;
  --first-font-color: #596969;
  --second-font-color: #696159;
  --button-color: #e6e6e6;
  --primary-dropshadow: drop-shadow(1px 1px 1px rgb(0 0 0 / 0.2));
  --secondary-dropshadow: drop-shadow(1px 1px 1px rgb(0 0 0 / 0.4));
  --third-dropshadow: drop-shadow(1px 1px 1px rgb(0 0 0 / 0.1));
  --fourth-dropshadow: drop-shadow(0.5px 0.5px 0.5px rgb(0 0 0 / 0.2));
  --primary-boxshadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
    }
`;

export default GlobalStyles;
