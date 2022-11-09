import axios from 'axios';

const link1 = `https://frozen-thicket-00434.herokuapp.com/api/event`;
const link = `http://localhost:1500/api/auth`;

export const getEvents = async () => {
    const response = await axios.post(`${link}/events`);
    return response.data;
};

export const getAllEvents = async () => {
    const response = await axios.post(`${link}/allEvents`);
    return response.data;
};

export const attend = async (email, name, _id) => {
    await axios.post(`${link}/attend`, {email, name, _id});
};

export const leave = async (email, _id) => {
    await axios.post(`${link}/leave`, {email, _id});
}

export const createEvent = async (item) => {
    const response = await axios.post(`${link}/createEvent`, {item});
    return response;
}