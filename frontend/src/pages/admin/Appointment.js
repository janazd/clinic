import { useState } from "react";
import createNewAppointment from "../../api/appointment";

function AdminAppointment() {
    const [appointment, setAppointment] = useState({});

    const handleAppointmentChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setAppointment((v) => ({ ...v, [name]: value }));
    };

    const handleAppointmentSubmit = (e) => {
        e.preventDefault();
        createNewAppointment(appointment);
    };

    return (
        <>
            <h1>Appointment</h1>

            <div>
                <h2>Create new appointment</h2>
                <form onSubmit={handleAppointmentSubmit}>
                    <div>
                        Doctor ID
                        <input
                            type="text"
                            name="doc_id"
                            value={appointment.doc_id}
                            onChange={handleAppointmentChange}
                        />
                    </div>
                    <div>
                        Patient ID
                        <input
                            type="text"
                            name="pid"
                            value={appointment.pid}
                            onChange={handleAppointmentChange}
                        />
                    </div>
                    <div>
                        Service
                        <input
                            type="text"
                            name="service"
                            value={appointment.service}
                            onChange={handleAppointmentChange}
                        />
                    </div>
                    <div>
                        Patient ID
                        <input
                            type="text"
                            name="pid"
                            value={appointment.pid}
                            onChange={handleAppointmentChange}
                        />
                    </div>
                    <div>
                        Date
                        <input
                            type="text"
                            name="date"
                            value={appointment.date}
                            onChange={handleAppointmentChange}
                        />
                    </div>
                    <div>
                        Time Slot
                        <input
                            type="text"
                            name="timeSlot"
                            value={appointment.timeSlot}
                            onChange={handleAppointmentChange}
                        />
                    </div>
                    <div>
                        Reason
                        <input
                            type="text"
                            name="reason"
                            value={appointment.reason}
                            onChange={handleAppointmentChange}
                        />
                    </div>
                </form>
            </div>
        </>
    );
}

export default AdminAppointment;
