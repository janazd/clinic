import { useContext } from "react";
import { SummaryPageIcon } from "../assets";
import { AppointmentContext } from "../pages/Appointment";

const Summary = (props) => {
    const { setCount } = props;

    const { appointment } = useContext(AppointmentContext);

    return (
        <>
            <div className="flex flex-col items-center border-b">
                <div className="flex flex-col items-center gap-2">
                    <SummaryPageIcon className="mb-2" />
                    <div className="font-bold text-indigo-900">Summary</div>
                    <div className="font-semibold text-indigo-800">
                        Your appointment booking summary
                    </div>
                </div>
                <div className="my-7 flex flex-col items-center">
                    <div className="">Customer</div>
                    <div className="font-bold">
                        {appointment.patient.firstname}{" "}
                        {appointment.patient.lastname}
                    </div>
                </div>
                <div className="flex justify-between pb-5">
                    <div className="px-4 py-2 border-r">
                        <div>Service</div>
                        <div className="font-bold">
                            {appointment.service.name}
                        </div>
                    </div>
                    <div className="px-4 py-2">
                        <div>Date & Time</div>
                        <div className="font-bold">
                            {appointment.date.toDateString()} {appointment.time}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between mt-3 px-6 pb-3 border-b font-bold">
                <div>Total Amount Payable</div>
                <div>${appointment.service.price}</div>
            </div>
            <div className="border border-t-0 border-gray-200 rounded-b-lg flex justify-end">
                <button
                    onClick={(e) => {
                        setCount((count) => count - 1);
                    }}
                    className="px-3 py-2 mr-8"
                >
                    Go Back
                </button>
                <button
                    type="submit"
                    className="flex justify-center align-center my-4 mr-6 px-4 py-3 text-white bg-indigo-800 hover:bg-indigo-700 rounded-lg"
                >
                    Book Appointment
                </button>
            </div>
        </>
    );
};

export default Summary;
