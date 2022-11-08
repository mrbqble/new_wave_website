import axios from 'axios';

const link = `https://frozen-thicket-00434.herokuapp.com/api/auth`;

export const profile = async (email, token) => {
    const response = await axios.post(`${link}/profile`, {email, token});
    localStorage.setItem(`user`, response.data);
    return response.data;
};

export const login = async (email, password, handleSetIsAuth) => {
    const response = await axios.post(`${link}/login`, {email, password});
    if (!response.data.message) {
        handleSetIsAuth();
        localStorage.setItem(`token`, response.data);
    }
    return response;
};

export const registration = async (item) => {
    await axios.post(`${link}/registration`, {item});
};

export const editProfile = async (item) => {
    await axios.post(`${link}/edit`, {item});
};

export const profilePhoto = async (email, file) => {
    await axios.post(`${link}/profilePhoto`, {email, file});
}

export const getCertificate = async (firstName, secondName, city, code, year, email, country, volunteeringHours) => {
    const response = await axios.post(`${link}/certificate`, {firstName, secondName, city, code, year, email, country, volunteeringHours});
    return response.data;
}