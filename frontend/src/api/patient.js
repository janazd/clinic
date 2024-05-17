import axios from "axios";

const API_URL = "http://localhost:5000";
const config = {
    headers: {
        "Content-Type": "application/json",
    },
};

// Patients
const createNewPatient = async (patient) => {
    const response = await axios.post(`${API_URL}/patient/`, patient, config);

    console.log(response);
    return response;
};

export default createNewPatient;
