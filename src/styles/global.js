import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;

        ::-webkit-scrollbar {
            width: 7px;
        }

        ::-webkit-scrollbar-track {
            background: #404a42;
        }

        ::-webkit-scrollbar-thumb {
            background: #7d9181;
            border-radius: 999px;
        }
    }

    #root {
        width: 100%;
    }
    
    body {
        background-color: #181c19;
        min-height: 100vh;
        color: #fff;
    }

    a {
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }
`;
