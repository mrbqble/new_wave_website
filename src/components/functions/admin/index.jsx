import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DefaultContext } from "../../../Context";
import './styles.css';

export const AdminPage = () => {

    const navigate = useNavigate();
    const {  } = useContext(DefaultContext);
    const [events, setEvents] = useState([1, 32, 43, 453]);
    // block eventinfo
    return (
        <div className="admin-page-div">
           <div className="leftdiv">

                <div className="admin-profile">
                    <div className="pfp-cropping">
                        <img alt="admin's pfp" className="profile-img" src={require('../../imgs/1.png')}/>
                    </div>
                    <div className="admin-name-description">
                        <h1 style={{"fontSize": "38px"}}>Ivan Ivanov</h1>
                        <p style={{"fontSize": "20px"}}>Координатор в Алматы</p>
                    </div>
                </div>

                <div className="finances-inventory">
                    <a href="#" style={{"fontSize": "38px"}}>Финансы</a>
                    <a hreg="#" style={{"paddingLeft": "20px", "fontSize": "38px"}}>Инвентарь</a>
                    <hr />
                    <div className="rasxodi-admin">
                        <div className="polucheno">
                            <h1 className="hone-admin" style={{"color": "green"}}>1500₸</h1>
                            <h3>Получено за месяц</h3>
                        </div>
                        <div className="potracheno" style={{"paddingRight": "25px"}}>
                            <h1 className="hone-admin" style={{"color": "red"}}>15203,3₸</h1>
                            <h3>Получено за месяц</h3>
                        </div>
                    </div>
                    <a className="otchet-btn" style={{"fontSize": "30px"}}>Добавить отчет</a>
                    <div className="list-of-reports-finances" style={{"padding": "15px"}}>
                        {events.map((thing, index) => {
                            return <div className="report-finances">
                                <p style={{"color": thing<0 ? "red" : "green"}}>-1500</p>
                                <p>Покупка перчаток</p>
                                <p>21.12.2077</p>
                            </div>
                        })}
                    </div>
                </div>
           </div>
           <div className="rightdiv">
                <h1>World Hello</h1>
           </div>
        </div>
    )
}
