import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* { 
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    user-select: none;
}

html,
body,
#root {
    height: 100%;
    width: 100%;
}
`;

export default GlobalStyle;
