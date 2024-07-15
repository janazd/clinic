import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import {
    createNewDoctor,
    getAllDoctors,
    deleteDoctor,
} from "../../api/doctors";

import { TrashIcon, PencilIcon } from "../../assets";

function AdminDoctor() {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        async function fetchDoctors() {
            setDoctors(await getAllDoctors());
        }

        fetchDoctors();
    }, []);

    // const [doctor, setDoctor] = useState({});

    // const handleDoctorChange = (e) => {
    //     const name = e.target.name;
    //     const value = e.target.value;

    //     setDoctor((v) => ({ ...v, [name]: value }));
    // };

    // const handleDoctorSubmit = (e) => {
    //     e.preventDefault();
    //     createNewDoctor(doctor);
    // };

    const AllDoctors = () => {
        return (
            <>
                {doctors.map((d, i) => (
                    <tr key={d._id} className="bg-white border-b">
                        <td className="px-6 py-4">{i + 1}</td>
                        <td className="px-6 py-4">
                            {d._fistname} {d.lastname}
                        </td>
                        <td className="px-6 py-4">{d.email}</td>
                        <td className="px-6 py-4">{d.specialization}</td>
                        <td className="px-6 py-4">{d.schedule}</td>
                        <td>
                            <span className="flex justify-center gap-4">
                                <PencilIcon className="w-5 h-5" />
                                <button
                                    onClick={() => handleDeleteDoctor(d._id)}
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

    const handleDeleteDoctor = async (id) => {
        const res = await deleteDoctor(id);

        if (res.status === 200) {
            toast.success(res.data.message);
        } else {
            toast.error(res.data.message);
        }

        const filtered = doctors.filter((d) => d._id !== id);
        setDoctors(filtered);
    };

    return (
        <>
            <h1 className="mx-3 my-5">Admin Doctor page</h1>
            <div className="mx-3">
                <div className="px-3 flex justify-between">
                    <button className="py-2 px-4 bg-blue-300 rounded-md mb-5">
                        Add Doctor
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
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Specialization
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Schedule
                                </th>
                                <th scope="col" className="px-6 py-3"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <AllDoctors />
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );

    // return (
    //     <>
    //         <h1>Doctor</h1>

    //         <div>
    //             <h2>create new doctor</h2>
    //             <form onSubmit={handleDoctorSubmit}>
    //                 <div>
    //                     first name
    //                     <input
    //                         type="text"
    //                         name="firstname"
    //                         value={doctor.firstname}
    //                         onChange={handleDoctorChange}
    //                     />
    //                 </div>
    //                 <div>
    //                     last name
    //                     <input
    //                         type="text"
    //                         name="lastname"
    //                         value={doctor.lastname}
    //                         onChange={handleDoctorChange}
    //                     />
    //                 </div>
    //                 <div>
    //                     email
    //                     <input
    //                         type="email"
    //                         name="email"
    //                         value={doctor.email}
    //                         onChange={handleDoctorChange}
    //                     />
    //                 </div>
    //                 <div>
    //                     password
    //                     <input
    //                         type="password"
    //                         name="password"
    //                         vlaue={doctor.password}
    //                         onChange={handleDoctorChange}
    //                     />
    //                 </div>
    //                 <div>
    //                     specialization
    //                     <input
    //                         type="text"
    //                         name="specialization"
    //                         value={doctor.specialization}
    //                         onChange={handleDoctorChange}
    //                     />
    //                 </div>
    //             </form>
    //         </div>
    //     </>
    // );
}

export default AdminDoctor;
