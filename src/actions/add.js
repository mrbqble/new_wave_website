import axios from 'axios';

const link = `https://frozen-thicket-00434.herokuapp.com/api/add`;

export const getEvents = async () => {
    const response = await axios.post(`${link}/events`);
    return response.data;
};

export const getUsers = async () => {
    const response = await axios.post(`${link}/users`);
    return response.data;
};

export const getReports = async () => {
    const response = await axios.post(`${link}/reports`);
    return response.data;
};

export const certCode = async (code, email) => {
    await axios.put(`${link}/code`, {code, email});
};

export const status = async (users) => {
    const response = await axios.put(`${link}/status`, {users});
    return response.data.message;
};

export const check = async (code) => {
    const response = await axios.post(`${link}/check`, {code});
    return response.data;
};

export const attend = async (email, name, _id) => {
    await axios.post(`${link}/attend`, {email, name, _id});
};

export const leave = async (email, _id) => {
    await axios.post(`${link}/leave`, {email, _id});
}

export const report = async (bags, type, eventID, addInfo, attended, distance) => {
    const response = await axios.post(`${link}/report`, {bags, type, eventID, addInfo, attended, distance});
    alert(response.data.message)
}

export const getEducation = async () => {
    const response = await axios.post(`${link}/education`);
    return response.data;
}

export const addUniversity = async (university) => {
    const response = await axios.post(`${link}/university`, {name: university});
    return response.data;
}

export const addEducation = async (name, city, school, college) => {
    const response = await axios.post(`${link}/addEdu`, {name, city, school, college});
    return response.data;
}

export const getPlaces = async (latitude, longtitude) => {
    const response = await axios.post(`${link}/places`, {latitude, longtitude});
    return response.data;
}

export const createEvent = async (item) => {
    const response = await axios.post(`${link}/createEvent`, {item});
    return response;
}