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
        display: flex;
        flex-direction: column;
        height: 100vh;
        background-color: ${({ theme }) =>
            theme === "light" ? "#ffffff" : "#1a1a1a"};

    color: ${({ theme }) => (theme === "light" ? "#333" : "#fff")};;

        #body-wrap {
            display: flex;
            flex: 1;

            gap: 20px;
            padding: 10px 20px 20px;

            main {
                flex: 1;
                border-radius: 20px;
                box-shadow: ${({ theme }) =>
                    theme === "light"
                        ? "0 0 15px rgba(0 0 0 / 15%) "
                        : "0 0 15px rgba(255 255 255 / 15%)"};
                
            }
        }
    }

`;

export default GlobalStyle;
