import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphonesSimple } from "@fortawesome/free-solid-svg-icons";

import LogoContainer from "./logo.styled";

export default function Logo() {
    return (
        <LogoContainer>
            <Link to="/" aria-label="홈 바로가기">
                <FontAwesomeIcon icon={faHeadphonesSimple} style={{ color: "#1ed760" }} />
            </Link>
        </LogoContainer>
    );
}
