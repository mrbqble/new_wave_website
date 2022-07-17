import './registration.css';
import { useState } from 'react';
import { useContext } from "react";
import {useNavigate} from 'react-router-dom';
import { DefaultContext } from "../../Context";

export const Registration = () => {
    
    const {
        password,
        setEmail,
        setPassword
    } = useContext(DefaultContext);
    const navigate = useNavigate();
    const [secpass, setSecPass] = useState('');

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleSecPass = (event) => {
        setSecPass(event.target.value);
    };
    
    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleOnClick = () => {
        if (secpass === password) {
            navigate('/fullform');
        } else {
            alert("Enter the password correctly!")
        }
    };

    return (
        <div className="reg">
            <h1>Registration</h1>
            <form action="post">
                <div>
                    <p>E-mail</p>
                    <input
                        type="text"
                        onChange={handleEmail}
                        placeholder='example@mail.com'
                    />
                    <p>Password</p>
                    <input
                        type="password"
                        onChange={handlePassword}
                        placeholder='New password'
                    />
                    <p>Confirm password</p>
                    <input
                        type="password"
                        onChange={handleSecPass}
                        placeholder='Enter password again'
                    />
                </div>
                <a
                    className='button'
                    onClick={() => handleOnClick()}
                >REGISTER</a>
            </form>
        </div>
    );
};