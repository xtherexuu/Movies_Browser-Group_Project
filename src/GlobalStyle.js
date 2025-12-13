import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        overflow-x: hidden;
    }

    *, ::after, ::before {
        box-sizing: inherit;
        margin: 0;
        padding: 0;

    }

    body {
         color: ${({ theme }) => theme.color.black};
         background: ${({ theme }) => theme.color.whisper};
         font-family: 'Poppins', sans-serif;
    }
`;