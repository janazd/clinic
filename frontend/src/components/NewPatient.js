import { PlusIcon, PencilIcon, XSVG } from "../assets";
import { createNewPatient, updatePatient } from "../api/patient";

function NewPatient({
    isHidden,
    setIsHidden,
    isEdit,
    patient,
    setPatient,
    setPatients,
}) {
    const handlePatientChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setPatient((v) => ({ ...v, [name]: value }));
    };

    const handlePatientSubmit = (e) => {
        e.preventDefault();

        if (isEdit) {
            updatePatient(patient);
        } else {
            createNewPatient(patient);
            setPatients((prev) => [...prev, patient]);
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
                                {isEdit ? "Edit Patient" : "Add new Patient"}
                            </h3>
                            <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                                onClick={() => {
                                    // setPatient();
                                    setIsHidden(true);
                                }}
                            >
                                <XSVG className="w-3 h-3" />
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <form
                            onSubmit={handlePatientSubmit}
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
                                        value={patient.firstname}
                                        onChange={handlePatientChange}
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
                                        value={patient.lastname}
                                        onChange={handlePatientChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                        placeholder="Last Name"
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
                                        value={patient.gender}
                                        onChange={handlePatientChange}
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
                                <div className="">
                                    <label
                                        htmlFor="yob"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Year of Birth
                                    </label>
                                    <input
                                        id="yob"
                                        name="yob"
                                        type="number"
                                        value={patient.yob}
                                        onChange={handlePatientChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                                    />
                                </div>
                                <div className="col-span-2">
                                    <label
                                        htmlFor="phone"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Phone
                                    </label>
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        value={patient.phone}
                                        onChange={handlePatientChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                                    />
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
                                        value={patient.email}
                                        onChange={handlePatientChange}
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
                                        value={patient.password}
                                        onChange={handlePatientChange}
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
                                {isEdit ? "Edit Patient" : "Add new Patient"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NewPatient;
