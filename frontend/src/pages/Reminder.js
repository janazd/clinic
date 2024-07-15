import React, { useState, useEffect } from "react";
import axios from "axios";
import Calendar from "react-calendar";

import Navbar from "../components/Navbar";
import "react-calendar/dist/Calendar.css";

const Reminder = () => {
    const [appointments, setAppointments] = useState([]);
    const [date, setDate] = useState(new Date());

    // TODO: What we do here?
    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await axios.get(
                    "/appointments/doctor/:doctorId"
                ); // Replace with actual doctor ID
                setAppointments(response.data);
            } catch (error) {
                console.error("Error fetching appointments:", error);
            }
        };

        fetchAppointments();
    }, []);

    const tileContent = ({ date, view }) => {
        if (view === "month") {
            const dayAppointments = appointments.filter(
                (appointment) =>
                    new Date(appointment.date).toDateString() ===
                    date.toDateString()
            );

            return dayAppointments.length ? (
                <ul className="list-none p-0 m-0">
                    {dayAppointments.map((appointment) => (
                        <li
                            key={appointment._id}
                            className="text-xs text-white bg-blue-500 rounded p-1 mb-1"
                        >
                            {appointment.patientName} -{" "}
                            {new Date(appointment.date).toLocaleTimeString()}
                        </li>
                    ))}
                </ul>
            ) : null;
        }
    };

    return (
        <div className="bg-blue-200 min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow flex items-center justify-center">
                <div className="w-full max-w-4xl bg-blue-950 mx-auto rounded-3xl flex flex-col items-center justify-center p-8 shadow-2xl shadow-blue-900">
                    <h1 className="text-5xl text-white mb-8">Reminders</h1>
                    <div className="w-full flex justify-center">
                        <div className="w-full flex justify-center">
                            <Calendar
                                onChange={setDate}
                                value={date}
                                tileContent={tileContent}
                                className="bg-white rounded-lg shadow-lg p-4 w-full" // Set width to 100%
                                style={{ fontSize: "1.5rem", width: "100%" }} // Adjust font size and width
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reminder;
