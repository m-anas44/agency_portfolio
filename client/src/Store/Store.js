import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './postsSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Persist configuration for redux-persist
const persistConfig = {
  key: 'root',
  storage,
};

// Persisted reducer for the posts slice
const persistedPostsReducer = persistReducer(persistConfig, postsReducer);

const store = configureStore({
  reducer: {
    posts: persistedPostsReducer, // Persisted reducer for posts
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['REGISTER'], // Ignore serialization check for specific actions if needed
        ignoredPaths: ['posts.register'], // Ignore specific paths in the state if necessary
      },
    }),
});

export const persistor = persistStore(store);
export default store;
