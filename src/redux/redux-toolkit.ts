import authReducer from "./auth-slice";
import usersSlice from "./users-slice";
import appSlice from "./app-slice";
import {configureStore } from "@reduxjs/toolkit";
import dialogsSlice from "./dialogs-slice";
import profileSlice from "./profile-slice";
import  { ThunkAction } from "redux-thunk";



const store = configureStore({
    reducer: {
        profilePage: profileSlice,
        dialogsPage: dialogsSlice,
        usersPage: usersSlice,
        auth: authReducer,
        app: appSlice
    }
})

export type AppStateType = ReturnType<typeof store.getState>


// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, any >


export default store