import { useContext } from "react";
import { getReports } from '../../../actions/add';
import { DefaultContext } from "../../../Context";
import React, { useEffect, useState } from 'react';

export const ReportList = () => {

    const [reports, setReports] = useState();
    const [search, setSearch] = useState('');
    const { events } = useContext(DefaultContext);
    const arraySF = reports?.filter(item => item.coordinator.substring(0, search.length).toLowerCase() === search.toLowerCase());

    console.log(reports, events);

    useEffect(() => {
        getReports().then((response) => setReports(response));
    }, [])

    return (
        <div className='reg block'>
            <div className="eventinfo">
                <input
                    type="text"
                    className="search"
                    style={{margin: "0px"}}
                    placeholder="Search for the volunteer"
                    onChange={(event) => setSearch(event.target.value)}
                />
                {arraySF?.map((item, index) => 
                    <div className='report' key={index}>
                        <span>{item.coordinator}</span>
                        <span>{item.eventid}</span>
                    </div>
                )}
            </div>
        </div>
    )
}
