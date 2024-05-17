import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Admin, App, Appointment, Login } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
        path: "/admin",
        element: <Admin />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
