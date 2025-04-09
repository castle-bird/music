import { configureStore } from "@reduxjs/toolkit";

import playlistReducer from "./playlist/playlistSlice";
import commentReducer from "./comment/commentSlice";
import themeReducer from "./theme/themeSlice";

const store = configureStore({
    reducer: {
        playlist: playlistReducer,
        comment: commentReducer,
        theme: themeReducer,
    },
});

export default store;
