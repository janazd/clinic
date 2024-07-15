import { Link } from "react-router-dom";

function Admin() {
    return (
        <>
            <h1 className="my-5 mx-3">Admin Page</h1>
            <div className="flex gap-5 ml-3">
                <Link
                    className="p-3 border border-black rounded-md"
                    to={"/admin/appointment"}
                >
                    Appointment
                </Link>
                <Link
                    className="p-3 border border-black rounded-md"
                    to={"/admin/doctor"}
                >
                    Doctor
                </Link>
                <Link
                    className="p-3 border border-black rounded-md"
                    to={"/admin/patient"}
                >
                    Patient
                </Link>
            </div>
        </>
    );
}

export default Admin;
