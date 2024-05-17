import axios from "axios";

const API_URL = "http://localhost:5000";
const config = {
    headers: {
        "Content-Type": "application/json",
    },
};

const createNewAppointment = async (appointment) => {
    // const pid = appointment.patient._id
    // const doc_id = appointment

    const response = await axios.post(
        `${API_URL}/appointment/`,
        appointment,
        config
    );

    console.log(response);
    return response;
};

export default createNewAppointment;
