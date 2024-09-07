import { useState } from "react";
import  { useAuthContext }  from '../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const SignUpPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const {dispatch} = useAuthContext();
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        setIsLoading(true);
        
        axios.post('http://localhost:4000/api/user/signup', {email, password})
        .then((response) => {
            localStorage.setItem('user', JSON.stringify(response.data));
            setIsLoading(false);
            dispatch({type: 'LOGIN', payload: response.data});
            navigate('/');
        })
        .catch((err) => {
            setError(err.response.data.error);
            setIsLoading(false);
        });

    }

    return (
        <div className = "signupform">
            <form onSubmit = {handleSubmit}> 
                <label>Email: </label>
                <input type = "email" onChange={(e)=>{setEmail(e.target.value)}} name="email" value={email}></input> 
                <label>Password: </label>
                <input type = "password" onChange={(e)=>{setPassword(e.target.value)}} name="password" value={password}></input> 
                <button disabled = {isLoading}> Submit </button>
                <div className = "error"> {error} </div>
            </form>
        </div>
      );
}
 
export default SignUpPage;
