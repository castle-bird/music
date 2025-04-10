import { Outlet } from "react-router-dom";
import TopMenu from "../components/layour/topMenu";

export default function PageRoot() {
    return (
        <>
            <main>
                
                <Outlet />
            </main>
        </>
    );
}
