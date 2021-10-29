import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { connect } from 'react-redux';
import {toggleIsFetching } from "../../redux/users-slice";
import { getUserProfile, getStatus} from '../../redux/profile-slice';
import { Redirect, withRouter, RouteComponentProps} from 'react-router';
import { compose } from 'redux';
import { profileType } from '../../types/types';

type StatePropsType = {
  profile: profileType
  isAuth: boolean
  match: any
}

type DispatchPropsType = {
  getUserProfile: (userID:number)=>void 
  getStatus:(userID:number)=>void
}


type PropsType = StatePropsType & DispatchPropsType


class ProfileContainer extends React.Component<PropsType> {
  
  refreshProfile(){
    let userID = this.props.match.params.userId;

    if (!userID) {
      userID = 17193;
    }
    this.props.getUserProfile(userID);


    this.props.getStatus(userID);
  }
  componentDidMount() {
    this.refreshProfile()
  }
  
  componentDidUpdate(prevProps: PropsType, prevState: PropsType) {
    if (this.props.match.params.userId != prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }


  render() {
   
    
    return (
      <div className={s.content}>
        <ProfileInfo {...this.props} profile={this.props.profile} />
      </div>
    )
  }
}

let mapStateToProps = (state:any) => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
  }
}





export default compose<React.ComponentType>(
  connect(mapStateToProps, { toggleIsFetching, getUserProfile, getStatus }),
  withRouter
)(ProfileContainer);


