import axios from "axios";

const API_URL = "http://localhost:5000";
const config = {
    headers: {
        "Content-Type": "application/json",
    },
};

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

export default createNewDoctor;
