import React from "react";
import { MountainIcon } from "../assets";

function ServiceCard(props) {
    const { name, duration, price } = props;

    return (
        <div className="flex border border-gray-300 rounded-md px-4 py-3 mb-5">
            <div className="flex justify-center items-center mr-5">
                <div className="p-2 border border-gray-300 rounded-full">
                    <MountainIcon className="h-8 w-8" />
                </div>
            </div>
            <div>
                <div className="font-bold">{name}</div>
                <div className="flex gap-4 mt-2">
                    <div className="">
                        Duration:{" "}
                        <span className="font-bold">{duration} m</span>
                    </div>
                    <div>
                        Price: <span className="font-bold">${price}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceCard;
