import { useContext, useEffect } from "react";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";
import { AppointmentContext } from "../pages/Appointment";

const DateTimeTask = (props) => {
    const { appointment, setAppointment } = useContext(AppointmentContext);

    const { setCount, TimeSlot } = props;

    useEffect(() => {
        setAppointment((a) => ({ ...a, date: new Date() }));
    }, [setAppointment]);

    return (
        <>
            <div className="text-indigo-800 font-bold mb-3">Date & Time</div>
            <div className="flex flex-col md:flex-row gap-7">
                <div className="flex justify-center">
                    <Calendar
                        className="!w-full md:w-auto !border-gray-200"
                        value={appointment.date}
                        onChange={(e) =>
                            setAppointment((a) => ({ ...a, date: e, time: "" }))
                        }
                    />
                </div>
                <div className="border border-gray-200 py-6 px-4">
                    <div className="font-bold mb-5">Time Slot</div>
                    <ul className="flex flex-wrap gap-5">
                        {TimeSlot.map((t, c) => (
                            <li key={c}>
                                <input
                                    id={c}
                                    name="timeslot"
                                    type="radio"
                                    value={t}
                                    checked={appointment.time === t}
                                    onChange={(e) =>
                                        setAppointment((a) => ({
                                            ...a,
                                            time: t,
                                        }))
                                    }
                                    className="hidden"
                                />
                                <label
                                    htmlFor={c}
                                    className={`border border-gray-200 hover:border-black cursor-pointer rounded-lg px-4 py-2 ${
                                        appointment.time === t
                                            ? "border-2 border-black"
                                            : ""
                                    }`}
                                >
                                    {t}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="border border-t-0 border-gray-200 rounded-b-lg flex justify-end">
                <button
                    onClick={(e) => {
                        setCount((count) => count - 1);
                    }}
                    className="px-3 py-2 mr-8"
                >
                    Go Back
                </button>
                <button
                    onClick={(e) => {
                        setCount((count) => count + 1);
                    }}
                    className="flex justify-center align-center my-4 mr-6 px-4 py-3 text-white bg-indigo-800 hover:bg-indigo-700 disabled:bg-gray-400 rounded-lg"
                    disabled={
                        appointment.date === undefined ||
                        appointment.time === undefined ||
                        appointment.time === ""
                    }
                >
                    Next:{" "}
                </button>
            </div>
        </>
    );
};

export default DateTimeTask;
