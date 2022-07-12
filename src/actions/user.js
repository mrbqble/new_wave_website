import axios from "axios";

export const registration = async (email, password) => {
    try {
        const response = await axios.post('http://localhost:1500/api/auth/registration', {
            email,
            password
        });
        alert(response.data.message);
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
        alert("Logged in succesfully!")
    } catch (e) {
        alert(e.response.data.message);
    }
};

// export const logout = async ()