import { useState } from 'react';
import './fullform.css';
import {useNavigate} from 'react-router-dom';
import { registration } from '../../actions/user';
import { DefaultContext } from "../../Context";
import { useContext } from "react";

const countries = ['Kazakhstan', 'Russia', 'Ozbekstan', 'Qyrgystan'];
const cities = ['Shymkent', 'Almaty', 'Semey', 'Taraz', 'Qostanay', 'Turkestan', 'Nur-Sultan', 'Qyzylorda', 'Qaraganda', 'Aktau', 'Taldyqorgan', 'Uralsk', 'Aqtobe', 'Kokshetau', 'Atyrau'];
const affiliations = ['School', 'College', 'University', 'Work'];
const grades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, '-'];

const Fullform = () => {

    const navigate = useNavigate();
    const { email, password } = useContext(DefaultContext);
    const [name, setName] = useState('');
    const [country, setCountry] = useState('Kazakhstan');
    const [affiliation, setAffiliation] = useState('School');
    const [instagram, setInstagram] = useState('@');
    const [telegram, setTelegram] = useState('@');
    const [dateOfBirth, setDateOfBirth] = useState('2022-02-22');
    const [city, setCity] = useState('Shymkent');
    const [grade, setGrade] = useState('1');
    const [phoneNumber, setPhoneNumber] = useState('+7');

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

    const handleDateOfBirth = (event) => {
        setDateOfBirth(event.target.value);
        console.log(dateOfBirth);
    };

    const handleCity = (event) => {
        setCity(event.target.value);
    };

    const handleGrade = (event) => {
        setGrade(event.target.value);
    };

    const handlephoneNumber = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleOnClick = () => {
        console.log([email, password, name, dateOfBirth, country, city, affiliation, grade, phoneNumber, instagram, telegram, 0]);
        registration(email, password, name, dateOfBirth, country, city, affiliation, grade, phoneNumber, instagram, telegram, 0);
        navigate('/signin');
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
                    <select placeholder='Choose your country' onChange={handleCountry}>
                        {countries.map((item, index) => <option key={index} value={item}>{item}</option>)}
                    </select>
                    <p>Affiliation</p>
                    <select placeholder='Choose option' onChange={handleAffiliation}>
                        {affiliations.map((item, index) => <option key={index} value={item}>{item}</option>)}
                    </select>
                    <p>Intagram account</p>
                    <input type="text" value={instagram} onChange={handleInstagram}/>
                    <p>Telegram username</p>
                    <input type="text" value={telegram} onChange={handleTelegram} style={{marginBottom: '0px'}}/>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent:'space-between'}}>
                    <div>
                        <p>Date of birth</p>
                        <input type="date" value={dateOfBirth} min="1960-01-01" max="2021-12-31" onChange={handleDateOfBirth}/>
                        <p>City</p>
                        <select placeholder='Choose your city' onChange={handleCity}>
                            {cities.map((item, index) => <option key={index} value={item}>{item}</option>)}
                        </select>
                        <p>Grade/Course</p>
                        <select placeholder='Choose option' onChange={handleGrade}>
                            {grades.map((item, index) => <option key={index} value={item}>{item}</option>)}
                        </select>
                        <p>Phone phoneNumber</p>
                        <input type="phone phoneNumber" value={phoneNumber} onChange={handlephoneNumber}/>
                    </div>
                    <a onClick={() => handleOnClick()} className='button'>SAVE</a>
                </div>
            </form>
        </div>
    );
}

export default Fullform;