import { useContext } from "react";
import { getReports } from '../../../actions/add';
import { DefaultContext } from "../../../Context";
import React, { useEffect, useState } from 'react';

export const ReportList = () => {

    const [reports, setReports] = useState();
    const [search, setSearch] = useState('');
    const { events } = useContext(DefaultContext);
    const arraySF = reports;

    useEffect(() => {
        getReports().then((response) => setReports(response));
    }, [])

    return (
        <div className='reg block'>
            <h1>List of reports</h1>
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