import { useState } from 'react';
import './fullform.css';
import {useNavigate} from 'react-router-dom';

const Fullform = () => {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [affiliation, setAffiliation] = useState('');
    const [instagram, setInstagram] = useState('');
    const [telegram, setTelegram] = useState('');
    const [dateBirth, setDateBirth] = useState('');
    const [city, setCity] = useState('');
    const [grade, setGrade] = useState('');
    const [number, setNumber] = useState('');

    const handleName = (event) => {
        setName(event.target.value);
    };

    const handleCountry = (event) => {
        setCountry(event.target.value);
    };

    const handleAffiliation = (event) => {
        setAffiliation(event.target.value);
    };

    const handleInstagram = (event) => {
        setInstagram(event.target.value);
    };

    const handleTelegram = (event) => {
        setTelegram(event.target.value);
    };

    const handleDateBirth = (event) => {
        setDateBirth(event.target.value);
    };

    const handleCity = (event) => {
        setCity(event.target.value);
    };

    const handleGrade = (event) => {
        setGrade(event.target.value);
    };

    const handleNumber = (event) => {
        setNumber(event.target.value);
    };

    return (
        <div className="full">
            <h1>Fill the form below</h1>
            <p style={{textAlign: 'center', marginBottom: '20px'}}>Please, make sure that the data is accurate.<br/>It is important for the issuance of your certificate.</p>
            <form action="post">
                <div>
                    <p>Full name</p>
                    <input type="text" placeholder='Enter your full name' onChange={handleName}/>
                    <p>Country</p>
                    <input type="text" placeholder='Choose your country' onChange={handleCountry}/>
                    <p>Affiliation</p>
                    <input type="text" placeholder='@new_wave' onChange={handleAffiliation}/>
                    <p>Intagram account</p>
                    <input type="text" placeholder='@new_wave' onChange={handleInstagram}/>
                    <p>Telegram username</p>
                    <input type="text" placeholder='@new_wave' onChange={handleTelegram} style={{marginBottom: '0px'}}/>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent:'space-between'}}>
                    <div>
                        <p>Date of birth</p>
                        <input type="text" placeholder='DD.MM.YYYY' onChange={handleDateBirth}/>
                        <p>City</p>
                        <input type="text" placeholder='Choose your city' onChange={handleCity}/>
                        <p>Grade/Course</p>
                        <input type="text" placeholder='Choose option' onChange={handleGrade}/>
                        <p>Phone number</p>
                        <input type="text" placeholder='+7' onChange={handleNumber}/>
                    </div>
                    <a onClick={() => navigate('/profile')} className='button'>SAVE</a>
                </div>
            </form>
        </div>
    );
}

export default Fullform;