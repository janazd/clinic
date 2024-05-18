import { useState } from "react";

import {CheckMark } from "../assets";

import { MdPerson } from "react-icons/md";

function AppointmentCard(props) {
    const { AppointmentDate, PatientName, Case } = props;

    const [check, setCheck] = useState(false);

    return (
        <button
            onClick={() => setCheck(!check)}
            className="relative w-full flex border border-gray-300 rounded-md px-4 py-3 mb-5"
        >
            <div className="absolute top-2 right-2">
                {check ? (
                    <CheckMark className="h-5 w-5 fill-indigo-800" />
                ) : (
                    <></>
                )}
            </div>
            <div className="flex justify-center items-center mr-5">
                <div className="p-2 border border-gray-300 rounded-full">
                    <MdPerson className="h-8 w-8" />
                </div>
            </div>
            <div className="">
                <div className="font-bold text-left">{AppointmentDate}</div>
                <div className="flex gap-4 mt-2">
                    <div className="">
                    Patient Name:{" "}
                        <span className="font-bold">{PatientName}</span>
                    </div>
                    <div>
                        Case: <span className="font-bold">{Case}</span>
                    </div>
                </div>
            </div>
        </button>
    );
}

export default AppointmentCard;
