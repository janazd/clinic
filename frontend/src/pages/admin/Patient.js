import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import { deletePatient, getAllPatients } from "../../api/patient";
import { PencilIcon, TrashIcon } from "../../assets";
import NewPatient from "../../components/NewPatient";

const PATIENT = {
    _id: "",
    firstname: "",
    lastname: "",
    gender: "",
    yob: "",
    phone: "",
    email: "",
    password: "",
};

function AdminPatient() {
    const [patients, setPatients] = useState([]);
    const [patient, setPatient] = useState(PATIENT);
    const [isHidden, setIsHidden] = useState(true);
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        async function fetchPatients() {
            setPatients(await getAllPatients());
        }

        fetchPatients();
    }, []);

    useEffect(() => {
        if (!isHidden) return;
        setPatient(PATIENT);
    }, [isHidden]);

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
                                <button
                                    onClick={() => {
                                        setPatient({
                                            _id: p._id,
                                            firstname: p.firstname,
                                            lastname: p.lastname,
                                            gender: p.gender,
                                            yob: p.yob,
                                            phone: p.phone.toString(),
                                            email: p.email,
                                            password: "",
                                        });
                                        setIsEdit(true);
                                        setIsHidden(false);
                                    }}
                                >
                                    <PencilIcon className="w-5 h-5" />
                                </button>
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
                    <button
                        onClick={() => {
                            setIsEdit(false);
                            setIsHidden(false);
                        }}
                        className="py-2 px-4 bg-blue-300 hover:bg-blue-500 rounded-md mb-5"
                    >
                        Add Patient
                    </button>
                    <Link
                        to="/admin"
                        className="py-2 px-4 bg-blue-300 rounded-md mb-5"
                    >
                        Back
                    </Link>
                </div>

                <NewPatient
                    isHidden={isHidden}
                    setIsHidden={setIsHidden}
                    isEdit={isEdit}
                    patient={patient}
                    setPatient={setPatient}
                    setPatients={setPatients}
                />

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
}

export default AdminPatient;
