import axios from "axios";

const API_URL = "http://localhost:5000";
const config = {
    headers: {
        "Content-Type": "application/json",
    },
};

// Patients
const createNewPatient = async (patient) => {
    console.log(patient);
    try {
        const response = await axios.post(
            `${API_URL}/patient/`,
            patient,
            config
        );

        return response.data;
    } catch (err) {
        console.error(err);
        return err.message;
    }
};

const getPatientById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/patient/${id}`, config);

        return response.data;
    } catch (err) {
        console.error(err);
        return err.message;
    }
};

const getAllPatients = async () => {
    try {
        const response = await axios.get(`${API_URL}/patient/`, config);

        return response.data;
    } catch (err) {
        console.error(err);
        return err.message;
    }
};

const deletePatient = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/patient/${id}`, config);

        return { status: response.status, data: response.data };
    } catch (err) {
        console.error(err);
        return err.message;
    }
};

const updatePatient = async (patient) => {
    try {
        console.log(patient);
        // const response = await axios.put(`${API_URL}/patient/${id}`, config);

        // return { status: response.status, data: response.data };
    } catch (err) {
        console.error(err);
        return err.message;
    }
};

export {
    createNewPatient,
    getPatientById,
    getAllPatients,
    deletePatient,
    updatePatient,
};
