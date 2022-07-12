import './profile.css';

const Profile = () => {

    const user = {
        name: 'Assetbek Bibol',
        date: '03.10.2004',
        country: 'Kazakhstan',
        city: 'Shymkent',
        affiliation: 'Student',
        grade: 11,
        email: 'asetbek.b.1003@gmail.com',
        number: '+7-(747)-255-24-01',
        insta: '@mrbqble',
        tg: '@mrbqble',
        hours: 10
    }
    return (
        <div className="profile">
            <h1>Profile</h1>
            <div className='inf'>
                <div className="data" style={{color: '#757575'}}>
                    <span>Full name:</span>
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
                    <span>{user.date}</span>
                    <span>{user.country}</span>
                    <span>{user.city}</span>
                    <span>{user.affiliation}</span>
                    <span>{user.grade}</span>
                    <span>{user.email}</span>
                    <span>{user.number}</span>
                    <span>{user.insta}</span>
                    <span>{user.tg}</span>
                    <span>{user.hours}</span>
                </div>
            </div>
            
        </div>
    );
}

export default Profile;