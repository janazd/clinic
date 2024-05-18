import { useState } from "react";

import {CheckMark } from "../assets";

import { GiMedicinePills } from "react-icons/gi";

function PrescriptionCard(props) {
    const { Date, PatientName, Medicine } = props;

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
                    <GiMedicinePills className="h-8 w-8" />
                </div>
            </div>
            <div className="">
                <div className="font-bold text-left">{PatientName}</div>
                <div className="flex gap-4 mt-2">
                    <div className="">
                    Medicine prescribed:{" "}
                        <span className="font-bold">{Medicine}</span>
                    </div>
                    <div>
                        Date: <span className="font-bold">{Date}</span>
                    </div>
                </div>
            </div>
        </button>
    );
}

export default PrescriptionCard;
