import PrescriptionCard from "./PrescriptionCard";

const Prescriptions = [
    {
        Date: "Monday, May 20th, 2024",
        PatientName: "Rawan Ghobar",
        Medicine: "panadol",
    },
    {
        Date: "Tuesday, May 21st, 2024",
        PatientName: "Jana Zeineddine",
        Medicine: "Profinal",
    },
];

const PrescriptionsTask = (props) => {
    return (
        <>
            <div>
                <div className="text-indigo-800 font-bold mb-3">
                    Prescriptions
                </div>
                <div className="md:flex md:flex-row md:flex-wrap md:gap-4">
                    {Prescriptions.map((s) => (
                        <PrescriptionCard
                            Date={s.Date}
                            PatientName={s.PatientName}
                            Medicine={s.Medicine}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default PrescriptionsTask;
