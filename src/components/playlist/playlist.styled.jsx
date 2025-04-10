import styled from "styled-components";

const PlaylistContainer = styled.nav`
    min-width: 400px;
    border-radius: 20px;
    box-shadow: ${({ theme }) =>
        theme === "light"
            ? "0 0 15px rgba(0 0 0 / 15%) "
            : "0 0 15px rgba(255 255 255 / 15%)"};
`;

export default PlaylistContainer;
