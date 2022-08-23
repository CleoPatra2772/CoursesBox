import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from './services/userSlice';

export const rootReducer = {
    user: userSlice.reducer,
};

export const storeCreator = (reducer = rootReducer) => 
configureStore({
    reducer,
});

export const store = configureStore({
    reducer: rootReducer,
})

//Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType <typeof store.getState>;

//Infer type: {Posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;