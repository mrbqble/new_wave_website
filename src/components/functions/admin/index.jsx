import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DefaultContext } from "../../../Context";
import './styles.css';
import DoneSvg from '../../imgs/done.svg';

export const AdminPage = () => {
    const indexSize = 5, secondindexSize=2;
    const navigate = useNavigate();
    const {  } = useContext(DefaultContext);
    const [events, setEvents] = useState([1, 2, 3, 4,5, 6]);
    const [meropr, setMeropr] = useState(true);
    const [finances, setFinances] = useState(true);
    const [mer, setMer] = useState([1]);
    return (
        <div className="admin-page-div">
           <div className="leftdiv">

                <div className="admin-profile">
                    <div className="pfp-cropping">
                        <img alt="admin's pfp" className="profile-img" src={require('../../imgs/1.png')}/>
                    </div>
                    <div className="admin-name-description">
                        <h1 style={{"fontSize": "2.6em", "textAlign": "left"}}>Ivan Ivanov</h1>
                        <p style={{"fontSize": "1.3em"}}>Координатор в Алматы</p>
                    </div>
                </div>

                <div className="finances-inventory">
                    <div className="some-class" style={{"borderStyle": "none", "borderBottom": finances ? "4px solid #0013BC" : "none"}}>
                        <a href="#" style={{"fontSize": "2em", "height": "3em", "fontWeight": finances ? "600" : "400"}}
                            onClick={() => (setFinances(true))}>Финансы</a>
                    </div>
                    <div className="some-class" style={{"marginLeft": "1vw", "borderStyle": "none", "borderBottom": !finances ? "4px solid #0013BC" : "none"}}>
                        <a href="#" style={{"fontSize": "2em", "fontWeight": !finances ? "600" : "400"}}
                            onClick={() => (setFinances(false))}>Инвентарь</a>
                    </div>
                    <hr style={{"backgroundColor": "rgb(131, 131, 131)", "marginTop": "-3px"}}/>
                    {finances ? <section>
                        <div className="rasxodi-admin">
                            <div className="polucheno">
                                <h1 className="hone-admin" style={{"color": "#37B456"}}>1500₸</h1>
                                <h3>Получено за месяц</h3>
                            </div>
                            <div className="potracheno" style={{"paddingRight": "25px"}}>
                                <h1 className="hone-admin" style={{"color": "#FF6767"}}>15203,3₸</h1>
                                <h3>Получено за месяц</h3>
                            </div>
                        </div>
                        <div className="btn-div-center"><a className="otchet-btn" style={{"fontSize": "1.5em"}}>Добавить отчет</a></div>
                        <div className="list-of-reports-finances">
                            {events?.map((thing, index) => {
                            if(index<indexSize){
                                return <div className="report-finances">
                                    <p style={{"color": thing<0 ? "rgb(215, 0, 64)" : "green", "minWidth": "17%", "maxWidth": "30%"}}>{thing}</p>
                                    <p style={{"width": "65%", "fontWeight": "520"}}>Покупка перчаток</p>
                                    <p style={{"fontWeight": "200", "width": "auto"}}>09.12.2077</p>
                                </div>
                            }
                            })}
                            {events?.length>indexSize ? <div className="btn-div-center"><a className="trati-btn" style={{"fontSize": "1.5em"}}>Показать все траты</a></div>
                            : <></>}
                        </div>
                    </section> : 
                    <section>
                        <div className="btns-block">
                        <a className="spisat-btn" style={{"fontSize": "1.5em"}}>Списать</a>
                        <a className="spisat-btn" style={{"fontSize": "1.5em"}}>Добавить</a>
                        </div>
                        <div className="list-of-reports-finances">
                            {events?.map((thing, index) => {
                                if(index>secondindexSize){return;}
                                return <div className="report-finances">
                                    <p style={{"color": thing<0 ? "rgb(215, 0, 64)" : "green", "width": "19%", "textAlign": "right", "paddingRight": "5%"}}>{thing}</p>
                                    <p style={{"width": "100%", "fontWeight": "520"}}>Покупка перчаток gf gdf  fd fds ds </p>
                                </div>
                            })}
                        </div>
                        {events?.length>secondindexSize ? <div className="btn-div-center"><a className="trati-btn" style={{"fontSize": "1.5em"}}>Показать весь инвентарь</a></div>
                            : <></>}
                    </section>}
                </div>
            </div>
            <div className="rightdiv">
            <div className="bsdiv" style={{"flexWrap": "nowrap", "display": "flex"}}>
                <div className="junk-div" style={{"display": "inline-flex",  "borderStyle": "none", "borderBottom": meropr ? "4px solid #0013BC" : "none", "height": "3em"}}>
                    <a href="#" style={{"fontSize": "2em", "fontWeight": meropr ? "600" : "400"}}
                        onClick={() => (setMeropr(true))}>Мероприятия</a><div className="scircle" style={{"marginRight": "1vw"}}>2</div>
                </div>
                <div className="junk-div" style={{"marginLeft": "1vw", "display": "inline-flex", "height": "3em", "borderStyle": "none", "borderBottom": !meropr ? "4px solid #0013BC" : "none"}}>
                    <a hreg="#" style={{"fontSize": "2em", "fontWeight": !meropr ? "600" : "400"}}
                        onClick={() => (setMeropr(false))}>Задачи</a><div className="scircle">4</div>
                </div>
            </div>
            <hr style={{"backgroundColor": "rgb(131, 131, 131)", "marginTop": "-3px"}}/>
            {meropr ? <section>
                <div className="btn-div-center"><a className="otchet-btn" style={{"fontSize": "1.5em", "marginTop": "20px"}}>Создать Мероприятие</a></div>
                <div className="list-of-events">
                    {mer?.map((thing, index) => {
                        return <div className="right-events">
                            <div className="event-status">
                                <div className="a-status" style={{"backgroundColor": "#8EE578"}}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM10 1.5C5.30558 1.5 1.5 5.30558 1.5 10C1.5 14.6944 5.30558 18.5 10 18.5C14.6944 18.5 18.5 14.6944 18.5 10C18.5 5.30558 14.6944 1.5 10 1.5ZM8.75 11.4393L13.2197 6.96967C13.5126 6.67678 13.9874 6.67678 14.2803 6.96967C14.5466 7.23594 14.5708 7.6526 14.3529 7.94621L14.2803 8.0303L9.2803 13.0303C9.0141 13.2966 8.5974 13.3208 8.3038 13.1029L8.2197 13.0303L5.71967 10.5303C5.42678 10.2374 5.42678 9.7626 5.71967 9.4697C5.98594 9.2034 6.4026 9.1792 6.69621 9.3971L6.78033 9.4697L8.75 11.4393L13.2197 6.96967L8.75 11.4393Z" fill="black" fill-opacity="0.95"/>
                                    </svg>
                                    <span className="span-text-status">Проведено</span>
                                </div>
                                <div className="a-status" style={{"backgroundColor": "#FF6767"}}>
                                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.9993 15.0004C10.9993 14.4489 10.5522 14.0018 10.0006 14.0018C9.4491 14.0018 9.002 14.4489 9.002 15.0004C9.002 15.552 9.4491 15.9991 10.0006 15.9991C10.5522 15.9991 10.9993 15.552 10.9993 15.0004ZM10.7401 7.14719C10.6901 6.78115 10.3761 6.49925 9.9964 6.49955C9.5822 6.49988 9.2467 6.83594 9.247 7.25015L9.2506 11.7517L9.2575 11.8535C9.3075 12.2195 9.6215 12.5014 10.0012 12.5011C10.4154 12.5008 10.7509 12.1648 10.7506 11.7505L10.747 7.24895L10.7401 7.14719ZM11.9693 1.65937C11.113 0.111571 8.8878 0.111591 8.0316 1.65942L0.286338 15.6609C-0.543222 17.1605 0.541398 19 2.25518 19H17.7462C19.46 19 20.5446 17.1605 19.715 15.6608L11.9693 1.65937ZM9.3442 2.3855C9.6296 1.86956 10.3713 1.86954 10.6567 2.38548L18.4025 16.3869C18.679 16.8868 18.3175 17.5 17.7462 17.5H2.25518C1.68392 17.5 1.32238 16.8868 1.5989 16.387L9.3442 2.3855Z" fill="white"/>
                                    </svg>
                                    <span className="span-text-status" style={{"color": "#FFFFFF"}}>Проведено</span>
                                </div>
                            </div>
                            <p className="name-of-meropr">Название Мероприятия</p>
                        </div>
                    })}
                </div>
            </section> : <section>
                
            </section>}
            </div>
        </div>
    )
}
