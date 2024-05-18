import BillingCard from "./BillingCard";

const Categories = [
    { id: 0, name: "All" },
    { id: 1, name: "Paid" },
    { id: 2, name: "Pending Payment" },
];

const BillingandPayment = [
    { Status: "Pending", PatientName: "Rawan", Deadline: "25/5/2024" },
    { Status: "Paid", PatientName: "Jana", Deadline: "None" },
];

const BillingTask = (props) => {
    const { setCount } = props;
    return (
        <>
            <div className="mb-s5">
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
                    Billings & Payments
                </div>
                <div className="md:flex md:flex-row md:flex-wrap md:gap-4">
                    {BillingandPayment.map((s) => (
                        <BillingCard
                            Status={s.Status}
                            PatientName={s.PatientName}
                            Deadline={s.Deadline}
                        />
                    ))}
                </div>
            </div>

            <div className="border border-t-0 md:border-none border-gray-200 rounded-b-lg flex justify-end">
                <button
                    onClick={(e) => {
                        setCount((count) => count + 1);
                    }}
                    className="flex justify-center align-center my-4 mr-6 px-4 py-3 text-white bg-indigo-800 hover:bg-indigo-700 disabled:bg-gray-400 rounded-lg"
                    // disabled={appointment.service === undefined}
                >
                    Next:{" "}
                </button>
            </div>
        </>
    );
};

export default BillingTask;
