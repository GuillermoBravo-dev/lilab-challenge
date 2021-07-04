import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    h1 {
        font-size: 4em;
        text-align: center;
    }
    html {
        font-size: 10px !important;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    body {
        font-size: 10px !important;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
        padding: 0;
        background-color: #1565c0;
    }
    ol, ul {
        list-style: none;
    }
`;

export default GlobalStyle;