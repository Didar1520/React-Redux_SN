import React from 'react';
import { connect } from 'react-redux';
import authReducer, { getAuthUserData, logout, setAuthUserData } from '../../redux/auth-slice';
import { AppStateType } from '../../redux/redux-toolkit';
import Header from './Header';

type StatePropsType={
    isAuth: boolean
    login: string | null
    email: string | null
}

type DispatchPropsType ={
    logout: () => void
}

type PropsType = StatePropsType & DispatchPropsType



class HeaderContainer extends React.Component <PropsType> {
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state:AppStateType)=>{
    return({
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        email: state.auth.email

    })
}





export default connect<StatePropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {
    logout
})(HeaderContainer)

