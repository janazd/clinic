import PatientCard from "./PatientCard";

const PatientsList = [
    { PatientName: "Rawan Ghobar" },
    { PatientName: "Jana Zeineddine" },
];

const PatientTask = (props) => {
    return (
        <>
            <div>
                <div className="text-indigo-800 font-bold mb-3">Patients</div>
                <div className="md:flex md:flex-row md:flex-wrap md:gap-4">
                    {PatientsList.map((s) => (
                        <PatientCard PatientName={s.PatientName} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default PatientTask;
