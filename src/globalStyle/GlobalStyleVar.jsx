import { css } from "styled-components";

// break point (반응형)
const breakpoints = {
    desktopSmall: "1440px",
    tablet: "1024px",
    mobile: "768px",
    mobileSmall: "560px",
};

const mediaQuery = {
    desktopSmall: (styles) => css`
        @media screen and (max-width: ${breakpoints.desktopSmall}) {
            ${styles}
        }
    `,
    tablet: (styles) => css`
        @media screen and (max-width: ${breakpoints.tablet}) {
            ${styles}
        }
    `,
    mobile: (styles) => css`
        @media screen and (max-width: ${breakpoints.mobile}) {
            ${styles}
        }
    `,
    mobileSmall: (styles) => css`
        @media screen and (max-width: ${breakpoints.mobileSmall}) {
            ${styles}
        }
    `,
};

// color 색상
const colors = {
    primary: "#A57454",
    default: "#1a1a1a",
    white: "#fff",
    
};

const properties = {
    breakpoints,
    mediaQuery,
    colors,
};

export default properties;