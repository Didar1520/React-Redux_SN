import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react';
import { saveProfile } from '../../../redux/profile-slice';
import { Formik } from 'formik';


const ProfileData =(props:any)=>{

    const profile = props.profile 
    const dispatch = useDispatch()

    const setProfile = () => {
    
        dispatch(saveProfile(
            { aboutMe: "ara-ara " }
            ))
    }

    const onSubmit = (values:any) => {
        dispatch(saveProfile(values))
        console.log(values);

       
    }

    return(
        <div>
            {/* <Formik
                initialValues={
                    {   aboutMe: "",
                        contacts: profile.contacts,
                        fullName: "",
                        lookingForAJob: profile.lookingForAJob,
                        lookingForAJobDescription: ""
                    
                    }

                }

                validateOnBlur
                onSubmit={(values) => { onSubmit(values) }}





            >
                {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                    <div >
                       
                        <div >
                            <label> about me</label>
                            <input
                                type={'text'}
                                name={'aboutMe'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.aboutMe}

                            />
                        </div>


                        <div >
                            <label>  fullName</label>
                            <input
                                type={'text'}
                                name={' fullName'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.fullName}

                            />
                        </div>

                  

                        
                        <div >
                            <label> Ищу работу</label>
                            <input
                                type={'checkbox'}
                                name={'lookingForAJob'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.lookingForAJob}

                            />

                        </div>
                     
                        <div >
                            <label>  О работе ара</label>
                            <input
                                type={'text'}
                                name={' lookingForAJobDescription'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.lookingForAJobDescription}

                            />
                        </div>

                      



              

                        <button
                            disabled={!isValid && !dirty}
                            onClick={handleSubmit}
                            type={'submit'}

                        >отправить</button>
                    </div>



                )}


            </Formik> */}












            

            <button onClick={setProfile} >set profile</button>
            <div><button >edit</button></div>
            <div>
                <b>Full name</b>: {profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
            </div>
            {profile.lookingForAJob &&
                <div>
                    <b>My professional skills</b>: {profile.lookingForAJobDescription}
                </div>
            }

            <div>
                <b>About me</b>: {profile.aboutMe}
            </div>
           











           














            
        </div>
    )
}

export default ProfileData