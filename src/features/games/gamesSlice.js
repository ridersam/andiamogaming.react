import { createSlice } from "@reduxjs/toolkit";
import {GAMES} from "../../app/shared/GAMES"

const initialState = {
    gamesArray: GAMES
};

const gamesSlice = createSlice({
    name: 'games',
    initialState
});

export const gamesReducer = gamesSlice.reducer;

export const selectAllGames = (state) => {
    return state.games.gamesArray;
};

export const selectGameById = (id) => (state) => {
    return state.games.gamesArray.find(
        (game) => game.id === parseInt(id)
    );
};

export const selectFeaturedGame = (state) => {
    return state.games.gamesArray.find((games) => games.featured);
};