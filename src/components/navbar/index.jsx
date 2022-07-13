import './navbar.css';
import { useNavigate } from "react-router-dom";
import { DefaultContext } from "../../Context";
import { useContext } from "react";

const Navbar = () => {

    const navigate = useNavigate();
    const { isAuth } = useContext(DefaultContext);

    return (
        <div className="navbar">
            <a onClick={() => navigate('/')} className="logo">NEW WAVE</a>
            <div className="links">
                <a>ABOUT US</a>
                <a>TAKE ACTION!</a>
                <a>COMMUNITY</a>
                <a style = {{color: "#0013BC", }}>OUR PROJECTS</a>
            </div>
            <div className="links">
                {isAuth ? <a onClick={() => navigate('/profile')}>PROFILE</a> : <a onClick={() => navigate('/signin')}>LOGIN</a>}
                <a className="button">DONATE</a>
            </div>
        </div>
    );
}
export default Navbar;