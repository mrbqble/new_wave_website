import axios from "axios";

export const getEvents = async () => {
    const response = await axios.post('http://localhost:1500/api/auth/events');
    return response.data;
};

export const profile = async (email) => {
    const response = await axios.post('http://localhost:1500/api/auth/profile', {email});
    return response.data;
};

export const login = async (
    email,
    password,
    handleSetIsAuth
) => {
    const response = await axios.post('http://localhost:1500/api/auth/login', {
        email,
        password
    });
    handleSetIsAuth();
    localStorage.setItem('token', response.data.token);
};

export const registration = async (
    name,
    city,
    email,
    grade,
    country,
    password,
    telegram,
    instagram,
    dateOfBirth,
    affiliation,
    phoneNumber,
    volunteeringHours
) => {
    await axios.post('http://localhost:1500/api/auth/registration', {
        name,
        city,
        email,
        grade,
        country,
        password,
        telegram,
        instagram,
        dateOfBirth,
        affiliation,
        phoneNumber,
        volunteeringHours
    });
};

export const certCode = async (code, email) => {
    await axios.put('http://localhost:1500/api/auth/code', {code, email});
};

export const check = async (code) => {
    const response = await axios.post('http://localhost:1500/api/auth/check', {code});
    return response.data;
};

export const attend = async (email, name, _id) => {
    await axios.post('http://localhost:1500/api/auth/attend', {email, name, _id});
};

export const leave = async (email, _id) => {
    await axios.post('http://localhost:1500/api/auth/leave', {email, _id});
}