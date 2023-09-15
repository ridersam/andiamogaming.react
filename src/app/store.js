import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { gamesReducer } from '../features/games/gamesSlice';
import { productsReducer } from '../features/products/productsSlice';
import { commentsReducer } from '../features/comments/commentsSlice';
import { blogsReducer } from '../features/blogs/blogsSlice';
import { userReducer } from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    games: gamesReducer,
    products: productsReducer,
    comments: commentsReducer,
    blogs: blogsReducer,
    user: userReducer
  },
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
