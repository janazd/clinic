import axios from "axios";
import loginUser from "./users";
import createNewDoctor from "./doctors";
import createNewPatient from "./patient";
import createNewAppointment from "./appointment";
import {
    getAllServices,
    getAllCategories,
    getServicesByCategory,
} from "./service";

export default axios;

export {
    loginUser,
    createNewDoctor,
    createNewPatient,
    createNewAppointment,
    getAllServices,
    getServicesByCategory,
    getAllCategories,
};
