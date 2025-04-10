import { useSelector } from "react-redux";
import PlaylistContainer from "./playlist.styled";

export default function Playlist() {
    const theme = useSelector((state) => state.theme);
    
    return (
        <PlaylistContainer theme={theme}>
            <h2>플레이 리스트</h2>
        </PlaylistContainer>
    );
}
