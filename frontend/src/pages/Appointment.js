import React, { createContext, useState } from "react";

import Navbar from "../components/Navbar";
import ServiceTask from "../components/ServiceTask";
import DateTimeTask from "../components/DateTimeTask";
import DetailTask from "../components/DetailTask";
import Summary from "../components/Summary";
import TaskBar from "../components/TaskBar";
import { createNewPatient, createNewAppointment } from "../api/axios";

// TODO: Get this from backend
// const Categories = [
//     { id: 0, name: "All" },
//     { id: 1, name: "Clinic" },
//     { id: 2, name: "Dental Care" },
// ];

const TimeSlot = [
    "9:00 am - 10:00 am",
    "10:00 am - 11:00 am",
    "11:00 am - 12:00 pm",
    "12:00 am - 1:00 pm",
    "1:00 pm - 2:00 pm",
];

export const PatientContext = createContext(null);
export const AppointmentContext = createContext(null);

function Appointment() {
    const [count, setCount] = useState(0);

    const [patient, setPatient] = useState({});
    const [appointment, setAppointment] = useState({});

    const handleAppointmentCreation = async (e) => {
        e.preventDefault();
        console.log("Submit");
        console.log(appointment);

        const newPatient = await createNewPatient(appointment.patient);
        const newAppointment = await createNewAppointment(appointment);

        console.log(newPatient);
        console.log(newAppointment);
    };

    return (
        <AppointmentContext.Provider value={{ appointment, setAppointment }}>
            <PatientContext.Provider value={{ patient, setPatient }}>
                <Navbar />

                <main className="max-w-full md:max-w-full md:mx-auto px-8 flex flex-col md:flex-row md:justify-between md:gap-10 mt-6">
                    {/* Tasks */}
                    <TaskBar count={count} setCount={setCount} />

                    {/* Category */}
                    <form
                        className="flex-1 "
                        onSubmit={handleAppointmentCreation}
                    >
                        <div className="min-h-[500px] min-w-96 border border-x-gray-200 p-6 rounded-t-lg ">
                            {count === 0 ? (
                                <ServiceTask setCount={setCount} />
                            ) : (
                                <></>
                            )}
                            {count === 1 ? (
                                <DateTimeTask
                                    setCount={setCount}
                                    TimeSlot={TimeSlot}
                                />
                            ) : (
                                <></>
                            )}
                            {count === 2 ? (
                                <DetailTask setCount={setCount} />
                            ) : (
                                <></>
                            )}
                            {count === 3 ? (
                                <Summary setCount={setCount} />
                            ) : (
                                <></>
                            )}
                        </div>
                        {/* <div className="border border-t-0 border-gray-200 rounded-b-lg flex justify-end">
                            {count > 0 ? (
                                <button
                                    onClick={(e) => {
                                        setCount(count - 1);
                                    }}
                                    className="px-3 py-2 mr-8"
                                >
                                    Go Back
                                </button>
                            ) : (
                                <></>
                            )}
                            {count < Categories.length ? (
                                <button
                                    onClick={(e) => {
                                        setCount(count + 1);
                                    }}
                                    className="flex justify-center align-center my-4 mr-6 px-4 py-3 text-white bg-indigo-800 hover:bg-indigo-700 rounded-lg"
                                >
                                    Next:{" "}
                                </button>
                            ) : (
                                <></>
                            )}
                            {count === Categories.length ? (
                                <button
                                    type="submit"
                                    className="flex justify-center align-center my-4 mr-6 px-4 py-3 text-white bg-indigo-800 hover:bg-indigo-700 rounded-lg"
                                >
                                    Book Appointment{" "}
                                </button>
                            ) : (
                                <></>
                            )}
                        </div> */}
                    </form>
                </main>
            </PatientContext.Provider>
        </AppointmentContext.Provider>
    );
}

export default Appointment;
