import "./event.css"
import { useContext } from "react";
import { DefaultContext } from "../../Context";
import { attend, leave, getEvents } from "../../actions/user";
import { useState } from "react";

export const Event = () => {

    const {event, user, setEvents, setEvent, events, current} = useContext(DefaultContext);
    const [isAttended, setIsAttended] = useState(event.attended.filter(item => item.email === user.email).length ? true : false);

    const handleAttend = () => {
        if (user.email && !isAttended) {
            attend(user.email, user.name, event._id).then(setIsAttended(true));
            getEvents().then(response => setEvents(response));
            setEvent(events[current]);
        } else {
            alert("Для регистрации на мероприятия вам нужно войти в свою учетную запись. Пожалуйста, повторите попытку после того как выполните вход.")
        }
    }

    const handleLeave = () => {
        leave(user.email, event._id).then(setIsAttended(false));
        getEvents().then(response => setEvents(response));
        setEvent(events[current]);
    }

    return (
        <div className="container block" style={{justifyContent: "space-evenly", marginLeft: "0px"}}>
            <div className="eventinfo" style={{gap: "40px"}}>
                <h1>
                    {event.title}<br/>
                    <font>{event.subtitle}</font>
                </h1>
                <div>
                    <p className='text'>{event.text}</p>
                    <p>{event.subtext}</p>
                </div>
                <h2>{event.month} <font>{event.day}</font></h2>
                <div>
                    <p className="text">Volunteers needed: <font>{event.places}</font></p>
                    <p className="text">Volunteering hours: <font>{event.hours}</font></p>
                    <p className="text" style={{marginBottom: "0px"}}>Available places: <font>{event.places - event.attended.length}</font></p>
                </div>
                {isAttended
                    ? <a className="join btn" onClick={() => handleLeave()}>LEAVE EVENT</a>
                    : <a className="cert btn" onClick={() => handleAttend()}>ATTEND EVENT</a>
                }
                <div>
                    <p className="text">List of volunteers attending the event:</p>
                    <div className="list">
                        {event.attended.map((item, index) => 
                            <div key={index}>
                                <p className="text" style={{marginBottom: "0px"}}>{index + 1}. {item.name}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <img src={event.image} alt="event" style={{height: '694px', width: "694px"}}/>
        </div>
    );
};