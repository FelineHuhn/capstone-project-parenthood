import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: 'Amatic SC';
    src: local('Amatic SC'), url("../assets/fonts/Amatic_SC") format("truetype");
       
}

    html,
    body {
        padding: 0;
        margin: 0;
        background-color: var(--fourth-color);
        font-family: 'Amatic SC';
        z-index: 0;
        
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
  --first-font-color: #596969;
  --second-font-color: #696159;
    }
`;

export default GlobalStyles;
