import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ServiceCard from "../components/ServiceCard";
import { CalendarIcon, DetailsIcon, ServiceIcon, SummaryIcon } from "../assets";

function Appointment() {
    const [count, setCount] = useState(0);

    // TODO: Get this from backend
    const Categories = ["All", "Clinic", "Dental Care"];
    const Services = [
        { name: "Illness", duration: 60, price: 100.0 },
        { name: "General Dentistry", duration: 30, price: 100.0 },
    ];

    const ServiceTask = () => {
        return (
            <>
                <div className="mb-5">
                    <div className="text-indigo-800 font-bold mb-3">
                        Select Category
                    </div>
                    <div>
                        {Categories.map((c) => (
                            <span className="inline-block mr-4 px-3 py-2 border border-gray-200 rounded-md">
                                {c}
                            </span>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="text-indigo-800 font-bold mb-3">
                        Select Service
                    </div>
                    <div className="md:flex md:flex-row md:flex-wrap md:gap-4">
                        {Services.map((s) => (
                            <ServiceCard
                                name={s.name}
                                duration={s.duration}
                                price={s.price}
                            />
                        ))}
                    </div>
                </div>
            </>
        );
    };

    return (
        <>
            <Navbar />

            <main className="max-w-full md:max-w-6xl md:mx-auto px-8 flex flex-col md:flex-row md:justify-center md:gap-10 mt-6">
                {/* Tasks */}
                <div className="border text-sm font-semibold border-gray-200 rounded-lg shadow-md flex md:flex-col justify-center py-4 px-5 mb-8 md:mb-0 h-fit">
                    <button className="flex items-center mr-8 md:mb-4">
                        <span
                            className={`h-8 w-8 mr-2 shadow-sm border rounded-md flex items-center justify-center ${
                                count === 0
                                    ? "border-indigo-800 bg-indigo-800"
                                    : ""
                            } `}
                        >
                            <ServiceIcon
                                className={`h-4 w-4 ${
                                    count === 0 ? "fill-white" : ""
                                } `}
                            />
                        </span>
                        <div className={count === 0 ? "text-indigo-700" : ""}>
                            Services
                        </div>
                    </button>
                    <button className="flex items-center mr-8 md:my-4">
                        <span
                            className={`h-8 w-8 mr-2 shadow-sm border rounded-md flex items-center justify-center ${
                                count === 1
                                    ? "border-indigo-800 bg-indigo-800"
                                    : ""
                            } `}
                        >
                            <CalendarIcon
                                className={`h-4 w-4 ${
                                    count === 1 ? "fill-white" : ""
                                } `}
                            />
                        </span>

                        <div className={count === 1 ? "text-indigo-700" : ""}>
                            Date & Time
                        </div>
                    </button>
                    <button className="flex items-center mr-8 md:my-4">
                        <span
                            className={`h-8 w-8 mr-2 shadow-sm border rounded-md flex items-center justify-center ${
                                count === 2
                                    ? "border-indigo-800 bg-indigo-800"
                                    : ""
                            } `}
                        >
                            <DetailsIcon
                                className={`h-4 w-4 ${
                                    count === 2 ? "fill-white" : ""
                                } `}
                            />
                        </span>
                        <div className={count === 2 ? "text-indigo-700" : ""}>
                            Basic Details
                        </div>
                    </button>
                    <button className="flex items-center mr-8 md:mt-4">
                        <span
                            className={`h-8 w-8 mr-2 shadow-sm border rounded-md flex items-center justify-center ${
                                count === 3
                                    ? "border-indigo-800 bg-indigo-800"
                                    : ""
                            } `}
                        >
                            <SummaryIcon
                                className={`h-4 w-4 ${
                                    count === 3 ? "fill-white" : ""
                                } `}
                            />
                        </span>
                        <div className={count === 3 ? "text-indigo-700" : ""}>
                            Summary
                        </div>
                    </button>
                </div>

                <div>
                    {/* Category */}
                    <div className="min-h-[500px] min-w-96 border border-x-gray-200 p-6 rounded-t-lg">
                        {count === 0 ? <ServiceTask /> : <></>}
                    </div>

                    <div className="border border-t-0 border-gray-200 rounded-b-lg flex justify-end">
                        {count > 0 ? (
                            <button
                                onClick={(e) => {
                                    setCount(count - 1);
                                }}
                                className="px-3 py-2 mr-8"
                            >
                                Go Back
                            </button>
                        ) : (
                            <></>
                        )}
                        {count < Categories.length ? (
                            <button
                                onClick={(e) => {
                                    setCount(count + 1);
                                }}
                                className="flex justify-center align-center my-4 mr-6 px-4 py-3 text-white bg-indigo-800 hover:bg-indigo-700 rounded-lg"
                            >
                                Next:{" "}
                            </button>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            </main>
        </>
    );
}

export default Appointment;