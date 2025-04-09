import styled from "styled-components";

const ThemeBtnContainer = styled.div`
    /* From Uiverse.io by cuzpq */
    .theme-checkbox {
        --toggle-size: 16px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        width: 4em;
        height: 2em;
        background: -webkit-gradient(
                linear,
                left top,
                right top,
                color-stop(50%, #efefef),
                color-stop(50%, #2a2a2a)
            )
            no-repeat;
        background: -o-linear-gradient(left, #efefef 50%, #2a2a2a 50%) no-repeat;
        background: linear-gradient(to right, #efefef 50%, #2a2a2a 50%) no-repeat;
        background-size: 205%;
        background-position: 0;
        -webkit-transition: 0.4s;
        -o-transition: 0.4s;
        transition: 0.4s;
        border-radius: 99em;
        position: relative;
        cursor: pointer;
        font-size: var(--toggle-size);
    }

    .theme-checkbox::before {
        content: "";
        width: 1.5em;
        height: 1.5em;
        position: absolute;
        top: 0.25em;
        left: 0.25em;
        background: -webkit-gradient(
                linear,
                left top,
                right top,
                color-stop(50%, #efefef),
                color-stop(50%, #2a2a2a)
            )
            no-repeat;
        background: -o-linear-gradient(left, #efefef 50%, #2a2a2a 50%) no-repeat;
        background: linear-gradient(to right, #efefef 50%, #2a2a2a 50%) no-repeat;
        background-size: 205%;
        background-position: 100%;
        border-radius: 50%;
        -webkit-transition: 0.4s;
        -o-transition: 0.4s;
        transition: 0.4s;
    }

    .theme-checkbox:checked::before {
        left: calc(100% - 1.5em - 0.25em);
        background-position: 0;
    }

    .theme-checkbox:checked {
        background-position: 100%;
    }
`;

export default ThemeBtnContainer;
