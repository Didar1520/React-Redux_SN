import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import s from './Header.module.sass';

type PropsType = {
    isAuth: boolean
    login: string | null
    email:string | null
    logout: () => void

}
const Header: React.FC<PropsType> = (props) => {

    if (props.isAuth) { <Redirect to='/profile' />}
   
    return (<>
        <header className={s.header}>
        
      

        <div className={s.login}>

                {props.isAuth ?

                    <div className = {s.logout}><div className={s.userLoginName}>{props.login}</div>  <button onClick={props.logout}>Выйти</button> </div> 
                    : <div className = {s.loginButton}><NavLink to={'/login'}>Вход</NavLink></div> }



    
            
            
        
            
        </div>
    </header>
    </>
    )
}

export default Header;