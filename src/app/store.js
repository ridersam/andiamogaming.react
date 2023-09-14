import { configureStore } from '@reduxjs/toolkit';
import { gamesReducer } from '../features/games/gamesSlice';
import { productsReducer } from '../features/products/productsSlice';
import { commentsReducer } from '../features/comments/commentsSlice';
import { blogsReducer } from '../features/blogs/blogsSlice';

export const store = configureStore({
  reducer: {
    games: gamesReducer,
    products: productsReducer,
    comments: commentsReducer,
    blogs: blogsReducer
  },
});
