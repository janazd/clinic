import { useState } from "react";

import createNewDoctor from "../../api/doctors";
import Doctor from "../Doctor";

function AdminDoctor() {
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
            <h1>Doctor</h1>

            <div>
                <h2>create new doctor</h2>
                <form onSubmit={handleDoctorSubmit}>
                    <div>
                        first name
                        <input
                            type="text"
                            name="firstname"
                            value={doctor.firstname}
                            onChange={handleDoctorChange}
                        />
                    </div>
                    <div>
                        last name
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
                            vlaue={doctor.password}
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
                </form>
            </div>
        </>
    );
}

export default AdminDoctor;
