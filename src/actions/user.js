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