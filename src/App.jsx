import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Playlist from "./components/playlist";

export default function App() {
    return (
        <>
            <Header />
            <div id="body-wrap">
                <Playlist />
                <main>
                    <Outlet />
                </main>
            </div>
        </>
    );
}
