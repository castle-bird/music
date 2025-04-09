import { createBrowserRouter } from "react-router-dom";

import App from "../App";

import MainRoot from "../pages/main/root";
import Home from "../pages/main/home";
import Comment from "../pages/main/comment";
import RecentPlaylist from "../pages/main/recentPlaylist";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <MainRoot />,
                children: [
                    {
                        index: true,
                        element: <Home />,
                    },
                    {
                        path: "comment",
                        element: <Comment />,
                    },
                    {
                        path: "recent-playlist",
                        element: <RecentPlaylist />,
                    },
                ],
            },
        ],
    },
]);

export default router;
