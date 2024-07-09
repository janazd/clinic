import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import {
    Admin,
    App,
    Appointment,
    Doctor,
    Login,
    Reminder,
    ContactUs,
    AboutUs,
} from "./pages";
import AdminAppointment from "./pages/admin/Appointment";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminDoctor from "./pages/admin/Doctor";

const UserContext = createContext(null);

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/appointment",
        element: <Appointment />,
    },
    {
        path: "/doctor",
        element: <Doctor />,
    },
    {
        path: "/admin",
        element: <Admin />,
    },
    {
        path: "/admin/appointment",
        element: <AdminAppointment />,
    },
    {
        path: "/admin/doctor",
        element: <AdminDoctor />,
    },
    {
        path: "/reminder",
        element: <Reminder />,
    },
    {
        path: "/contact",
        element: <ContactUs />,
    },
    {
        path: "/about",
        element: <AboutUs />,
    },
]);

const Users = () => {
    const [user, setUser] = useState({});

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <RouterProvider router={router} />
            <ToastContainer />
        </UserContext.Provider>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Users />
    </React.StrictMode>
);
