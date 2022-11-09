import { useContext } from "react";
import { getReports } from '../../../actions/add';
import { DefaultContext } from "../../../Context";
import React, { useEffect, useState } from 'react';

export const EventList = () => {

    const [reports, setReports] = useState();
    const [search, setSearch] = useState('');
    const { events } = useContext(DefaultContext);
    const arraySF = reports;

    return (
        <div className='reg block'>
            <h1>List of events</h1>
            <div className="eventinfo">
                <input
                    type="text"
                    className="search"
                    style={{margin: "0px"}}
                    placeholder="Search for the report"
                    onChange={(event) => setSearch(event.target.value)}
                />
                {arraySF?.map((item, index) => 
                    <div className='report' key={index}>
                        <span>{item.eventID}</span>
                    </div>
                )}
            </div>
        </div>
    )
}
