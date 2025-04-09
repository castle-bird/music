import { createSlice } from "@reduxjs/toolkit";

const playlistSlice = createSlice({
    name: "플레이 리스트 목록들들",
    initialState: 0,
    reducers: {
        replaceReviews(state, action) {},
    },
});

export const playlistAction = playlistSlice.actions;

export default playlistSlice.reducer;
