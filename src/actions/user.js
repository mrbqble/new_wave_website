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
    console.log(item);
    await axios.post(`${link}/registration`, {item});
};

export const editProfile = async (item) => {
    await axios.post(`${link}/edit`, {item});
};

export const profilePhoto = async (email, file) => {
    const response = await axios.post(`${link}/profilePhoto`, {email, file});
    console.log(response.data);
}

export const getPlaces = async (latitude, longtitude) => {
    const response = await axios.post(`${link}/places`, {latitude, longtitude});
    return response.data;
}