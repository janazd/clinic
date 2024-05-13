import ServiceCard from "./ServiceCard";

const ServiceTask = (props) => {
    const { Services, Categories } = props;
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
                <div className="md:flex md:flex-row md:flex-wrap md:gap-4">
                    {Services.map((s) => (
                        <ServiceCard
                            name={s.name}
                            duration={s.duration}
                            price={s.price}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default ServiceTask;
