import { Formik } from "formik";
import { connect } from "react-redux";
import { loginThunk } from "../../redux/auth-slice";
import s from './loginStyle.module.sass'
import { Redirect } from "react-router-dom";

const LoginForm = (props) => {

    
    if (props.isAuth) {
         <Redirect to="/profile" />  
        
        }

    const onSubmit=(values)=>{
        props.loginThunk(values.email, values.password, values.rememberMe)
    }
    

    return (
        
        <div>
           
            <h1 className={s.ziga}>Входddq</h1>


            <Formik
                initialValues={
                    {
                        email: '',
                        password: '',
                        checkbox: ''
                    }
                }

                validateOnBlur
                onSubmit={(values) => { onSubmit(values) }}



                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Неправильный Эмайл';
                    }
                    return errors;
                }}



            >
                {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                    <div className={s.input_wrapper}>
                        <div className={s.login_input}>
                            <label> Логин</label>
                            <input
                                type={'text'}
                                name={'email'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}

                            />
                            {errors.email && touched.email && errors.email}
                        </div>
                        <div className={s.password_input}>
                            <label> Пароль</label>
                            <input
                                type={'password'}
                                name={'password'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}

                            />
                            {errors.password && touched.password && errors.password}

                        </div>
                        <div className={s.checkbox_input}>
                            <label> Запомнить меня</label>
                            <input
                                type={'checkbox'}
                                name={'rememberMe'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.checkbox}

                            />

                        </div>

                        {touched.email && errors.email && <span>тут ашибка ара</span>}

                        <button
                            disabled={!isValid && !dirty}
                            onClick={handleSubmit}
                            type={'submit'}

                        >отправить</button>
                    </div>



                )}


            </Formik>
    </div >
);

}




const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {loginThunk})(LoginForm);