import { Outlet } from "react-router-dom";
import Header from "./components/layout/header";
import MusicPlayer from "./components/layout/musicPlayer";
import TopMenu from "./components/layout/topMenu";

export default function App() {
    return (
        <>
            <Header />
            <main>
                <TopMenu />
                <Outlet />
            </main>

            <MusicPlayer />
        </>
    );
}
