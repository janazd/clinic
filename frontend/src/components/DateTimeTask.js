import Calendar from "react-calendar";

const DateTimeTask = (props) => {
    const { date, setDate, TimeSlot } = props;
    return (
        <div>
            <div className="text-indigo-800 font-bold mb-3">Date & Time</div>
            <div className="flex flex-col md:flex-row gap-7">
                <div className="flex justify-center">
                    <Calendar
                        className="!w-full md:w-auto !border-gray-200"
                        value={date}
                        onChange={setDate}
                    />
                </div>
                <div className="border border-gray-200 py-6 px-4">
                    <div className="font-bold mb-5">Time Slot</div>
                    <div className="flex flex-wrap gap-5">
                        {TimeSlot.map((t) => (
                            <div className="border border-gray-200 hover:border-black cursor-pointer rounded-lg px-4 py-2">
                                9:00 am - 10:00
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DateTimeTask;
