import './profile.css';
import { useContext } from "react";
import profile from "../../imgs/profile.png";
import { certificate } from '../certificate';
import { useNavigate } from 'react-router-dom';
import { DefaultContext } from "../../../Context";
import { profilePhoto } from '../../../actions/user';
import Compressor from 'compressorjs';

export const Profile = () => {

    const navigate = useNavigate();
    const year = new Date().getFullYear();
    const { user, setUser, setEdit, setAlert, setText, setTitle, setButton} = useContext(DefaultContext);

    if (!user) {
        setUser(localStorage.getItem('user'));
    }

    const handleCertificate = () => {
        if (user.volunteeringHours) {
            certificate(
                user.firstName,
                user.secondName,
                user.city,
                user.code,
                year,
                user.email,
                user.country,
                user.volunteeringHours
            );
        } else {
            setTitle("Oops!");
            setText("You don't have enough volunteering hours to get a certificate. Earn more on our events!");
            setButton("OK");
            setAlert(true);
        }
    };

    const getBase64 = (file) => {
        var reader = new FileReader();
        new Compressor(file, {
            quality: 0.8,
            success: (res) => {      
                reader.readAsDataURL(res);
                reader.onload = function () {
                    profilePhoto(user.email, reader.result);
                    setUser({...user, photo: reader.result});
                };
            },
        });
    }

    return (
        <div className="reg block">
            <h1>Profile</h1>
            <div className='inf one'>
                <div className='inf'>
                    <div className="data">
                        <span>Full name: </span>
                        <span>{user?.firstName + ' ' + user?.secondName}</span>
                    </div>
                    <div className="data">
                        <span>Date of birth:</span>
                        <span>{user?.dateOfBirth}</span>
                    </div>
                    <div className="data">
                        <span>Gender:</span>
                        <span>{user?.gender}</span>
                    </div>
                    <div className="data">
                        <span>Status:</span>
                        <span>{user?.type}</span>
                    </div>
                    <div className="data">
                        <span>Volounteering hours:</span>
                        <span>{user?.volunteeringHours}</span>
                    </div>
                    <div className="data">
                        <span>Country:</span>
                        <span>{user?.country}</span>
                    </div>
                    <div className="data">
                        <span>City:</span>
                        <span>{user?.city}</span>
                    </div>
                    <div className="data">
                        <span>Affiliation:</span>
                        <span>{user?.affiliation}</span>
                    </div>
                    {user.affiliation !== 'Work' && user.affiliation !== "Unemployed" && <>
                        <div className="data">
                            <span>{user?.affiliation}:</span>
                            <span>{user?.school}</span>
                        </div>
                        <div className="data">
                            <span>{user?.affiliation === "School" ? "Grade" : "Course"}:</span>
                            <span>{user?.grade}</span>
                        </div>
                    </>}
                    {user.affiliation === "University" && 
                        <div className="data">
                            <span>Degree:</span>
                            <span>{user?.degree}</span>
                        </div>}
                    <div className="data">
                        <span>E-mail:</span>
                        <span>{user?.email}</span>
                    </div>
                    <div className="data">
                        <span>Phone number:</span>
                        <span>{user?.phoneNumber}</span>
                    </div>
                    <div className="data">
                        <span>Instagram account:</span>
                        <span>{user?.instagram}</span>
                    </div>
                    <div className="data">
                        <span>Telegram username:</span>
                        <span>{user?.telegram}</span>
                    </div>
                </div>
                <div
                    className='data two'
                    style={{
                        gap: "10px",
                    }}>
                    <div className='data'>
                        <div className='frame'>
                            <img src={user?.photo ? user?.photo : profile} alt="User photo"/>
                        </div>
                        <input
                            type="file"
                            className='photo'
                            onChange={(event) => getBase64(event.target.files[0])}
                        />
                    </div>
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
                        onClick={() => {
                            navigate("/fullform")
                            setEdit(true);
                        }}
                    >EDIT YOUR PROFILE</a>
                    {user.type === "Coordinator" ? <>
                        <a
                            className='btn'
                            onClick={() => navigate("/report")}
                        >REPORT THE EVENT</a>
                        <a
                            className='btn'
                            target='_blank'
                            href='https://event-uploader.vercel.app/'
                        >ADD AN EVENT</a></>
                        : <></>
                    }
                </div>
            </div>
        </div>
    );
};