import { SummaryPageIcon } from "../assets";

const Summary = (props) => {
    const { name, service, date, price } = props;

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
                    <div className="font-bold">{name}</div>
                </div>
                <div className="flex justify-between pb-5">
                    <div className="px-4 py-2 border-r">
                        <div>Service</div>
                        <div className="font-bold">{service}</div>
                    </div>
                    <div className="px-4 py-2">
                        <div>Date & Time</div>
                        <div className="font-bold">{date}</div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between mt-3 px-6 pb-3 border-b font-bold">
                <div>Total Amount Payable</div>
                <div>${price}</div>
            </div>
        </>
    );
};

export default Summary;
