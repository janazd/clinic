import axios from "axios";

const API_URL = "http://localhost:5000";
const config = {
    headers: {
        "Content-Type": "application/json",
    },
};

const adminCreateNewAppointment = async (appointment) => {
    const pid = appointment.pid;
    const doc_id = appointment.doc_id;
    const service = appointment.service;
    const date = appointment.date;
    const timeSlot = appointment.timeSlot;
    const reason = appointment.reason;

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
const getAllAppointments = async () => {
    try {
        const response = await axios.get(`${API_URL}/appointment/`, config);
        return response.data;
    } catch (err) {
        console.error(err);
        return err.message;
    }
};

const deleteAppointment = async (id) => {
    try {
        const response = await axios.delete(
            `${API_URL}/appointment/${id}`,
            config
        );

        return { status: response.status, data: response.data };
    } catch (err) {
        console.error(err);
        return err.message;
    }
};

const updateAppointment = async (id, appointment) => {
    try {
        const response = await axios.put(
            `${API_URL}/appointment/${id}`,
            appointment,
            config
        );

        return { status: response.status, data: response.data };
    } catch (err) {
        console.error(err);
        return err.message;
    }
};

export {
    createNewAppointment,
    adminCreateNewAppointment,
    getAllAppointments,
    deleteAppointment,
    updateAppointment,
};
