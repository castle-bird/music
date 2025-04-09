import { NavLink, Outlet } from "react-router-dom";

export default function Root() {
    return (
        <>
            <ul>
                <li><NavLink to='/'>홈</NavLink></li>
                <li><NavLink to='/recent-playlist'>최근 재생 목록</NavLink></li>
                <li><NavLink to='/comment'>댓글</NavLink></li>
            </ul>
            <Outlet />
        </>
    );
}
