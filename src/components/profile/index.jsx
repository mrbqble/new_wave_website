import { profile } from '../../actions/user';
import './profile.css';
import { DefaultContext } from "../../Context";
import { useContext, useEffect, useState } from "react";

const Profile = () => {

    const { email } = useContext(DefaultContext);
    const [user, setUser] = useState([]);

    useEffect(() => {
        profile(email).then(response => setUser(response));
    }, [])

    return (
        <div className="profile">
            <h1>Profile</h1>
            <div className='inf'>
                <div className="data" style={{color: '#757575'}}>
                    <span>Full name: </span>
                    <span>Date of birth:</span>
                    <span>Country:</span>
                    <span>City:</span>
                    <span>Affiliation:</span>
                    <span>Grade/Course:</span>
                    <span>E-mail:</span>
                    <span>Phone number:</span>
                    <span>Instagram account:</span>
                    <span>Telegram username:</span>
                    <span>Volounteering hours:</span>
                </div>
                <div className='data' style={{color: 'black'}}>
                    <span>{user.name}</span>
                    <span>{user.dateOfBirth}</span>
                    <span>{user.country}</span>
                    <span>{user.city}</span>
                    <span>{user.affiliation}</span>
                    <span>{user.grade}</span>
                    <span>{user.email}</span>
                    <span>{user.phoneNumber}</span>
                    <span>{user.instagram}</span>
                    <span>{user.telegram}</span>
                    <span>{user.volunteeringHours}</span>
                </div>
            </div>
            
        </div>
    );
}

export default Profile;