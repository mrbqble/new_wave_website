import axios from "axios";

const link = "https://frozen-thicket-00434.herokuapp.com/api"

export const getEvents = async () => {
    const response = await axios.post('http://localhost:1500/api/add/events');
    return response.data;
};

export const getUsers = async () => {
    const response = await axios.post('http://localhost:1500/api/add/users');
    return response.data;
};

export const certCode = async (code, email) => {
    await axios.put('http://localhost:1500/api/add/code', {code, email});
};

export const status = async (users) => {
    const response = await axios.put('http://localhost:1500/api/add/status', {users});
    return response.data.message;
};

export const check = async (code) => {
    const response = await axios.post('http://localhost:1500/api/add/check', {code});
    return response.data;
};

export const attend = async (email, name, _id) => {
    await axios.post('http://localhost:1500/api/add/attend', {email, name, _id});
};

export const leave = async (email, _id) => {
    await axios.post('http://localhost:1500/api/add/leave', {email, _id});
}

export const report = async (bags, type, eventid, addinfo, attended, distance, coordinator) => {
    const response = await axios.post('http://localhost:1500/api/add/report', {bags, type, eventid, addinfo, attended, distance, coordinator});
    alert(response.data.message)
}

export const getEducation = async () => {
    const response = await axios.post("http://localhost:1500/api/add/education");
    return response.data;
}

export const addUniversity = async (university) => {
    const response = await axios.post("http://localhost:1500/api/add/university", {name: university});
    return response.data;
}

export const addEducation = async (name, city, school, college) => {
    const response = await axios.post("http://localhost:1500/api/add/addEdu", {name, city, school, college});
    return response.data;
}