import { useContext } from "react";
import { AppointmentContext } from "../pages/Appointment";
import { MountainIcon, CheckMark } from "../assets";

function ServiceCard(props) {
    const { s } = props;
    const { appointment, setAppointment } = useContext(AppointmentContext);

    return (
        <li>
            <input
                type="radio"
                name="service"
                id={s.name}
                value={s.name}
                checked={appointment.service?.name === s.name}
                onChange={(e) => setAppointment((a) => ({ ...a, service: s }))}
                className="hidden"
                required
            />
            <label
                htmlFor={s.name}
                className="relative w-full flex border border-gray-300 rounded-md px-4 py-3 mb-5 cursor-pointer"
            >
                <div className="absolute top-2 right-2">
                    {appointment.service?.name === s.name ? (
                        <CheckMark className="h-5 w-5 fill-indigo-800" />
                    ) : (
                        <></>
                    )}
                </div>
                <div className="flex justify-center items-center mr-5">
                    <div className="p-2 border border-gray-300 rounded-full">
                        <MountainIcon className="h-8 w-8" />
                    </div>
                </div>
                <div className="">
                    <div className="font-bold text-left">{s.name}</div>
                    <div className="flex gap-4 mt-2">
                        <div className="">
                            Duration:{" "}
                            <span className="font-bold">{s.duration} m</span>
                        </div>
                        <div>
                            Price: <span className="font-bold">${s.price}</span>
                        </div>
                    </div>
                </div>
            </label>
        </li>
    );
}

export default ServiceCard;
