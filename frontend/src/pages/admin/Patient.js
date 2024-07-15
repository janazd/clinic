import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import { deletePatient, getAllPatients } from "../../api/patient";
import { PencilIcon, TrashIcon } from "../../assets";

function AdminPatient() {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        async function fetchPatients() {
            setPatients(await getAllPatients());
        }

        fetchPatients();
    }, []);

    const AllPatient = () => {
        return (
            <>
                {patients.map((p, i) => (
                    <tr key={p._id} className="bg-white border-b">
                        <td className="px-6 py-4">{i + 1}</td>
                        <td className="px-6 py-4">
                            {p.firstname} {p.lastname}
                        </td>
                        <td className="px-6 py-4">{p.gender}</td>
                        <td className="px-6 py-4">{p.yob}</td>
                        <td className="px-6 py-4">{p.phone}</td>
                        <td className="px-6 py-4">{p.email}</td>
                        <td>
                            <span className="flex justify-center gap-4">
                                <PencilIcon className="w-5 h-5" />
                                <button
                                    onClick={() => handleDeletePatient(p._id)}
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

    const handleDeletePatient = async (id) => {
        const res = await deletePatient(id);

        if (res.status === 200) {
            toast.success(res.data.message);
        } else {
            toast.error(res.data.message);
        }

        const filtered = patients.filter((p) => p._id !== id);
        setPatients(filtered);
    };

    return (
        <>
            <h1 className="mx-3 my-5">Admin Patient page</h1>
            <div className="mx-3">
                <div className="px-3 flex justify-between">
                    <button className="py-2 px-4 bg-blue-300 rounded-md mb-5">
                        Add Patient
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
                                    Gender
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    YOB
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Phone
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <AllPatient />
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
    // const [Patient, setPatient] = useState({});

    // const handlePatientChange = (e) => {
    //     const name = e.target.name;
    //     const value = e.target.value;

    //     setPatient((v) => ({ ...v, [name]: value }));
    // };

    // const handlePatientSubmit = (e) => {
    //     e.preventDefault();
    //     createNewPatient(Patient);
    // };

    // return (
    //     <>
    //         <h1>Patient</h1>

    //         <div>
    //             <h2>create New Patient</h2>
    //             <form onSubmit={handlePatientSubmit}>
    //                 <div>
    //                     first name
    //                     <input
    //                         type="text"
    //                         name="firstname"
    //                         value={Patient.firstname}
    //                         onChange={handlePatientChange}
    //                     />
    //                 </div>
    //                 <div>
    //                     last name
    //                     <input
    //                         type="text"
    //                         name="lastname"
    //                         value={Patient.lastname}
    //                         onChange={handlePatientChange}
    //                     />
    //                 </div>
    //                 <div>
    //                     gender
    //                     <input
    //                         type="select"
    //                         name="gender"
    //                         value={Patient.gender}
    //                         onChange={handlePatientChange}
    //                     />
    //                 </div>
    //                 <div>
    //                     year of birth
    //                     <input
    //                         type="number"
    //                         name="yob"
    //                         value={Patient.yob}
    //                         onChange={handlePatientChange}
    //                     />
    //                 </div>
    //                 <div>
    //                     email
    //                     <input
    //                         type="email"
    //                         name="email"
    //                         value={Patient.email}
    //                         onChange={handlePatientChange}
    //                     />
    //                 </div>
    //                 <div>
    //                     password
    //                     <input
    //                         type="password"
    //                         name="password"
    //                         value={Patient.password}
    //                         onChange={handlePatientChange}
    //                     />
    //                 </div>
    //                 <div>
    //                     medical history
    //                     <input
    //                         type="text"
    //                         name="medical_history"
    //                         value={Patient.medical_history}
    //                         onChange={handlePatientChange}
    //                     />
    //                 </div>
    //             </form>
    //         </div>
    //     </>
    // );
}

export default AdminPatient;
