import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import {
    createNewAppointment,
    getAllAppointments,
    deleteAppointment,
} from "../../api/appointment";

import { TrashIcon, PencilIcon } from "../../assets";

function AdminAppointment() {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        async function fetchAppointments() {
            setAppointments(await getAllAppointments());
        }

        fetchAppointments();
    }, []);

    const AllAppointments = () => {
        return (
            <>
                {appointments.map((a, i) => (
                    <tr key={a._id} className="bg-white border-b">
                        <td className="px-6 py-4">{i + 1}</td>
                        <td className="px-6 py-4">
                            {a.pid?.firstname} {a.pid?.lastname}
                        </td>
                        <td className="px-6 py-4">
                            {a.doc_id?.firstname} {a.doc_id?.lastname}
                        </td>
                        <td className="px-6 py-4">
                            {a.service?.name} ({a.service?.category})
                        </td>
                        <td className="px-6 py-4">
                            {new Date(a.date).toDateString()} <br />
                            {a.timeSlot}
                        </td>
                        <td className="px-6 py-4">{a.status}</td>
                        <td>
                            <span className="flex justify-center gap-4">
                                <PencilIcon className="w-5 h-5" />
                                <button
                                    onClick={() =>
                                        handleDeleteAppointment(a._id)
                                    }
                                >
                                    <TrashIcon className="w-5 h-5" />
                                </button>
                            </span>
                        </td>
                    </tr>
                ))}
            </>
        );
    };

    const handleDeleteAppointment = async (id) => {
        const res = await deleteAppointment(id);

        if (res.status === 200) {
            toast.success(res.message);
        } else {
            toast.error(res.message);
        }

        const filtered = appointments.filter((a) => a._id !== id);
        setAppointments(filtered);
    };

    return (
        <>
            <h1 className="mx-3 my-5">Admin Appointment page</h1>
            <div className="mx-3">
                <div className="px-3 flex justify-between">
                    <button className="py-2 px-4 bg-blue-300 rounded-md mb-5">
                        Add Appointment
                    </button>
                    <Link
                        to="/admin"
                        className="py-2 px-4 bg-blue-300 rounded-md mb-5"
                    >
                        Back
                    </Link>
                </div>

                <div className="overflow-x-scroll">
                    <table className="w-full text-sm text-gray-500">
                        <thead className="text-xs uppercase text-gray-700 bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    #
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Pat.
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Doc.
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Service
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Date / Time
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <AllAppointments />
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );

    // const [appointment, setAppointment] = useState({});

    // const handleAppointmentChange = (e) => {
    //     const name = e.target.name;
    //     const value = e.target.value;

    //     setAppointment((v) => ({ ...v, [name]: value }));
    // };

    // const handleAppointmentSubmit = (e) => {
    //     e.preventDefault();
    //     createNewAppointment(appointment);
    // };

    // return (
    //     <>
    //         <h1>Appointment</h1>

    //         <div>
    //             <h2>Create new appointment</h2>
    //             <form onSubmit={handleAppointmentSubmit}>
    //                 <div>
    //                     Doctor ID
    //                     <input
    //                         type="text"
    //                         name="doc_id"
    //                         value={appointment.doc_id}
    //                         onChange={handleAppointmentChange}
    //                     />
    //                 </div>
    //                 <div>
    //                     Patient ID
    //                     <input
    //                         type="text"
    //                         name="pid"
    //                         value={appointment.pid}
    //                         onChange={handleAppointmentChange}
    //                     />
    //                 </div>
    //                 <div>
    //                     Service
    //                     <input
    //                         type="text"
    //                         name="service"
    //                         value={appointment.service}
    //                         onChange={handleAppointmentChange}
    //                     />
    //                 </div>
    //                 <div>
    //                     Patient ID
    //                     <input
    //                         type="text"
    //                         name="pid"
    //                         value={appointment.pid}
    //                         onChange={handleAppointmentChange}
    //                     />
    //                 </div>
    //                 <div>
    //                     Date
    //                     <input
    //                         type="text"
    //                         name="date"
    //                         value={appointment.date}
    //                         onChange={handleAppointmentChange}
    //                     />
    //                 </div>
    //                 <div>
    //                     Time Slot
    //                     <input
    //                         type="text"
    //                         name="timeSlot"
    //                         value={appointment.timeSlot}
    //                         onChange={handleAppointmentChange}
    //                     />
    //                 </div>
    //                 <div>
    //                     Reason
    //                     <input
    //                         type="text"
    //                         name="reason"
    //                         value={appointment.reason}
    //                         onChange={handleAppointmentChange}
    //                     />
    //                 </div>
    //             </form>
    //         </div>
    //     </>
    // );
}

export default AdminAppointment;
