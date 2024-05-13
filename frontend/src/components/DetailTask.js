import { useState } from "react";
import { createNewPatient } from "../api/axios";

const Details = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [gender, setGender] = useState("male");
    const [yob, setYob] = useState();
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [note, setNote] = useState("");

    const handleTest = (e) => {
        e.preventDefault();
        createNewPatient({ fname, lname, gender, yob, email, phone });
    };

    return (
        <div>
            <div className="text-indigo-800 font-bold mb-3">Basic Details</div>
            <div className="flex flex-col gap-7">
                <div>
                    <label
                        className="block ml-1 mb-3 text-gray-600"
                        htmlFor="fname"
                    >
                        First name
                    </label>
                    <input
                        type="text"
                        id="lname"
                        required
                        placeholder="Enter your first name"
                        value={fname}
                        onChange={(e) => setFname(e.target.value)}
                        className="border border-gray-200 placeholder-gray-500 rounded-lg w-full"
                    />
                </div>
                <div>
                    <label
                        className="block ml-1 mb-3 text-gray-600"
                        htmlFor="lname"
                    >
                        Last name
                    </label>
                    <input
                        type="text"
                        id="lname"
                        required
                        placeholder="Enter your last name"
                        value={lname}
                        onChange={(e) => setLname(e.target.value)}
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
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="border border-gray-200 placeholder-gray-500 rounded-lg w-full"
                    >
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
                        required
                        placeholder="eg: 2002"
                        value={yob}
                        onChange={(e) => setYob(e.target.value)}
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
                        required
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
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
            <button onClick={handleTest}>TESSSTTTT</button>
        </div>
    );
};

export default Details;
