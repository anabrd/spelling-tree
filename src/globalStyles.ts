import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 20px;
        background: #F4D2C9;
        height: calc(100vh-40px);
        font-family: 'Montserrat', 'Helvetica', Sans-Serif;
    }
`;

export default GlobalStyle;