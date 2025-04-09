import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Gnb from "./components/gnb";

export default function App() {
    return (
        <>
            <Header />
            <div id="body-wrap">
                <Gnb />
                <main>
                    <Outlet />
                </main>
            </div>
        </>
    );
}
