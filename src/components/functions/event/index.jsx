import React from 'react';
import { useState } from "react";
import Compressor from 'compressorjs';
import { Input } from "../../auth/fullform/Input";
import { createEvent } from '../../../actions/add';
import { Select } from "../../auth/fullform/Select";

const formats = ["Offline", "Online"];
const types = ["Cleaning day", "Tree planting", "Shelter visiting"];

export const CreateEvent = () => {
    
    const [partner, setPartner] = useState("");
    const [organizator, setOrganizator] = useState("");
    const [item, setItem] = useState({
        title: "",
        text: "",
        image: "",
        type: types[0],
        format: formats[0],
        city: "",
        location: "",
        mapLink: "",
        places: 0,
        date: "2022-02-22",
        startTime: "",
        endTime: "",
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

    return (
        <div className="reg block">
            <pre>{JSON.stringify(item, null, "\t")}</pre>
            <Input
                title="Title"
                value={item.title}
                placeholder="Enter the title"
                onChange={(e) => setItem({ ...item, title: e.target.value })}
            />
            <Input
                title="Text"
                value={item.text}
                placeholder="Enter the text"
                onChange={(e) => setItem({ ...item, text: e.target.value })}
            />
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
            <Input
                title="City"
                value={item.city}
                placeholder="Enter the city"
                onChange={(e) => setItem({ ...item, city: e.target.value })}
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
                    placeholder="Enter the partner"
                    onChange={(e) => setPartner(e.target.value)}
                />
                <a className='cert btn' onClick={() => {
                    setItem({...item, partners: [...item.partners, partner]})
                    setPartner("")
                }}>Add partner</a>
                <div className='eventinfo'>
                    {item.partners?.map((thing, index) => 
                        <div className='data'>
                            <p>{thing}</p>
                            <a className='btn' onClick={() => setItem({...item, partners: item.partners.filter(part => part !== item.partners[index])})}>delete</a>
                        </div>
                    )}
                </div>
            </div>
            <div className='field'>
                <Input
                    title="Organizators"
                    value={organizator}
                    placeholder="Enter the organizator"
                    onChange={(e) => setOrganizator(e.target.value)}
                />
                <a className='cert btn' onClick={() => {
                    setItem({...item, organizators: [...item.organizators, organizator]})
                    setOrganizator("")
                }}>Add organizator</a>
                <div className="eventinfo">
                    {item.organizators?.map((thing, index) => 
                        <div className='data'>
                            <p>{thing}</p>
                            <a className='btn' onClick={() => setItem({...item, organizators: item.organizators.filter(part => part !== item.organizators[index])})}>delete</a>
                        </div>
                    )}
                </div>
            </div>
            <a className="cert btn" onClick={() => createEvent(item)}>Submit</a>
        </div>
    );
}
