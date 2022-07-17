import './profile.css';
import logo from "../imgs/nw.png";
import { profile } from '../../actions/user';
import { certificate } from '../certificate';
import { DefaultContext } from "../../Context";
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";

export const Profile = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState([]);
    const year = new Date().getFullYear();
    const {email} = useContext(DefaultContext);

    const handleCertificate = () => {
        certificate(
            user.name,
            user.city,
            year,
            user.country,
            user.volunteeringHours    
        );
    };

    useEffect(() => {
        profile(email).then(response => setUser(response));
    }, [])

    return (
        <div className="profile">
            <h1>Profile</h1>
            <div className='inf'>
                <div className='inf'>
                    <div
                        className="data"
                        style={{
                            color: '#757575'
                    }}>
                        <span>Full name: </span>
                        <span>E-mail:</span>
                        <span>City:</span>
                        <span>Country:</span>
                        <span>Affiliation:</span>
                        <span>Grade/Course:</span>
                        <span>Phone number:</span>
                        <span>Date of birth:</span>
                        <span>Instagram account:</span>
                        <span>Telegram username:</span>
                        <span>Volounteering hours:</span>
                    </div>
                    {user
                        ? <div
                            className='data'
                            style={{
                                color: 'black'
                        }}>
                            <span>{user.name}</span>
                            <span>{user.email}</span>
                            <span>{user.city}</span>
                            <span>{user.country}</span>
                            <span>{user.affiliation}</span>
                            <span>{user.grade}</span>
                            <span>{user.phoneNumber}</span>
                            <span>{user.dateOfBirth}</span>
                            <span>{user.instagram}</span>
                            <span>{user.telegram}</span>
                            <span>{user.volunteeringHours}</span>
                        </div>
                        : <></>}
                </div>
                <div
                    className='data'
                    style={{
                        gap: "10px",
                    }}>
                    <img
                        src={logo}
                        alt="logo"
                    />
                    <a
                        className='cert btn'
                        onClick={() => handleCertificate()}
                    >GET MY CERTIFICATE</a>
                    <a
                        className='join btn'
                        onClick={() => navigate("/")}
                    >JOIN THE TELEGRAM GROUP</a>
                    <a
                        className='btn'
                        onClick={() => navigate("/")}
                    >EDIT YOUR PROFILE</a>
                </div>
            </div>
        </div>
    );
};