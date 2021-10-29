import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState, ChangeEvent } from 'react';
import { updateStatus } from '../../../redux/profile-slice';
import s from './Profile-Status.module.sass'
import { AppStateType } from '../../../redux/redux-toolkit';



const ProfileStatus = () => {

    const ProfileStatus = useSelector((state: AppStateType) => state.profilePage.status);
    let userID = useSelector((state: AppStateType) => state.profilePage.profile?.userId)


    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(ProfileStatus)

    




    const dispatch = useDispatch()

    useEffect(() => {
        setStatus(ProfileStatus);
    }, [ProfileStatus]);


    const activateEditMode = () => {
  
        if (userID === 17193) {
            setEditMode(true)
        } else {
            alert('это не твой профиль ара')
        }
    
    }

    

    const deactivateEditMode = () => {
        setEditMode(false)
        if (status != ProfileStatus){
            dispatch(updateStatus(status))
        } 
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    }

    

    return (
        <div>
            {!editMode && userID === 17193 &&
                <div>
                   <p className={s.status}> Status: {ProfileStatus}</p> <button onClick={activateEditMode}>Изменить статус</button>
                </div>

            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                        value={status} />
                </div>

            }

        
        </div>
    )
}







export default ProfileStatus