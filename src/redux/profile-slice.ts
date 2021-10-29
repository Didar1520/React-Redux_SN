import { profileType } from '../types/types';
import { createSlice } from "@reduxjs/toolkit";
import { ThunkType, AppDispatch, AppStateType } from './redux-toolkit';
import { profileApi } from '../api/Profile-api';
import { resultCodeEnum } from '../api/api';

export type postsType ={
    id: number
    message: string
    likesCount: number
}


const profileSlice = createSlice({
    name: 'profilePage',
    initialState: {
        posts: [
            { id: 1, message: 'Assalamu Aleiukm', likesCount: 1520 },
            { id: 2, message: 'Its my pervi post Oraza', likesCount: 151 },
            { id: 3, message: 'ara ara', likesCount: 25 },
            { id: 4, message: 'oraoraoraoraoraoraoraoraoara', likesCount: 18 }
        ] as Array<postsType>,
        newPostText: 'URUSEEE'as string,
        profile: null as profileType | null,
        status: ' ',
    } ,
    reducers: {
        addPost(state){
            console.log(state);
            
       
         },
       
        updateNewPostText(state, action){
             state.newPostText = action.payload

         },
        
        setUserProfile(state, action){
             state.profile =  action.payload
         },

        setStatus(state, action){
            state.status = action.payload
        },
        savePhotoSuccess(state, action){
            return { ...state, profile: { ...state.profile, photos: action.payload} as profileType }
        }
        }
      

    })

export const { addPost, updateNewPostText, setUserProfile,
    setStatus, savePhotoSuccess } = profileSlice.actions


export const getUserProfile = (userId: number): ThunkType => async (dispatch:AppDispatch) => {
    const data = await profileApi.getProfile(userId);
    dispatch(setUserProfile(data));
}

export const getStatus = (userId: number):ThunkType => async (dispatch:AppDispatch) => {
    let data = await profileApi.getStatus(userId);
    dispatch(setStatus(data));

}


export const updateStatus = (status: string):ThunkType => async (dispatch: AppDispatch) => {
    try {
        let data = await profileApi.updateStatus(status);

        if (data.resultCode === resultCodeEnum.Succes) {
            dispatch(setStatus(status));
        }
    } catch (error) {
        //
    }
}

export const savePhoto = (file: File): ThunkType => async (dispatch: AppDispatch) => {
    let data = await profileApi.savePhoto(file);

    if (data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data.photos));
    }
}

export const saveProfile = (profile: profileType): ThunkType => async (dispatch: AppDispatch, getState:any) => {
    const userId = getState().auth.userId;
    const data = await profileApi.saveProfile(profile);

    if (data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        console.log('ара тут ощибка шо дэлать')
    }
}

export default profileSlice.reducer
