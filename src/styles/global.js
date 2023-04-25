import { createGlobalStyle } from 'styled-components';
 
const Global = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Poppins', Sans-Serif;
        background: #f2f2f2;
    }

    @media screen and (max-width: 768px){
        section, aside{
            width: 100%;
            padding: 0;
        }
    }
`;
 
export default Global;