import { useEffect, useState } from "react";
import {
    adminCreateNewAppointment,
    updateAppointment,
} from "../api/appointment";
import { getAllPatients } from "../api/patient";
import { getAllDoctors } from "../api/doctors";
import { getAllServices } from "../api/service";

import { PlusIcon, PencilIcon, XSVG } from "../assets";

function NewAppointment({
    isHidden,
    setIsHidden,
    isEdit,
    appointment,
    setAppointment,
    setAppointments,
}) {
    const [allPatients, setAllPatients] = useState([]);
    const [allDoctors, setAllDoctors] = useState([]);
    const [allServices, setAllServices] = useState([]);

    useEffect(() => {
        async function fetchData() {
            setAllPatients(await getAllPatients());
            setAllDoctors(await getAllDoctors());
            setAllServices(await getAllServices());
        }

        fetchData();
    }, []);

    const handleAppointmentChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setAppointment((v) => ({ ...v, [name]: value }));
    };

    const handleAppointmentSubmit = (e) => {
        e.preventDefault();
        if (isEdit) {
            updateAppointment(appointment);
        } else {
            adminCreateNewAppointment(appointment);
            setAppointments((prev) => [...prev, appointment]);
            setIsHidden(true);
        }
    };

    const AllPatients = () => {
        return (
            <>
                {allPatients.map((p, i) => (
                    <option defaultChecked key={i} value={p._id}>
                        {p.firstname} {p.lastname}
                    </option>
                ))}
            </>
        );
    };

    const AllDoctors = () => {
        return (
            <>
                {allDoctors.map((d, i) => (
                    <option defaultValue key={i} value={d._id}>
                        {d.firstname} {d.lastname}
                    </option>
                ))}
            </>
        );
    };

    const AllServices = () => {
        return (
            <>
                {allServices.map((s, i) => (
                    <option defaultChecked key={i} value={s._id}>
                        {s.name} ({s.category})
                    </option>
                ))}
            </>
        );
    };

    console.log(appointment);

    return (
        <>
            <div
                id="crud-modal"
                className={`${
                    isHidden ? "hidden" : "flex"
                } overflow-y-auto overflow-x-hidden fixed left-0 top-0 z-50 align-center justify-center items-center h-screen max-h-screen w-full bg-slate-500 bg-opacity-30`}
            >
                <div className={`relative p-4 w-full max-w-md max-h-full`}>
                    <div className="relative bg-white rounded-lg shadow ">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                            <h3 className="text-lg font-semibold text-gray-900 ">
                                {isEdit
                                    ? "Edit Appointment"
                                    : "Add new Appointment"}
                            </h3>
                            <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                                onClick={() => {
                                    // setAppointment();
                                    setIsHidden(true);
                                }}
                            >
                                <XSVG className="w-3 h-3" />
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <form
                            onSubmit={handleAppointmentSubmit}
                            className="p-4 md:p-5"
                        >
                            <div className="grid gap-4 mb-4 grid-cols-2">
                                <div className="">
                                    <label
                                        htmlFor="patient"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Patient
                                    </label>
                                    <select
                                        id="patient"
                                        name="pid"
                                        value={appointment.pid}
                                        onChange={handleAppointmentChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                        required
                                    >
                                        <option defaultChecked value="">
                                            -------
                                        </option>
                                        <AllPatients />
                                    </select>
                                </div>
                                <div className="">
                                    <label
                                        htmlFor="doctor"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Doctor
                                    </label>
                                    <select
                                        id="doctor"
                                        name="doc_id"
                                        value={appointment.doc_id}
                                        onChange={handleAppointmentChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                        required
                                    >
                                        <option defaultChecked value="">
                                            -------
                                        </option>
                                        <AllDoctors />
                                    </select>
                                </div>
                                <div className="">
                                    <label
                                        htmlFor="service"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Service
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={appointment.service}
                                        onChange={handleAppointmentChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                        required
                                    >
                                        <option defaultChecked value="">
                                            -------
                                        </option>
                                        <AllServices />
                                    </select>
                                </div>
                                <div className="">
                                    <label
                                        htmlFor="status"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Status
                                    </label>
                                    <select
                                        id="status"
                                        name="status"
                                        value={appointment.status}
                                        onChange={handleAppointmentChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                        required=""
                                    >
                                        <option value="pending" defaultValue>
                                            Pending
                                        </option>
                                        <option value="confirmed">
                                            Confirmed
                                        </option>
                                        <option value="cancelled">
                                            Cancelled
                                        </option>
                                        <option value="completed">
                                            Completed
                                        </option>
                                    </select>
                                </div>
                                <div className="col-span-2">
                                    <label
                                        htmlFor="date"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Date
                                    </label>
                                    <input
                                        id="date"
                                        name="date"
                                        type="date"
                                        value={appointment.date}
                                        onChange={handleAppointmentChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                                    />
                                </div>
                                <div className="col-span-2">
                                    <label
                                        htmlFor="time"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Time
                                    </label>
                                    <input
                                        id="time"
                                        name="timeSlot"
                                        type="text"
                                        value={appointment.timeSlot}
                                        onChange={handleAppointmentChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                                    />
                                </div>
                                <div className="col-span-2">
                                    <label
                                        htmlFor="reason"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Reason
                                    </label>
                                    <textarea
                                        id="reason"
                                        name="reason"
                                        rows={4}
                                        value={appointment.reason}
                                        onChange={handleAppointmentChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                            >
                                {isEdit ? (
                                    <PencilIcon className="me-1 -ms-1 w-5 h-5" />
                                ) : (
                                    <PlusIcon className="me-1 -ms-1 w-5 h-5" />
                                )}
                                {isEdit
                                    ? "Edit Appointment"
                                    : "Add new Appointment"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NewAppointment;
