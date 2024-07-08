import  { configureStore } from '@reduxjs/toolkit';

import userReducer from '../slice/userSlice';
import videoReducer from '../slice/videoSlice';

const store = configureStore({
    reducer:{
        user: userReducer,
        video: videoReducer
    },


    
middleware:(getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck: false,
    }),
    // devTools: process.env.NODE_ENV !== 'production', 
});

export default store;
