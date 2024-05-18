import AppointmentCard from "./AppointmentCard";

const Categories = [
    { id: 0, name: "All" },
    { id: 1, name: "Upcoming" },
    { id: 2, name: "Passed" },
];

const AppointmentsList = [
    {
        AppointmentDate: "Monday, May 20th, 2024",
        PatientName: "Rawan",
        Case: "Illness",
    },
    {
        AppointmentDate: "Tuesday, May 21st, 2024",
        PatientName: "Jana",
        Case: "General Dentistry",
    },
];

const AppointmentTask = (props) => {
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
                    Appointments
                </div>
                <div className="md:flex md:flex-row md:flex-wrap md:gap-4">
                    {AppointmentsList.map((s) => (
                        <AppointmentCard
                            AppointmentDate={s.AppointmentDate}
                            PatientName={s.PatientName}
                            Case={s.Case}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default AppointmentTask;
