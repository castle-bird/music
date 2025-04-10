import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Error from "../pages/error";

import MainRoot from "../pages/main/MainRoot";
import CategoriesRoot from "../pages/viewCategories/CategoriesRoot";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <MainRoot />,
            },
            {
                path: "category/:id",
                element: <CategoriesRoot />,
            },
        ],
    },
]);

export default router;
