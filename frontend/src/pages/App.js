import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import banner from "../assets/banner.png";

function App() {
    return (
        <div className="bg-blue-200 h-screen">
            <Navbar />
            <div className="w-4/5 bg-blue-950 mx-auto rounded-3xl flex flex-col md:flex-row items-center justify-center md:justify-between p-8 shadow-2xl shadow-blue-900">
                <img className="w-96" src={banner} alt="nurse" />
                <div className="text-white flex flex-col items-center justify-center">
                    <div className="text-5xl text-center mt-8 md:mt-0">
                        Welcome to MedConnect
                    </div>

                    <Link
                        to="/appointment"
                        className="mt-8 w-1/2 px-4 py-3 flex items-center justify-center text-white bg-indigo-700 hover:bg-indigo-600 rounded-full"
                    >
                        Book a Visit
                    </Link>
                    <div className="text-lg mt-5">
                        Have an account?{" "}
                        <Link
                            to="/login"
                            className="text-indigo-500 hover:text-indigo-400"
                        >
                            Sign in now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
