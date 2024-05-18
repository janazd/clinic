import { createContext, useState } from "react";

import Navbar from "../components/Navbar";
import ServiceTask from "../components/ServiceTask";
import DateTimeTask from "../components/DateTimeTask";
import DetailTask from "../components/DetailTask";
import Summary from "../components/Summary";
import TaskBar from "../components/TaskBar";
import { createNewPatient, createNewAppointment } from "../api/axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const TimeSlot = [
    "9:00 am - 10:00 am",
    "10:00 am - 11:00 am",
    "11:00 am - 12:00 pm",
    "12:00 am - 1:00 pm",
    "1:00 pm - 2:00 pm",
];

export const AppointmentContext = createContext(null);

function Appointment() {
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [appointment, setAppointment] = useState({});

    const navigate = useNavigate();

    const handleAppointmentCreation = async (e) => {
        e.preventDefault();
        console.log("Submit");
        console.log(appointment);

        setIsLoading(true);
        const newPatient = await createNewPatient(appointment.patient);
        const newAppointment = await createNewAppointment(
            appointment,
            newPatient._id
        );

        if (newAppointment.status === 201 && newAppointment.status === 201) {
            toast.success("Appointment Created");
            navigate("/");
        }
        setIsLoading(false);
        console.log(newPatient);
        console.log(newAppointment);
    };

    return (
        <AppointmentContext.Provider value={{ appointment, setAppointment }}>
            <Navbar />

            <main className="max-w-full md:max-w-full md:mx-auto px-8 flex flex-col md:flex-row md:justify-between md:gap-10 mt-6">
                {/* Tasks */}
                <TaskBar count={count} setCount={setCount} />

                {/* Category */}
                <form className="flex-1 " onSubmit={handleAppointmentCreation}>
                    <div className="min-h-[500px] min-w-96 border border-x-gray-200 p-6 rounded-t-lg flex flex-col justify-between">
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
                            <Summary
                                setCount={setCount}
                                isLoading={isLoading}
                            />
                        ) : (
                            <></>
                        )}
                    </div>
                </form>
            </main>
        </AppointmentContext.Provider>
    );
}

export default Appointment;
