import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './login.css'

const Login = (props) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showError, setShowError] = useState(false);
    const [authenticated, setauthenticated] = useState(
        localStorage.getItem(localStorage.getItem("authenticated") || false)
    );
    const errorMsg = "Error in credentials...";

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/login', { email, password })
            .then((res) => {
                console.log(res);
                if(res.data == "Login Successful!"){
                    localStorage.setItem("authenticated", true);
                    navigate("/home");
                }else{
                    if(!showError)
                    setShowError(!showError);
                    else
                    {
                        let subscript = document.querySelector('.text-danger');
                        subscript.classList.add('.sub-bold');
                        subscript.classList.remove('.sub-bold');
                    }
                }
            })
            .catch(error => console.log(error));
    }

    return (
        <>
            <div className='mainBackground d-flex vh-100 justify-content-center align-items-center'>
                <div className='form-wrapper p-5 w-30 rounded'>
                    <form onSubmit={handleSubmit}>
                        <h1 className='loginForm text-center p-4'>CRUD OPS.</h1>
                        <div className='mb-3 p-1'>
                            <label htmlFor="email">Email</label>
                            <div className='pt-1'>
                                <input className="" type="email" placeholder='Enter email...' onChange={e => setEmail(e.target.value)}></input>
                            </div>
                        </div>
                        <div className='mb-3 p-1'>
                            <label htmlFor="password">Password</label>
                            <div className='pt-1'>
                                <input className="" type="password" placeholder='Enter password...' onChange={e => setPassword(e.target.value)}></input>
                                {showError && <sup className='mt-5 text-danger'>{errorMsg}</sup>}
                            </div>
                        </div>
                        <button type='submit' className=''>Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login