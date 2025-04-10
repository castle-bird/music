import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import properties from "./GlobalStyleVar";

const GlobalStyle = createGlobalStyle`
    ${reset}

    html,
    body {
        position: relative;

        font-weight: 400;
        font-family: "Roboto", "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", sans-serif;
        line-height: 1.3
    }

    * {
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    img {
        max-width: 100%;
        max-height: 100%;
    }


    caption,
    legend {
        font-size: 0;
        line-height: 0;
        text-indent: -999px;
    }

    input,
    button {
        font-family: "Roboto", "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", sans-serif;
        line-height: 1.3
    }

    

    #root {
        
    }

`;

export default GlobalStyle;
