import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMark } from "../assets";

function Navbar() {
    const [open, setOpen] = useState(false);

    const handleOpen = (e) => {
        e.preventDefault();
        setOpen(!open);
    };

    const OpenedNav = () => {
        return (
            <div className="absolute w-1/2 px-6 bg-blue-300 z-40 top-0 right-0 bottom-0">
                <div className="flex justify-end my-5">
                    <button onClick={handleOpen} className="z-50">
                        <XMark className="h-6 w-6" />
                    </button>
                </div>
                <ul className="mb-5">
                    <li className="my-3">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="my-3">
                        <Link to="/">About Us</Link>
                    </li>
                    <li className="my-3">
                        <Link to="/">Contact Us</Link>
                    </li>
                </ul>

                <Link
                    to="/appointment"
                    className="flex justify-center align-center mt-8 px-4 py-3 text-white bg-indigo-700 hover:bg-indigo-600 rounded-full"
                >
                    Book a Visit
                </Link>
            </div>
        );
    };

    return (
        <nav className="bg-blue-950 px-6 overflow-hidden mb-5">
            <div className="py-3 flex flex-wrap items-center justify-between mx-auto">
                <Link className="text-blue-100" to="/">
                    MedConnect
                </Link>
                <div className="hidden md:flex items-center justify-center">
                    <ul className="list-none flex flex-row text-blue-100">
                        <li className="mx-6">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="mx-6">
                            <Link to="/about">About Us</Link>
                        </li>
                        <li className="mx-6">
                            <Link to="/contact">Contact Us</Link>
                        </li>
                        <li className="mx-6">
                            <Link to="/reminder">Reminder</Link>
                        </li>
                    </ul>
                    <Link
                        to="/appointment"
                        className="px-4 py-3 text-white bg-indigo-700 hover:bg-indigo-600 rounded-full"
                    >
                        Book a Visit
                    </Link>
                </div>
                <div className="md:hidden flex items-center justify-center my-2">
                    <button onClick={handleOpen}>
                        <Bars3Icon className="h-6 w-6 stroke-white" />
                    </button>
                </div>
            </div>
            {open === true ? <OpenedNav /> : <></>}
        </nav>
    );
}

export default Navbar;
