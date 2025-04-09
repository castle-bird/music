import ThemeBtnContainer from "./themeBtn.styled";

import { useDispatch } from "react-redux";
import { themeAction } from "../../../store/theme/themeSlice";

export default function ThemeBtn() {
    const dispatch = useDispatch();

    const handleThemeChange = (e) => {
        const newTheme = e.target.checked ? "dark" : "light";

        dispatch(themeAction.toggleTheme(newTheme));
    };

    return (
        <ThemeBtnContainer>
            <input 
                type="checkbox" 
                className="theme-checkbox" 
                onChange={handleThemeChange} 
            />
        </ThemeBtnContainer>
    );
}
