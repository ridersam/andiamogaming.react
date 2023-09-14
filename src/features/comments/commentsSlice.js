import { createSlice } from "@reduxjs/toolkit";
import { COMMENTS } from "../../app/shared/COMMENTS";

const initialState = {
    commentsArray: COMMENTS
};

const commentsSlice = createSlice({
    name: 'comments',
    initialState
});

export const commentsReducer = commentsSlice.reducer;

export const selectCommentByGameId = (gameId) => (state) => {
    return state.comments.commentsArray.filter(
        (comment) => comment.gameId === parseInt(gameId)
    );
};