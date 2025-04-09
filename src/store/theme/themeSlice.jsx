import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "테마 색상",
    initialState: "light",
    reducers: {
        toggleTheme(state, action) {
            return state = action.payload;
        },
    },
});

export const themeAction = themeSlice.actions;

export default themeSlice.reducer;
