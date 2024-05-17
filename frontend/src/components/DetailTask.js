import { useContext, useState } from "react";
import { AppointmentContext } from "../pages/Appointment";

const Details = (props) => {
    const { appointment, setAppointment } = useContext(AppointmentContext);

    const { setCount } = props;

    const handlePatientChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setAppointment((a) => ({
            ...a,
            patient: { ...a.patient, [name]: value },
        }));
    };

    const [note, setNote] = useState("");

    return (
        <>
            <div className="text-indigo-800 font-bold mb-3">Basic Details</div>
            <div className="flex flex-col gap-7">
                <div>
                    <label
                        className="block ml-1 mb-3 text-gray-600"
                        htmlFor="firstname"
                    >
                        First name
                    </label>
                    <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        required
                        placeholder="Enter your first name"
                        value={appointment.patient?.firstname}
                        onChange={handlePatientChange}
                        className="border border-gray-200 placeholder-gray-500 rounded-lg w-full"
                    />
                </div>
                <div>
                    <label
                        className="block ml-1 mb-3 text-gray-600"
                        htmlFor="lastname"
                    >
                        Last name
                    </label>
                    <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        required
                        placeholder="Enter your last name"
                        value={appointment.patient?.lastname}
                        onChange={handlePatientChange}
                        className="border border-gray-200 placeholder-gray-500 rounded-lg w-full"
                    />
                </div>
                <div>
                    <label
                        className="block ml-1 mb-3 text-gray-600"
                        htmlFor="gender"
                    >
                        Gender
                    </label>
                    <select
                        required
                        id="gender"
                        name="gender"
                        value={appointment.patient?.gender}
                        onChange={handlePatientChange}
                        className="border border-gray-200 placeholder-gray-500 rounded-lg w-full"
                    >
                        <option value="" selected disabled hidden>
                            Choose one
                        </option>
                        <option value="male">male</option>
                        <option value="female">female</option>
                    </select>
                </div>
                <div>
                    <label
                        className="block ml-1 mb-3 text-gray-600"
                        htmlFor="yob"
                    >
                        Year of Birth
                    </label>
                    <input
                        type="number"
                        id="yob"
                        name="yob"
                        required
                        placeholder="eg: 2002"
                        value={appointment.patient?.yob}
                        onChange={handlePatientChange}
                        className="border border-gray-200 placeholder-gray-500 rounded-lg w-full"
                    />
                </div>
                <div>
                    <label
                        className="block ml-1 mb-3 text-gray-600"
                        htmlFor="email"
                    >
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="Enter your email address"
                        value={appointment.patient?.email}
                        onChange={handlePatientChange}
                        className="border border-gray-200 placeholder-gray-500 rounded-lg w-full"
                    />
                </div>
                <div>
                    <label
                        className="block ml-1 mb-3 text-gray-600"
                        htmlFor="password"
                    >
                        New Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        placeholder="Enter a new password"
                        value={appointment.patient?.password}
                        onChange={handlePatientChange}
                        className="border border-gray-200 placeholder-gray-500 rounded-lg w-full"
                    />
                </div>
                <div>
                    <label
                        className="block ml-1 mb-3 text-gray-600"
                        htmlFor="phone"
                    >
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={appointment.patient?.phone}
                        onChange={handlePatientChange}
                        className="border border-gray-200 placeholder-gray-500 rounded-lg w-full"
                    />
                </div>
                <div>
                    <label
                        className="block ml-1 mb-3 text-gray-600"
                        htmlFor="note"
                    >
                        Note
                    </label>
                    <textarea
                        id="note"
                        rows={3}
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="Enter note details"
                        className=" border-gray-200 rounded-lg w-full"
                    ></textarea>
                </div>
            </div>
            <div className="border border-t-0 border-gray-200 rounded-b-lg flex justify-end">
                <button
                    onClick={(e) => {
                        setCount((count) => count - 1);
                    }}
                    className="px-3 py-2 mr-8"
                >
                    Go Back
                </button>
                <button
                    onClick={(e) => {
                        setCount((count) => count + 1);
                    }}
                    className="flex justify-center align-center my-4 mr-6 px-4 py-3 text-white bg-indigo-800 hover:bg-indigo-700 disabled:bg-gray-400 rounded-lg"
                    disabled={
                        // !appointment.patient?.firstname ||
                        appointment.patient?.firstname === "" ||
                        // !appointment.patient?.lastname ||
                        appointment.patient?.lastname === "" ||
                        // !appointment.patient?.gender ||
                        appointment.patient?.gender === "" ||
                        // !appointment.patient?.yob ||
                        appointment.patient?.yob === "" ||
                        // !appointment.patient?.email ||
                        appointment.patient?.email === "" ||
                        // !appointment.patient?.password ||
                        appointment.patient?.password === "" ||
                        // !appointment.patient?.phone ||
                        appointment.patient?.phone === ""
                    }
                >
                    Next:{" "}
                </button>
            </div>
        </>
    );
};

export default Details;
