import axios from "axios";

export const profile = async (email, token) => {
    const response = await axios.post('http://localhost:1500/api/auth/profile', {email, token});
    localStorage.setItem('user', response.data);
    return response.data;
};

export const login = async (email, password, handleSetIsAuth) => {
    const response = await axios.post('http://localhost:1500/api/auth/login', {email, password});
    if (!response.data.message) {
        handleSetIsAuth();
        localStorage.setItem('token', response.data);
    }
    return response;
};

export const registration = async (item) => {
    console.log(item);
    await axios.post('http://localhost:1500/api/auth/registration', {item});
};

export const editProfile = async (item) => {
    await axios.post('http://localhost:1500/api/auth/edit', {item});
};

export const profilePhoto = async (email, file) => {
    const response = await axios.post("http://localhost:1500/api/auth/profilePhoto", {email, file});
    console.log(response.data);
}

export const getPlaces = async (latitude, longtitude) => {
    const response = await axios.post("http://localhost:1500/api/auth/places", {latitude, longtitude});
    return response.data;
}