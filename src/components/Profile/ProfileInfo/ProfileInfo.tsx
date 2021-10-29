import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { savePhoto } from '../../../redux/profile-slice';
import Preloader from '../../common/preloader/preloader';
import { curry30 } from '../../Users/users';
import ProfileData from './ProfileData';
import ProfileStatus from './profileStatus';
import s from './ProfileInfo.module.sass';



const ProfileInfo = (props:any) => {
    const dispatch = useDispatch()

    const [editImg, setEditImg] = useState(false)

    if(!props.profile) {
        return <Preloader/>
    }
    const userPhotoLarge = props.profile.photos.large

    const mainPhotoSelect = (e: ChangeEvent<HTMLInputElement>)=>{
        const photo = e.target.files

        if (photo && photo.length) {
            dispatch(savePhoto(photo[0]));

    }
    }
    const editPhoto=()=>{
        setEditImg(true)
    }


    return (
        <div>
            <div>
                {/* <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' /> */}
            </div>
            <div>
        
                <img src={userPhotoLarge || curry30} className={s.mainPhoto} />
                <button onClick={editPhoto}>изменить картинку</button>
                {editImg && <input type={"file"} onChange={mainPhotoSelect} />}
                <div className={s.username}> {props.profile.fullName}  </div>
                <div className={s.about_me}> {props.profile.aboutMe}  </div>
                <ProfileStatus/>
                <ProfileData profile = {props.profile}/>
                

            </div>

        </div>

    )
}

export default ProfileInfo;