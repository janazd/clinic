import axios from "axios";

const API_URL = "http://localhost:5000";
const config = {
    headers: {
        "Content-Type": "application/json",
    },
};

const createNewPatient = async (patient) => {
    const { fname, lname, gender, yob, email, phone, note } = patient;

    const response = await axios.post(
        `${API_URL}/patient/`,
        { firstname: fname, lastname: lname, gender, yob, email, phone },
        config
    );

    console.log(response);
    return response;
};

export { createNewPatient };
