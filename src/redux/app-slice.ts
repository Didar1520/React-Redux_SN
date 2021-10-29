import { createAction, createSlice } from "@reduxjs/toolkit";
import { getAuthUserData } from "./auth-slice";
import { AppDispatch, ThunkType } from "./redux-toolkit";


type initialState = {
    initialized: boolean,
    text: any
}

const initialState: initialState = {
    initialized: false,
    text: ['a']
}



const appSlice = createSlice({
    name: 'toolkit',
    initialState,
    reducers: {
        initialized_success(state) {
            state.initialized = true
        },
        simpleLog(state, action) {
            state.text.push(action.payload)
            // console.log(appSlice)
        }
    }
})




export const initializeApp = (): ThunkType => async (dispatch: AppDispatch) => {
    let promise = await dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
            dispatch(initialized_success());
        });
}



export default appSlice.reducer
export const { initialized_success, simpleLog } = appSlice.actions