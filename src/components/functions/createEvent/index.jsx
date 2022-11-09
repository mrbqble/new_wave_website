import React from 'react';
import { useState } from "react";
import { useEffect } from 'react';
import { useContext } from "react";
import Compressor from 'compressorjs';
import { DefaultContext } from "../../../Context";
import { Input } from "../../auth/fullform/Input";
import { getCoordinators } from '../../../actions/user';
import { createEvent } from '../../../actions/event';
import { Select } from "../../auth/fullform/Select";

const formats = ["Offline", "Online"];
const types = ["Cleaning day", "Tree planting", "Shelter visiting"];

export const CreateEvent = () => {
    
    const [hours, setHours] = useState(0);
    const [search, setSearch] = useState('');
    const [minutes, setMinutes] = useState(0);
    const [partner, setPartner] = useState("");
    const { edu } = useContext(DefaultContext);
    const [organizator, setOrganizator] = useState();
    const [item, setItem] = useState({
        title: "",
        text: "",
        image: "",
        type: types[0],
        format: formats[0],
        city: edu?.countries ? edu?.countries[0]?.cities ? edu?.countries[0]?.cities[0]?.name : "" : "",
        location: "",
        mapLink: "",
        places: 0,
        date: "2022-02-22",
        startTime: "",
        endTime: "",
        duration: "",
        addInfo: "",
        partners: [],
        organizators: []
    });

    const handleNumbers = (value) => {
        return value ? parseInt(value.replace(/[^0-9\s]/g, "")) : 0;
    };

    const getBase64 = (file) => {
        var reader = new FileReader();
        new Compressor(file, {
            quality: 0.1,
            success: (res) => {      
                reader.readAsDataURL(res);
                reader.onload = function () {
                    setItem({...item, image: reader.result});
                };
            },
        });
    }

    useEffect(() => {
        getCoordinators().then((response) => setOrganizator(response))
    }, [])

    useEffect(() => {
        var h = parseInt(item.endTime.split(":")[0]) - parseInt(item.startTime.split(":")[0]);
        var m = parseInt(item.endTime.split(":")[1]) - parseInt(item.startTime.split(":")[1]);
        if (m < 0) {
            h -= 1;
            m += 60;
        }
        setHours(h);
        setMinutes(m);
        setItem({...item, duration: `${h}.${m}`})
    }, [item.startTime, item.endTime])

    return (
        <div className="reg block">
            <Input
                title="Title"
                value={item.title}
                placeholder="Enter the title"
                onChange={(e) => setItem({ ...item, title: e.target.value })}
            />
            <div className="field">
                <p>Text:</p>
                <textarea
                    rows={10}
                    value={item.text}
                    placeholder="Enter the text"
                    onChange={(e) => setItem({ ...item, text: e.target.value })}
                />
            </div>
            <div className="field">
                <Input
                    title="Image"
                    type="file"
                    onChange={(e) => getBase64(e.target.files[0])}
                />
                <div className='frame'>
                    <img src={item?.image} alt="Event image"/>
                </div>
            </div>
            <Select
                title="Type"
                value={item.type}
                onChange={(e) => setItem({...item, type: e.target.value})}
                options={types}
            />
            <Select
                title="Format"
                value={item.format}
                onChange={(e) => setItem({...item, format: e.target.value})}
                options={formats}
            />
            <Select
                title="City"
                value={item.city}
                onChange={(e) => setItem({...item, city: e.target.value})}
                options={edu.countries ? edu?.countries[0]?.cities?.map((item) => {return item.name}) : []}
            />
            <Input
                title="Location"
                value={item.location}
                placeholder="Enter the location"
                onChange={(e) => setItem({ ...item, location: e.target.value })}
            />
            <Input
                title="Link"
                value={item.mapLink}
                placeholder="Enter the link of map for location"
                onChange={(e) => setItem({ ...item, mapLink: e.target.value })}
            />
            <Input
                title="Volunteers needed"
                value={item.places}
                onChange={(e) => setItem({ ...item, places: handleNumbers(e.target.value) })}
            />
            <Input
                title="Date"
                type="date"
                value={item.date}
                onChange={(e) => setItem({ ...item, date: e.target.value })}
            />
            <div className='field'>
                <Input
                    title="Time to start"
                    type="time"
                    value={item.startTime}
                    onChange={(e) => setItem({ ...item, startTime: e.target.value })}
                />
                <Input
                    title="Time to end"
                    type="time"
                    value={item.endTime}
                    onChange={(e) => setItem({ ...item, endTime: e.target.value })}
                />
                {item.startTime && item.endTime && <p>Duration: {hours} hours {minutes} minutes</p>}
            </div>
            <div className="field">
                <p>Additional information:</p>
                <textarea
                    rows={10}
                    value={item.addInfo}
                    placeholder="Enter additional information"
                    onChange={(e) => setItem({ ...item, addInfo: e.target.value })}
                />
            </div>
            <div className='field'>
                <Input
                    title="Partners"
                    value={partner}
                    placeholder="Enter the partner name"
                    onChange={(e) => setPartner(e.target.value)}
                />
                <a className='cert btn' onClick={() => {
                    setItem({...item, partners: [...item.partners, partner]})
                    setPartner("")
                }}>Add partner</a>
                <div className='eventinfo'>
                    {item.partners?.map((thing, index) => 
                        <div className='data' key={index}>
                            <p>{thing}</p>
                            <a className='btn' onClick={() => setItem({...item, partners: item.partners.filter(part => part !== item.partners[index])})}>delete</a>
                        </div>
                    )}
                </div>
            </div>
            <div className='field'>
                <p>Organizators:</p>
                <input
                    type="text"
                    className="search"
                    placeholder="Search for the organizator"
                    onChange={(event) => setSearch(event.target.value)}
                />
                <div className="eventinfo">
                    {organizator?.filter(item => (item.firstName + "" + item.secondName).substring(0, search.length).toLowerCase() === search.toLowerCase())?.map((user, index) => 
                        <div className="data" key={index}>
                            <p>{user.firstName + " " + user.secondName}</p>
                            <a className='btn' onClick={() => {
                                setItem({...item, organizators: [...item.organizators, user]})
                                setOrganizator(organizator.filter(item => item.email !== organizator[index].email))
                            }}>Add as organizator</a>
                        </div>
                    )}
                </div>
                <div className="eventinfo">
                    {item.organizators?.filter(item => (item.firstName + "" + item.secondName).substring(0, search.length).toLowerCase() === search.toLowerCase())?.map((thing, index) => 
                        <div className='data' key={index}>
                            <p>{thing.firstName + " " + thing.secondName}</p>
                            <a className='btn' onClick={() => {
                                setItem({...item, organizators: item.organizators.filter(part => part.email !== item.organizators[index].email)})
                                setOrganizator([...organizator, thing])
                            }}>delete</a>
                        </div>
                    )}
                </div>
            </div>
            <a className="cert btn" onClick={() => createEvent(item)}>Submit</a>
        </div>
    );
}
