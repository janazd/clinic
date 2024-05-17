import axios from "axios";

const API_URL = "http://localhost:5000";
const config = {
    headers: {
        "Content-Type": "application/json",
    },
};

const createNewAppointment = async (appointment, pid) => {
    const doc_id = appointment.service.doc_id;
    const service = appointment.service._id;
    const date = appointment.date.toDateString();
    const timeSlot = appointment.time;
    const reason = appointment.note;

    console.log({
        pid,
        doc_id,
        service,
        date,
        timeSlot,
        reason,
    });

    const response = await axios.post(
        `${API_URL}/appointment/`,
        {
            pid,
            doc_id,
            service,
            date,
            timeSlot,
            reason,
        },
        config
    );

    console.log(response);
    return response;
};

export default createNewAppointment;
