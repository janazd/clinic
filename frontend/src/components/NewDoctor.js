import { createNewDoctor, updateDoctor } from "../api/doctors";

import { PlusIcon, PencilIcon, XSVG } from "../assets";

function NewDoctor({
    isHidden,
    setIsHidden,
    isEdit,
    doctor,
    setDoctor,
    setDoctors,
}) {
    const handleDoctorChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setDoctor((v) => ({ ...v, [name]: value }));
    };

    const handleDoctorSubmit = (e) => {
        e.preventDefault();
        if (isEdit) {
            updateDoctor(doctor);
        } else {
            createNewDoctor(doctor);
            setDoctors((prev) => [...prev, doctor]);
            setIsHidden(true);
        }
    };

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
                                {isEdit ? "Edit Doctor" : "Add new Doctor"}
                            </h3>
                            <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                                onClick={() => {
                                    // setDoctor();
                                    setIsHidden(true);
                                }}
                            >
                                <XSVG className="w-3 h-3" />
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <form
                            onSubmit={handleDoctorSubmit}
                            className="p-4 md:p-5"
                        >
                            <div className="grid gap-4 mb-4 grid-cols-2">
                                <div className="">
                                    <label
                                        htmlFor="firstname"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Fist Name
                                    </label>
                                    <input
                                        id="firstname"
                                        name="firstname"
                                        type="text"
                                        value={doctor.firstname}
                                        onChange={handleDoctorChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                        placeholder="First Name"
                                        required
                                    />
                                </div>
                                <div className="">
                                    <label
                                        htmlFor="lastname"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        id="lastname"
                                        name="lastname"
                                        type="text"
                                        value={doctor.lastname}
                                        onChange={handleDoctorChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                        placeholder="Last Name"
                                        required=""
                                    />
                                </div>
                                <div className="">
                                    <label
                                        htmlFor="specialization"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Specialization
                                    </label>
                                    <input
                                        id="specialization"
                                        name="specialization"
                                        type="text"
                                        value={doctor.specialization}
                                        onChange={handleDoctorChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                        placeholder="Specialization"
                                        required=""
                                    />
                                </div>
                                <div className="">
                                    <label
                                        htmlFor="gender"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Gender
                                    </label>
                                    <select
                                        id="gender"
                                        name="gender"
                                        value={doctor.gender}
                                        onChange={handleDoctorChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                        required=""
                                    >
                                        <option defaultValue>
                                            Select Gender
                                        </option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                                <div className="col-span-2">
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={doctor.email}
                                        onChange={handleDoctorChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                                    />
                                </div>
                                <div className="col-span-2">
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={doctor.password}
                                        onChange={handleDoctorChange}
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
                                {isEdit ? "Edit Doctor" : "Add new Doctor"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NewDoctor;
