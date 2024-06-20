import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Navbar from "../components/Navbar";

import AppointmentTask from "../components/AppointmentTask";
import BillingTask from "../components/BillingTask";
import PrescriptionTask from "../components/PrescriptionTask";
import PatientTask from "../components/PatientTask";
import Doctorpic from "../assets/Doctorpic.jpg";

import DoctorTaskBar from "../components/DoctorTaskBar";

// TODO: Get this from backend

function Doctor() {
    const [count, setCount] = useState(0);

    const docName = "sara";

    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center">
                <img
                    src={Doctorpic}
                    alt="Doctor's pic"
                    className="rounded-full w-32 h-32"
                />
                <p className="text-xl font-bold">Welcome Doctor {docName}!</p>
            </div>

            <main className="max-w-full md:max-w-6xl md:mx-auto px-8 flex flex-col md:flex-row md:justify-center md:gap-10 mt-6">
                {/* Tasks */}
                <DoctorTaskBar count={count} setCount={setCount} />

                <div className="flex-1">
                    {/* Category */}
                    <div className="min-h-[500px] min-w-96 border border-x-gray-200 p-6 rounded-t-lg">
                        {count === 0 ? <AppointmentTask /> : <></>}
                        {count === 1 ? <BillingTask /> : <></>}
                        {count === 2 ? <PrescriptionTask /> : <></>}
                        {count === 3 ? <PatientTask /> : <></>}
                    </div>
                </div>
            </main>
        </>
    );
}

export default Doctor;
