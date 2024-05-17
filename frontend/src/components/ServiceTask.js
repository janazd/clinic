import { useContext } from "react";
import { AppointmentContext } from "../pages/Appointment";
import ServiceCard from "./ServiceCard";

//TODO: Get this from the database
const Services = [
    { id: 0, name: "Illness", category: "Clinic", duration: 60, price: 100.0 },
    {
        id: 1,
        name: "General Dentistry",
        category: "Dental Care",
        duration: 30,
        price: 100.0,
    },
];

const Categories = [
    { id: 0, name: "All" },
    { id: 1, name: "Clinic" },
    { id: 2, name: "Dental Care" },
];

function ServiceTask(props) {
    const { setCount } = props;
    const { appointment } = useContext(AppointmentContext);

    return (
        <>
            <div className="mb-5">
                <div className="text-indigo-800 font-bold mb-3">
                    Select Category
                </div>
                <div>
                    {Categories.map((c) => (
                        <button
                            key={c.id}
                            className="inline-block mr-4 px-3 py-2 border border-gray-200 rounded-md"
                        >
                            {c.name}
                        </button>
                    ))}
                </div>
            </div>
            <div>
                <div className="text-indigo-800 font-bold mb-3">
                    Select Service
                </div>
                <ul className="md:flex md:flex-row md:flex-wrap md:gap-4">
                    {Services.map((s) => (
                        <ServiceCard key={s.id} s={s} />
                    ))}
                </ul>
            </div>
            <div className="border border-t-0 md:border-none border-gray-200 rounded-b-lg flex justify-end">
                <button
                    onClick={(e) => {
                        setCount((count) => count + 1);
                    }}
                    className="flex justify-center align-center my-4 mr-6 px-4 py-3 text-white bg-indigo-800 hover:bg-indigo-700 disabled:bg-gray-400 rounded-lg"
                    disabled={appointment.service === undefined}
                >
                    Next:{" "}
                </button>
            </div>
        </>
    );
}

export default ServiceTask;
