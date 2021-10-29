import { UserType } from '../../types/types';
import { AppStateType } from '../../redux/redux-toolkit';
import React from 'react';
import { connect } from "react-redux";
import axios from "axios";
import usersReducer, { follow, setCurrentPage, setUsers, unFollow, setTotalCount, toggleIsFetching, getUsersThunk } from "../../redux/users-slice";
import Users from "./users";
import { compose } from 'redux';
import Preloader from '../common/preloader/preloader';


    
   

type StatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching:boolean
}





type DispatchPropsType ={
    onPageChanged?: (page: number) => void
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setCurrentPage: (page:number)=> void
    getUsersThunk: (currentPage: number, pageSize: number) => void
    // toggleIsFetching
    // setUsers


}

type PropsType = StatePropsType & DispatchPropsType




class UsersContainer extends React.Component<PropsType> {
    
    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
            
    }
   

    onPageChanged = (page:number) => {
        this.props.getUsersThunk(page, this.props.pageSize )
    }


    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}

        <Users users={this.props.users}
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            follow={this.props.follow}
            unFollow={this.props.unFollow}



        />
</>

    }

}

type OwmPropsType = {
    
}

let mapStateToProps = (state: AppStateType): StatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default compose (
    connect (
    mapStateToProps,{ 
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalCount,
    toggleIsFetching,
    getUsersThunk
})
    )(UsersContainer);


