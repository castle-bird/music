import HeaderContainer from "./header.styled";

import Logo from "./logo";
import Search from "./search";
import ThemeBtn from "./themeBtn";

export default function Header() {
    return (
        <HeaderContainer>
            <div className="header-wrap">
                <Logo />
                <Search />
                <ThemeBtn />
            </div>
        </HeaderContainer>
    );
}
