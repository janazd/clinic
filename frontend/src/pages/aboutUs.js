import doctorImage2 from "../assets/360_F_617590908_JB8LMVnkvImML3zQCTWGK1rXX12pPfC3.jpg";
import doctorImage3 from "../assets/360_F_632907942_M6CVHD1ivhUrWK1X49PkBlSH3ooNPsog.jpg";
import doctorImage1 from "../assets/6ae1599c62af3dc358f95d68bf344298.jpg";

// src/pages/AboutUs.js
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"; // Ensure you import the Navbar component

const AboutUs = () => {
    return (
        <div>
            <Navbar /> {/* Add the Navbar component here */}
            <div className="container mx-auto px-4 py-8 bg-blue-100">
                {" "}
                <section
                    className="relative bg-cover bg-center h-64"
                    style={{
                        backgroundImage: "url('/path/to/hero-image.jpg')",
                    }}
                >
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative z-10 flex items-center justify-center h-full">
                        <h1 className="text-4xl font-bold text-white">
                            About Us
                        </h1>
                    </div>
                </section>
                {/* Introduction */}
                <section className="my-8">
                    <h2 className="text-3xl font-semibold mb-4 text-indigo-800">
                        Welcome to MedConnect!
                    </h2>
                    <p className="mb-4 text-gray-700">
                        At MedConnect, we are committed to delivering
                        exceptional healthcare services to our community. Our
                        dedication stems from a profound belief in the
                        importance of accessible and high-quality healthcare for
                        everyone.{" "}
                    </p>
                </section>
                {/* Mission Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-indigo-800">
                        Our Mission
                    </h2>
                    <p className="text-gray-700">
                        Our mission at MedConnect is clear: to bridge the gap
                        between patients and top-tier healthcare professionals.
                        We strive to facilitate seamless connections, ensuring
                        that individuals receive the utmost care and attention
                        they deserve. Through innovative technology and a
                        network of trusted medical practitioners, we aim to
                        revolutionize the healthcare experience. Whether it's
                        finding the right specialist, scheduling appointments,
                        or accessing vital medical information, MedConnect is
                        here to streamline the process and prioritize patient
                        well-being above all else. Join us in our journey to
                        transform healthcare delivery and make a meaningful
                        impact on the lives of individuals and communities
                        worldwide. At MedConnect, your health and wellness are
                        our top priorities.{" "}
                    </p>
                </section>
                {/* Team Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-indigo-800">
                        Our Team
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <img
                                src={doctorImage1}
                                alt="Doctor 1"
                                className="w-full h-64 object-cover rounded-t-lg"
                            />
                            <h3 className="text-xl font-bold mt-2 text-indigo-800">
                                Dr. Rawan
                            </h3>
                            <p className="text-gray-700">Cardiologist</p>
                            <p className="text-gray-600 mt-2">
                                Dr. Rawan has over 20 years of experience in
                                cardiology and is dedicated to providing the
                                best care for his patients.
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <img
                                src={doctorImage2}
                                alt="Doctor 2"
                                className="w-full h-64 object-cover rounded-t-lg"
                            />
                            <h3 className="text-xl font-bold mt-2 text-indigo-800">
                                Dr. Jana Zeindine
                            </h3>
                            <p className="text-gray-700">Neurologist</p>
                            <p className="text-gray-600 mt-2">
                                Dr. Jana Zeindine specializes in neurology and
                                is committed to advancing the field through
                                research and patient care.
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <img
                                src={doctorImage3}
                                alt="Doctor 3"
                                className="w-full h-64 object-cover rounded-t-lg"
                            />
                            <h3 className="text-xl font-bold mt-2 text-indigo-800">
                                Dr. Jawad Hillani
                            </h3>
                            <p className="text-gray-700">Pediatrician</p>
                            <p className="text-gray-600 mt-2">
                                Dr. Jawad Hillani is a compassionate
                                pediatrician who has been caring for children
                                for over 15 years.
                            </p>
                        </div>
                    </div>
                </section>
                {/* Location Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-indigo-800">
                        Our Location
                    </h2>
                    <div className="w-full h-64">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13259.90986275499!2d35.6095789!3d33.8128946!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f22d5f6000d95%3A0x33a3a916f4b9a48f!2sAley%20Center!5e0!3m2!1sen!2slb!4v1716002893229!5m2!1sen!2slb"
                            title="clinic-location"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                        ></iframe>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutUs;
