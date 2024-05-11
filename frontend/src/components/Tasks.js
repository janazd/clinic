import React from "react";

function Tasks(props) {
    const { count, Icon, name } = props;
    return (
        <button className="flex items-center mr-8 md:mb-4">
            <span
                className={`h-8 w-8 mr-2 shadow-sm border rounded-md flex items-center justify-center ${
                    count === 0 ? "border-indigo-800 bg-indigo-800" : ""
                } `}
            >
                <Icon
                    className={`h-4 w-4 ${count === 0 ? "fill-white" : ""} `}
                />
            </span>
            <div className={count === 0 ? "text-indigo-700" : ""}>{name}</div>
        </button>
    );
}

export default Tasks;
