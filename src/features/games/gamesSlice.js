import {GAMES} from "../../app/shared/GAMES"

export const selectAllGames = () => {
    return GAMES;
};

export const selectGameById = (id) => {
    return GAMES.find((game) => game.id === parseInt(id));
};

export const selectFeaturedGame = () => {
    return GAMES.find((game) => game.featured);
};