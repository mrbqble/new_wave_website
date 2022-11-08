import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DefaultContext } from "../../../Context";

export const AdminPage = () => {

    const navigate = useNavigate();
    const { users, setUsers } = useContext(DefaultContext);

    return (
        <div className="reg block eventinfo">
            <a className="cert btn" onClick={() => navigate("/status")}>Change statuses</a>
            <a className="cert btn" onClick={() => navigate("/reportList")}>See reports</a>
        </div>
    )
}
