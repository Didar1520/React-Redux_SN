import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';
import './App.sass';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Setings/Settings';
import DialogsContainer from './components/Dialogs/dialogs-container';
import UsersContainer from './components/Users/users-container';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/login';
import Preloader from './components/common/preloader/preloader';
import { initializeApp } from './redux/app-slice';
import { AppStateType } from './redux/redux-toolkit';



const App = () => {

  useEffect(() => {
    
    dispatch(initializeApp())
  })

  const initialized = useSelector((state: AppStateType) => state.app.initialized)

  const dispatch = useDispatch()


  if (!initialized) {
  
    return <Preloader/>
  }
  
  return (

      <div className='app-wrapper'>
     
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path='/dialogs'  render={() => 
            <DialogsContainer/>} />

        <Route path='/users' render={() =>
          <UsersContainer />} />
         
          <Route path='/profile/:userId?' render={() => 
            <ProfileContainer/>} 
          /> 
          <Route path='/login' render={() => <Login />} />

          <Route path='/news'     render = {() => <News />} />
          <Route path='/music'    render = {() => <Music />} />
          <Route path='/settings' render = {() => <Settings />} />
        </div>
        
      </div>
  )
}



export default App;