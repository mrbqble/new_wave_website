import { useState } from "react";
import { check } from "../../actions/user";

export const Verificator = () => {

    const [code, setCode] = useState('');
    const [data, setData] = useState();
    const [year, setYear] = useState('');

    const handleCheck = () => {
        check(code).then(response => {
            setData(response);
            setYear(code.split('-')[1]);
        });
    }

    return (
        <div className="block">
            <h1>Verify certificates</h1>
            <div className="inf">
                <div className="data">
                    <div>
                        <p>Code on your certificate</p>
                        <input
                            type="text"
                            value={code}
                            placeholder="CRTF-2022-KZ-VOL-0001-NEW"
                            onChange={(event) => setCode(event.target.value)}
                        />
                    </div>
                    <a className="cert btn" onClick={() => handleCheck()}>CHECK THE CODE</a>
                </div>
                <div>
                    <h3>Recepient</h3>
                    <div className="inf">
                        <div
                            className="data"
                        >
                            <p>Name:</p>
                            <p>Year:</p>
                            <p>Country:</p>
                            <p>Volunteering hours:</p>
                            <p>Type of certification:</p>
                        </div>
                        {data
                            ? <div className="data">
                                <p>{data.name}</p>
                                <p>{year}</p>
                                <p>{data.country}</p>
                                <p>{data.volunteeringHours}</p>
                                <p>{data.type}</p>
                            </div>
                            : <p className="text" style={{textAlign: "center"}}>There is no certificate<br/>with such code.</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};