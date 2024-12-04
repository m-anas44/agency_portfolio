import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allPosts: [], // Store only the necessary data, no functions
  registerKey: null, // You can store necessary data like registerKey but not functions
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.allPosts = action.payload;
    },
    // Example action to set the register key (not a function)
    setRegisterKey: (state, action) => {
      state.registerKey = action.payload;
    },
  },
});

export const { setPosts, setRegisterKey } = postsSlice.actions;
export default postsSlice.reducer;
