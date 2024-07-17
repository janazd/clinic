import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import { getAllDoctors, deleteDoctor } from "../../api/doctors";

import { TrashIcon, PencilIcon } from "../../assets";
import NewDoctor from "../../components/NewDoctor";

const DOCTOR = {
    _id: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
};

function AdminDoctor() {
    const [doctors, setDoctors] = useState([]);
    const [doctor, setDoctor] = useState(DOCTOR);
    const [isHidden, setIsHidden] = useState(true);
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        async function fetchDoctors() {
            setDoctors(await getAllDoctors());
        }

        fetchDoctors();
    }, []);

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
                                <button
                                    onClick={() => {
                                        setDoctor({
                                            _id: d._id,
                                            firstname: d.firstname,
                                            lastname: d.lastname,
                                            email: d.email,
                                            password: "",
                                        });
                                        setIsEdit(true);
                                        setIsHidden(false);
                                    }}
                                >
                                    <PencilIcon className="w-5 h-5" />
                                </button>
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
                    <button
                        onClick={() => {
                            setIsEdit(false);
                            setIsHidden(false);
                        }}
                        className="py-2 px-4 bg-blue-300 hover:bg-blue-500 rounded-md mb-5"
                    >
                        Add Doctor
                    </button>
                    <Link
                        to="/admin"
                        className="py-2 px-4 bg-blue-300 rounded-md mb-5"
                    >
                        Back
                    </Link>
                </div>

                <NewDoctor
                    isHidden={isHidden}
                    setIsHidden={setIsHidden}
                    isEdit={isEdit}
                    doctor={doctor}
                    setDoctor={setDoctor}
                    setDoctors={setDoctors}
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
}

export default AdminDoctor;
