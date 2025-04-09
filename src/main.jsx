import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";

import store from "./store";
import router from "./router";
import GlobalStyle from "./globalStyle/GlobalStyle";
import App from "./App";

const Root = () => {
    const theme = useSelector((state) => state.theme);

    return (
        <>
            <GlobalStyle theme={theme} />
            <RouterProvider router={router}>
                <App />
            </RouterProvider>
        </>
    );
};

createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <Root />
    </Provider>
);
