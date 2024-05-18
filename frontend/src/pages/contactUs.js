import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import contactImage from "../assets/doctor-at-office-vector-20699651.jpg";

const ContactUs = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSend = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/contact", formData);
            setPopupMessage("Your message has been sent successfully!");
            setShowPopup(true);
            setFormData({
                name: "",
                email: "",
                message: "",
            });
        } catch (error) {
            console.error(
                "Error sending contact form:",
                error.response ? error.response.data : error.message
            );
            setPopupMessage(
                "There was an error sending your message. Please try again."
            );
            setShowPopup(true);
        }
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    const handleClosePopup = () => setShowPopup(false);

    return (
        <div className="bg-blue-200 min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow flex items-center justify-center">
                <div className="w-full max-w-5xl bg-blue-950 mx-auto rounded-3xl flex flex-col md:flex-row items-center justify-center p-8 shadow-2xl shadow-blue-900 min-h-[80vh]">
                    <img
                        className="w-96 mb-8 md:mb-0 md:mr-8"
                        src={contactImage}
                        alt="Contact Us"
                    />
                    <div className="flex flex-col items-center justify-center w-full">
                        <h1 className="text-5xl text-white mb-8">Contact Us</h1>
                        <form
                            className="w-full max-w-2xl"
                            onSubmit={handleSend}
                        >
                            <div className="mb-4">
                                <label
                                    className="block text-white text-sm font-bold mb-2"
                                    htmlFor="name"
                                >
                                    Name
                                </label>
                                <input
                                    className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="name"
                                    type="text"
                                    placeholder="Your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-white text-sm font-bold mb-2"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <input
                                    className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-white text-sm font-bold mb-2"
                                    htmlFor="message"
                                >
                                    Message
                                </label>
                                <textarea
                                    className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="message"
                                    rows="5"
                                    placeholder="Your message"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    className="bg-indigo-700 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Send
                                </button>
                            </div>{" "}
                        </form>
                    </div>
                </div>
            </div>

            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded shadow-lg">
                        <p className="text-center text-lg mb-4">
                            {popupMessage}
                        </p>
                        <button
                            className="bg-indigo-700 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={handleClosePopup}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactUs;
