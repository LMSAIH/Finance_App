import React, { useEffect } from 'react';
import { getFinancesTC } from '../redux/finance-reducer';
import { useDispatch, useSelector } from 'react-redux';
import { getFinancesData } from './../redux/HomeSelector';
import { Formik, Form, Field } from 'formik';
import { loginTC } from '../redux/auth-reducer';



export const LoginPage = () => {
    const dispatch = useDispatch();


    const loginUser = (login, password, rememberMe) => {
        dispatch(loginTC(login, password, rememberMe))
    }

    
    console.log("HEEEEEEEERREEEEEEEEEE");
  return (
    <div>
        <h1>LOGIN PAGE</h1>
        <LoginForm loginUser = {loginUser}/>
    </div>
  )
}

const LoginForm = (props) => {
    let submit = (values) => {
        props.loginUser(values.login, values.password, values.rememberMe)

    }
    return (
        <div>
            <Formik
                enableReinitialize
                initialValues={{ login: "Login", password: "Password", rememberMe: false }}
                onSubmit={submit}>

                <Form>
                    <Field type="string" name="login"/>
                    <div>
                        <Field type="password" name="password"/>
                    </div>
                    
                    <Field type="checkbox" name="rememberMe"/>
                    <button type="submit">
                        Submit
                    </button>
                </Form>
            </Formik>
        </div>
    );
};