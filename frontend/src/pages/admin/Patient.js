import { useState } from "react";

function AdminPatient() {
    const [Patient, setPatient] = useState({});

    const handlePatientChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setPatient((v) => ({ ...v, [name]: value }));
    };

    const handlePatientSubmit = (e) => {
        e.preventDefault();
        createNewPatient(Patient);
    };

    return (
        <>
            <h1>Patient</h1>

            <div>
                <h2>create New Patient</h2>
                <form onSubmit={handlePatientSubmit}>
                    <div>
                        first name
                        <input
                            type="text"
                            name="firstname"
                            value={Patient.firstname}
                            onChange={handlePatientChange}
                        />
                    </div>
                    <div>
                        last name
                        <input
                            type="text"
                            name="lastname"
                            value={Patient.lastname}
                            onChange={handlePatientChange}
                        />
                    </div>
                    <div>
                        gender
                        <input
                            type="select"
                            name="gender"
                            value={Patient.gender}
                            onChange={handlePatientChange}
                        />
                    </div>
                    <div>
                        year of birth
                        <input
                            type="number"
                            name="yob"
                            value={Patient.yob}
                            onChange={handlePatientChange}
                        />
                    </div>
                    <div>
                        email
                        <input
                            type="email"
                            name="email"
                            value={Patient.email}
                            onChange={handlePatientChange}
                        />
                    </div>
                    <div>
                        password
                        <input
                            type="password"
                            name="password"
                            value={Patient.password}
                            onChange={handlePatientChange}
                        />
                    </div>
                    <div>
                        medical history
                        <input
                            type="text"
                            name="medical_history"
                            value={Patient.medical_history}
                            onChange={handlePatientChange}
                        />
                    </div>
                </form>
            </div>
        </>
    );
}

export default AdminPatient;