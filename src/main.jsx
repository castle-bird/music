import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import store from "./store";
import router from "./router";
import GlobalStyle from "./globalStyle/GlobalStyle";
import App from "./App";


createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <GlobalStyle />
        
        <RouterProvider router={router}>
            <App />
        </RouterProvider>
    </Provider>
);
