import axios from "axios";

const API_URL = "http://localhost:5000";
const config = {
    headers: {
        "Content-Type": "application/json",
    },
};

// Users
const loginUser = async (user) => {
    const { email, password } = user;

    try {
        const response = await axios.post(
            `${API_URL}/user/login`,
            { email, password },
            config
        );
        console.log(response);

        localStorage.setItem("userInfo", JSON.stringify(response.data));

        return { status: response.status, data: response.data };
    } catch (err) {
        console.error(err);
        return { status: err.response.status, data: err.response.data };
    }
};

// Doctors
const createNewDoctor = async (doctor) => {
    const { firstname, lastname, email, password, specialization } = doctor;

    try {
        const response = await axios.post(
            `${API_URL}/doctor/`,
            { firstname, lastname, email, password, specialization },
            config
        );

        return response.data;
    } catch (err) {
        console.error(err);
        return err.message;
    }
};

// Patients

const createNewPatient = async (patient) => {
    const { fname, lname, gender, yob, email, phone } = patient;

    const response = await axios.post(
        `${API_URL}/patient/`,
        { firstname: fname, lastname: lname, gender, yob, email, phone },
        config
    );

    console.log(response);
    return response;
};

export { loginUser, createNewDoctor, createNewPatient };
