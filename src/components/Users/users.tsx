import './users.css'
import { NavLink } from "react-router-dom";
import React, {  } from 'react';
import Paginator from '../common/preloader/paginator';
import { UserType } from '../../types/types';
import { usersApi } from '../../api/Users-api';

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize?: number
    users: UserType[]
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}

export const curry30 = "https://i1.wp.com/thefastbreaklayup.com/wp-content/uploads/2020/10/https-specials-images.forbesimg.com-imageserve-5ece6eed1061240006af3da0-0x0.jpgbackground000000cropX11271cropX23410cropY1153cropY22290.jpeg?resize=416%2C416&ssl=1"



const Users: React.FC<PropsType> = (props) => {
   
    
    return (


        
        <div>
            <Paginator 
                pageSize={props.pageSize}
                totalUsersCount={props.totalUsersCount}
                currentPage={props.currentPage}
                onPageChanged={props.onPageChanged}
            
            />
         
         {props.users.map(u=> 
            <div key={u.id}> 
                   <div className='users-wrapper'>
                        <div className="users-item">
                            <div className="users-photo">
                                <NavLink to={'/profile/' + u.id}>
                                     <img className="users-photo" src={u.photos.small != null ? u.photos.small : curry30} alt="" />
                                </NavLink>
                            </div>
                            <div className="users-descr">
                                <div className="users-name">
                                    {u.name}
                           </div>
                                <div className="users-city">
                                    Алматы
                                </div>
                                <div className="users-coutry">
                                    Казахстан
                                </div>
                            </div>
                            <div className="users-button">
                             
                                {u.followed
                                    ? <button onClick={() => {
                                        props.unFollow(u.id)
                                        usersApi.unFollow(u.id)
                                    }}>
                                        Unfollow
                                    </button>
                                    : <button onClick={() => {
                                        props.follow(u.id)
                                        usersApi.follow(u.id)
                                    }}>Follow</button>}
                            
                            </div>
                        </div>
                </div>
             </div> 
             
             )} 
     

        </div>

    )
}




export default Users




