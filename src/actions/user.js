import axios from "axios";

export const registration = async (email, password, name, dateOfBirth, country, city, affiliation, grade, phoneNumber, instagram, telegram, volunteeringHours) => {
    try {
        const response = await axios.post('http://localhost:1500/api/auth/registration', {
            email,
            password,
            name,
            dateOfBirth,
            country,
            city,
            affiliation,
            grade,
            phoneNumber,
            instagram,
            telegram,
            volunteeringHours
        });
        console.log(response.data.message);
    } catch (error) {
        alert(error.response.data.message);
    }
};

export const login = async (email, password, handleSetIsAuth) => {
    try {
        const response = await axios.post('http://localhost:1500/api/auth/login', {
            email,
            password
        });
        localStorage.setItem('token', response.data.token);
        handleSetIsAuth();
        console.log("Logged in succesfully!")
    } catch (e) {
        alert(e.response.data.message);
    }
};

export const profile = async (email) => {
    try {
        const response = await axios.post('http://localhost:1500/api/auth/profile', {
            email
        });
        console.log("Got data succesfully!");
        return response.data;
    } catch (e) {
        alert(e.response.data.message);
    }
};
