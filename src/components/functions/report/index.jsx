import "./report.css";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { report } from "../../../actions/add";
import { getUsers } from '../../../actions/add';
import { profile } from '../../../actions/user';
import { DefaultContext } from "../../../Context";

export const Report = () => {

    const {events, users, email, setUser, setUsers, token} = useContext(DefaultContext);
    const [type, setType] = useState('Cleaning day');
    const [eventid, setEventId] = useState(0);
    const [bags, setBags] = useState(0);
    const [filteredEvents, setFilteredEvents] = useState(events);
    const [distance, setDistance] = useState(0);
    const [addInf, setAddInf] = useState('');
    const types = ["Cleaning day", "Tree planting", "Shelter visiting"];

    const [search, setSearch] = useState('');
    
    

    useEffect(() => {
        setFilteredEvents(events?.filter(item => item.type === type));
    }, [events, type]);

    useEffect(() => {
        setUsers(filteredEvents ? [...filteredEvents[eventid].attended.sort((a, b) => a.name.localeCompare(b.name)), ...users.filter(item => !filteredEvents[eventid].attended.find(att => att.email === item.email))] : users)
    }, [eventid])

    const handleItemCame = (email) => {
        let newUsers = JSON.parse(JSON.stringify(users))
        const findUser = newUsers.find(item => item.email === email);
        findUser.came = !findUser.came
        setUsers(newUsers)
    }

    const handleSendReport = () => {
        report(bags, type, filteredEvents[eventid]._id, addInf, users.filter(user => user.came === true), distance, filteredEvents[eventid].coordinator).then((res) => {
            profile(email, token).then(response => setUser(response));
            getUsers().then(response => setUsers(response));
        });
    }

    const arraySF = users?.filter(item => (item.firstName + " " + item.secondName).substring(0, search.length).toLowerCase() === search.toLowerCase());

    return (
        <div className="reg block">
            <h1>Report of the event</h1>
            <div className="data report" style={{alignItems: "normal", justifyContent: "space-evenly"}}>
                <div className="eventinfo" style={{gap: "30px"}}>
                    <div className="inf" style={{alignItems: "normal", justifyContent: "left"}}>
                        <div className="data">
                            <span>Type:</span>
                            <select
                                onChange={(event) => setType(event.target.value)}
                            >
                                {types.map((item, index) =>
                                    <option
                                        key={index}
                                        value={item}
                                    >{item}</option>
                                )}
                            </select>
                        </div>
                        <div className="data">
                            <span>Location:</span>
                            <select
                                onChange={(event) => {
                                    setEventId(event.target.value);
                                }}
                            >
                                {filteredEvents 
                                    ? filteredEvents.map((item, index) => 
                                        <option
                                            key={index}
                                            value={index}
                                        >{item.location}</option>)
                                    : <></>}
                            </select>
                        </div>
                        <div className="data">
                            <span>Number of plastic bags used:</span>
                            <input type="text" value={bags} onChange={(event) => setBags(event.target.value)} maxLength="5"/>
                        </div>
                        <div className="data">
                            <span>Distance cleaned:</span>
                            <input type="text" value={distance} onChange={(event) => setDistance(event.target.value)} maxLength="5"/>
                        </div>
                        <div className="data">    
                            <span>Coordinator:</span>
                            <span>{filteredEvents ? filteredEvents[eventid] ? filteredEvents[eventid].coordinator : "" : ""}</span>
                        </div>
                    </div>
                    <div className="inf" style={{marginRight: "0px"}}>
                        <span>Additional information:</span>
                        <textarea name="Text1" rows="10" onChange={(event) => setAddInf(event.target.value)} style={{padding: "15px", fontSize: "18px"}}/>
                    </div>
                    <button className="cert btn" onClick={() => handleSendReport()}>SEND EVENT</button>
                </div>
                <div className="eventinfo">
                    <input
                        className="search"
                        type="text"
                        placeholder="Search for the volunteer"
                        style={{margin: "0px"}}
                        onChange={(event) => setSearch(event.target.value)}
                    />
                    <table>
                        <tr>
                            <th>№</th>
                            <th style={{textAlign: "left"}}>Name of volunteer</th>
                            <th>Came</th>
                        </tr>
                        {arraySF?.map((item, index) =>
                                <tr
                                    key={index}
                                    style={{backgroundColor: filteredEvents ? filteredEvents[eventid] ? filteredEvents[eventid]?.attended?.find(user => user.email === item.email) ? "lightgreen" : "" : "" : ""}}
                                >
                                    <td>{index + 1}</td>
                                    <td style={{textAlign: "left"}}>{item.firstName + " " + item.secondName}</td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            style={{margin: "0px", width: "auto"}}
                                            onChange={() => handleItemCame(item.email)}
                                            checked={item.came}/>
                                    </td>
                                </tr>
                            )
                        }
                    </table>
                </div>
            </div>
        </div>
    );
}