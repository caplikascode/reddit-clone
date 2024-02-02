import { configureStore } from '@reduxjs/toolkit'
import subRedditsReducer from '../Components/Slices/subRedditsSlice/subRedditsSlice';
import activeRedditPostsReducer from '../Components/Slices/postsSlice/postsSlice';



export const store = configureStore({
  reducer: {
    allSubReddits: subRedditsReducer,
    activeRedditPosts: activeRedditPostsReducer
  },
});


