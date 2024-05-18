import { useContext, useEffect, useState } from "react";
import { AppointmentContext } from "../pages/Appointment";
import ServiceCard from "./ServiceCard";
import {
    getAllServices,
    getAllCategories,
    getServicesByCategory,
} from "../api/service";
import { SpinnerIcon } from "../assets";

function ServiceTask(props) {
    const { setCount } = props;
    const { appointment } = useContext(AppointmentContext);

    const [Services, setServices] = useState([]);
    const [Categories, setCategories] = useState([]);
    const [category, setCategory] = useState("all");

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function test() {
            setIsLoading(true);
            setServices(await getAllServices());
            setCategories(await getAllCategories());
            setIsLoading(false);
        }
        test();
    }, []);

    const handleFilter = async (e) => {
        setIsLoading(true);
        const name = e.target.value;
        setCategory(name);
        setServices(await getServicesByCategory(name));
        setIsLoading(false);
    };

    const handleAll = async (e) => {
        setIsLoading(true);
        setCategory("all");
        setServices(await getAllServices());
        setIsLoading(false);
    };

    const Loading = () => {
        return (
            <SpinnerIcon className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" />
        );
    };

    return (
        <>
            {isLoading === true ? (
                <Loading />
            ) : (
                <>
                    <div className="">
                        <div className="mb-5">
                            <div className="text-indigo-800 font-bold mb-3">
                                Select Category
                            </div>
                            <div>
                                <button
                                    onClick={handleAll}
                                    value={"all"}
                                    className={`inline-block mr-4 px-3 py-2 border border-gray-200 hover:border-black rounded-md ${
                                        category === "all"
                                            ? "border-2 !border-black"
                                            : ""
                                    }`}
                                >
                                    All
                                </button>
                                {Categories.map((c) => (
                                    <button
                                        key={c.category}
                                        value={c.category}
                                        className={`inline-block mr-4 px-3 py-2 border border-gray-200 hover:border-black rounded-md ${
                                            category === c.category
                                                ? "border-2 !border-black"
                                                : ""
                                        }`}
                                        onClick={handleFilter}
                                    >
                                        {c.category?.charAt(0).toUpperCase() +
                                            c.category?.slice(1)}
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
                                    <ServiceCard key={s._id} s={s} />
                                ))}
                            </ul>
                        </div>
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
            )}
        </>
    );
}

export default ServiceTask;
