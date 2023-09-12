import { COMMENTS } from "../../app/shared/COMMENTS";

export const selectCommentByGameId = (gameId) => {
    return COMMENTS.filter(
        (comment) => comment.gameId === parseInt(gameId)
    );
};