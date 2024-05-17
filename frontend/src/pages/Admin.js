import React, { useState } from "react";
import { createNewDoctor } from "../api/axios";

function Admin() {
    const [doctor, setDoctor] = useState({});

    const handleDoctorChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setDoctor((v) => ({ ...v, [name]: value }));
    };

    const handleDoctorSubmit = (e) => {
        e.preventDefault();
        createNewDoctor(doctor);
    };

    return (
        <>
            <h1>Admin</h1>

            {/* Create new Doctor */}
            <div>
                <h2>Create new doctor</h2>
                <form onSubmit={handleDoctorSubmit}>
                    <div>
                        Firstname
                        <input
                            type="text"
                            name="firstname"
                            value={doctor.firstname}
                            onChange={handleDoctorChange}
                        />
                    </div>
                    <div>
                        Lastname
                        <input
                            type="text"
                            name="lastname"
                            value={doctor.lastname}
                            onChange={handleDoctorChange}
                        />
                    </div>
                    <div>
                        email
                        <input
                            type="email"
                            name="email"
                            value={doctor.email}
                            onChange={handleDoctorChange}
                        />
                    </div>
                    <div>
                        password
                        <input
                            type="password"
                            name="password"
                            value={doctor.password}
                            onChange={handleDoctorChange}
                        />
                    </div>
                    <div>
                        specialization
                        <input
                            type="text"
                            name="specialization"
                            value={doctor.specialization}
                            onChange={handleDoctorChange}
                        />
                    </div>
                    <button className="bg-blue-300 p-4" type="submit">
                        Create doctor
                    </button>
                    {/* <input type="datetime-local" name="schedule" /> */}
                </form>
            </div>
        </>
    );
}

export default Admin;
