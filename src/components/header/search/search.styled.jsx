import styled from "styled-components";

const SearchContainer = styled.div`
    position: relative;

    input {
        height: 100%;
        border-radius: 20px;
        padding: 10px 40px 10px 20px;
        border: 1px solid #cccccc;
    }

    button {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;

        display: flex;
        align-items: center;

        width: 40px;
        padding: 0;

        background-color: transparent;
        border: none;
    }
`;

export default SearchContainer