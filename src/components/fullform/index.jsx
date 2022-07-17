import './fullform.css';
import { useState } from 'react';
import { useContext } from "react";
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import { DefaultContext } from "../../Context";
import { useNavigate } from 'react-router-dom';
import { registration } from '../../actions/user';

const countries = [
    'Kazakhstan',
    'Russia',
    'Ozbekstan',
    'Qyrgystan'
];
const cities = [
    'Shymkent',
    'Aktau',
    'Semey',
    'Taraz',
    'Almaty',
    'Aqtobe',
    'Atyrau',
    'Uralsk',
    'Qostanay',
    'Turkestan',
    'Qyzylorda',
    'Qaraganda',
    'Kokshetau',
    'Nur-Sultan',
    'Taldyqorgan'
];
const affiliations = [
    'School',
    'Work',
    'College',
    'University'
];
const grades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, '-'];

export const Fullform = () => {

    const {
        email,
        password
    } = useContext(DefaultContext);
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [city, setCity] = useState('Shymkent');
    const [grade, setGrade] = useState('1');
    const [country, setCountry] = useState('Qazaqstan');
    const [telegram, setTelegram] = useState('@');
    const [instagram, setInstagram] = useState('@');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [affiliation, setAffiliation] = useState('School');
    const [dateOfBirth, setDateOfBirth] = useState('2022-02-22');

    function capittalize(s) {
        return s.toLowerCase().replace(
            /(?<!\p{Lowercase})\p{Lowercase}/gu,
            ch => ch.toUpperCase()
        );
    }

    const handleOnClick = () => {
        registration(
            name,
            city,
            email,
            grade,
            country,
            password,
            telegram,
            instagram,
            dateOfBirth,
            affiliation,
            phoneNumber,
            0
        );
        navigate('/signin');
    };

    const handleName = (event) => {
        setName(capittalize(event.target.value));
    };

    const handleCity = (event) => {
        setCity(event.target.value);
    };

    const handleGrade = (event) => {
        setGrade(event.target.value);
    };

    const handleCountry = (event) => {
        setCountry(event.target.value);
    };

    const handleTelegram = (event) => {
        setTelegram(event.target.value);
    };

    const handleInstagram = (event) => {
        setInstagram(event.target.value);
    };

    const handleAffiliation = (event) => {
        setAffiliation(event.target.value);
    };

    const handleDateOfBirth = (event) => {
        setDateOfBirth(event.target.value);
    };

    return (
        <div className="full">
            <h1>Fill the form below</h1>
            <p style={{
                textAlign: 'center',
                marginBottom: '20px'
            }}>
                Please, make sure that the data is accurate.
                <br/>
                It is important for the issuance of your certificate.
            </p>
            <form action="post">
                <div>
                    <p>Full name</p>
                    <input
                        type="text"
                        onChange={handleName}
                        placeholder='Enter your full name'
                    />
                    <p>Country</p>
                    <select
                        onChange={handleCountry}
                        placeholder='Choose your country'
                    >
                        {countries.map((item, index) => 
                            <option
                                key={index}
                                value={item}
                            >{item}</option>
                        )}
                    </select>
                    <p>Affiliation</p>
                    <select
                        placeholder='Choose option'
                        onChange={handleAffiliation}
                    >
                        {affiliations.map((item, index) =>
                            <option
                                key={index}
                                value={item}
                            >{item}</option>
                        )}
                    </select>
                    <p>Intagram account</p>
                    <input
                        type="text"
                        value={instagram}
                        onChange={handleInstagram}
                    />
                    <p>Telegram username</p>
                    <input
                        style={{
                            marginBottom: '0px'
                        }}
                        type="text"
                        value={telegram}
                        onChange={handleTelegram}
                    />
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent:'space-between'
                    }}
                >
                    <div>
                        <p>Date of birth</p>
                        <input
                            type="date"
                            min="1960-01-01"
                            max="2021-12-31"
                            value={dateOfBirth}
                            onChange={handleDateOfBirth}
                        />
                        <p>City</p>
                        <select
                            onChange={handleCity}
                            placeholder='Choose your city'
                        >
                            {cities.map((item, index) =>
                            <option
                                key={index}
                                value={item}
                            >{item}</option>
                        )}
                        </select>
                        <p>Grade/Course</p>
                        <select
                            onChange={handleGrade}
                            placeholder='Choose option'
                        >
                            {grades.map((item, index) =>
                            <option
                                key={index}
                                value={item}
                            >{item}</option>
                        )}
                        </select>
                        <p>Phone number</p>
                        <PhoneInput
                            country={'kz'}
                            value={phoneNumber}
                            onChange={phone => setPhoneNumber("+"+phone)}
                        />
                    </div>
                    <a
                        className='button'
                        onClick={() => handleOnClick()}
                    >SAVE</a>
                </div>
            </form>
        </div>
    );
};