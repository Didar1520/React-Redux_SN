import { UserType } from '../types/types';
import { createAction, createSlice } from '@reduxjs/toolkit';
import { usersApi } from '../api/Users-api';


type photosType = {
    small: string
    large: string
}

type initialStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

const initialState: initialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
}



const usersSlice = createSlice({
    name: 'users-toolkit',
    initialState,
    reducers: {
        follow(state, action) {
            state.users.map(u => {
                if (u.id === action.payload) {
                    return u.followed = true
                }
            })
        },

        unFollow(state, action) {
            state.users.map(u => {
                if (u.id === action.payload) {
                    return u.followed = false
                }
            })
        },
        setUsers(state, action) {
            state.users = action.payload

        },
        setCurrentPage(state, action) {

            state.currentPage = action.payload

        },

        setTotalCount(state, action) {

            state.totalUsersCount = action.payload
        },
        toggleIsFetching(state, action) {

            state.isFetching = action.payload
        }
    }
})


export const {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalCount,
    toggleIsFetching
} = usersSlice.actions



export const getUsersThunk = (currentPage: number, pageSize: number) => {
    return (dispatch: any) => {
        dispatch(toggleIsFetching(true));
        usersApi.getUsers(currentPage, pageSize).then(data => {
            dispatch(setUsers(data.items));
            dispatch(setTotalCount(data.totalCount));
            dispatch(toggleIsFetching(false));

        })
    }
}



export default usersSlice.reducer