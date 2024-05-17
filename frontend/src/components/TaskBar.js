import { CalendarIcon, DetailsIcon, ServiceIcon, SummaryIcon } from "../assets";

function TaskBar(props) {
    const { count, setCount } = props;
    return (
        <div className="border text-sm font-semibold border-gray-200 rounded-lg shadow-md flex md:flex-col justify-center py-4 px-5 mb-8 md:mb-0 h-fit overflow-x-auto gap-5 min-w-56">
            <button onClick={() => setCount(0)} className="flex items-center">
                <span
                    className={`h-8 w-8 mr-2 shadow-sm border rounded-md flex items-center justify-center ${
                        count === 0 ? "border-indigo-800 bg-indigo-800" : ""
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
            <button onClick={() => setCount(1)} className="flex items-center">
                <span
                    className={`h-8 w-8 mr-2 shadow-sm border rounded-md flex items-center justify-center ${
                        count === 1 ? "border-indigo-800 bg-indigo-800" : ""
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
            <button onClick={() => setCount(2)} className="flex items-center">
                <span
                    className={`h-8 w-8 mr-2 shadow-sm border rounded-md flex items-center justify-center ${
                        count === 2 ? "border-indigo-800 bg-indigo-800" : ""
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
            <button
                onClick={() => setCount(3)}
                className="flex items-center"
                disabled={count < 3}
            >
                <span
                    className={`h-8 w-8 mr-2 shadow-sm border rounded-md flex items-center justify-center ${
                        count === 3 ? "border-indigo-800 bg-indigo-800" : ""
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
    );
}

export default TaskBar;
