import { AppDispatch, ThunkType } from './redux-toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { authApi } from '../api/Auth-api';
import { resultCodeEnum } from '../api/api';



let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    // captchaUrl: null as string | null
}

export type initialStateType = typeof initialState

const authSlice = createSlice({
    name: 'auth-slice',
    initialState,
    reducers: {
        setAuthUserData(state, action) {
            Object.assign(state, action.payload)
        }
    }

})
export const {setAuthUserData} = authSlice.actions






export const getAuthUserData = (): ThunkType => async (dispatch: AppDispatch) => {
    const meData = await authApi.me()
    if (meData.resultCode === resultCodeEnum.Succes) {
        let { id, login, email } = meData.data;
        let userId = id
        dispatch(setAuthUserData({ userId, email, login, isAuth:true}));
    }
}



export const loginThunk = (email: string, password: string, rememberMe: boolean): ThunkType => async (dispatch: AppDispatch) => {
    const data = await authApi.login(email, password, rememberMe)
    if (data.resultCode === resultCodeEnum.Succes) {
        dispatch(getAuthUserData())
    }
}




export const logout = () => async (dispatch: AppDispatch) => {
    let response = await authApi.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData({ userId: null, email: null, login: null, isAuth:false }))
    }
}
export default authSlice.reducer
