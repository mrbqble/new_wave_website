import { useState } from 'react';
import './registration.css';
import {useNavigate} from 'react-router-dom';
import { registration } from '../../actions/user';

const Registration = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secpass, setSecPass] = useState('');

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleSecPass = (event) => {
        setSecPass(event.target.value);
    }

    const handleOnClick = () => {
        registration(email, password);
        navigate('/fullform');
    }

    return (
        <div className="reg">
            <h1>Registration</h1>
            <form action="post">
                <div>
                    <p>E-mail</p>
                    <input type="text" placeholder='example@mail.com' onChange={handleEmail}/>
                    <p>Password</p>
                    <input type="password" placeholder='New password' onChange={handlePassword}/>
                    <p>Confirm password</p>
                    <input type="password" placeholder='Enter password again' onChange={handleSecPass}/>
                </div>
                <a onClick={() => handleOnClick()} className='button'>REGISTER</a>
            </form>
        </div>
    );
}

export default Registration;