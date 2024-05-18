import { useState } from "react";

import {CheckMark } from "../assets";

import { MdPerson } from "react-icons/md";

function PatientCard(props) {
    const {PatientName} = props;

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
            <div className="flex justify-between">
            <div >
                <div className="font-bold text-left mt-3">{PatientName}</div>        
                <div className="flex mt-2">
                </div>
            </div>
            
            <div>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full flex justify-start mt-1.9 margin-left">
                        View Profile
                    </button>
                    </div>
                    </div>
        </button>
    );
}

export default PatientCard;
