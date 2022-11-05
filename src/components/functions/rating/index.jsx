import { useContext } from "react";
import { DefaultContext } from "../../../Context";
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

export const Rating = () => {

    const {users} = useContext(DefaultContext);
    console.log(users);

    return (
        <div className="reg block">
            <h1>Rating of volunteers</h1>
            <div style={{alignSelf: "center"}}>
                <table>
                    <tr>
                        <th>№</th>
                        <th style={{textAlign: "left"}}>Name of volunteer</th>
                        <th>Volunteering hours</th>
                        <th>Stars</th>
                    </tr>
                    {users
                        ?  users.sort((a, b) => b.volunteeringHours - a.volunteeringHours).map((item, index) => 
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td style={{textAlign: "left"}}>{item.firstName + ' ' + item.secondName}</td>
                                <td style={{textAlign: "center"}}>{item.volunteeringHours}</td>
                                <td><Rater total={5} rating={item.volunteeringHours === 0 ? 0 : item.volunteeringHours < 40 ? 1 : item.volunteeringHours < 80 ? 2 : item.volunteeringHours < 120 ? 3 : item.volunteeringHours < 160 ? 4 : 5} interactive={false}/></td>
                            </tr>
                        )
                        : <></>
                    }
                </table>
            </div>
        </div>
    );
}