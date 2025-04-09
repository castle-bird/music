import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
    name: "댓글 목록들",
    initialState: 0,
    reducers: {
        replaceReviews(state, action) {},
    },
});

export const commentAction = commentSlice.actions;

export default commentSlice.reducer;
