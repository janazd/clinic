import axios from "axios";

const API_URL = "http://localhost:5000";
const config = {
    headers: {
        "Content-Type": "application/json",
    },
};

const getAllServices = async () => {
    const response = await axios.get(`${API_URL}/service`, config);

    // console.log(response);
    return response.data;
};

const getServicesByCategory = async (name) => {
    const response = await axios.get(
        `${API_URL}/service/category/${name}`,
        config
    );

    // console.log(response);
    return response.data;
};

const getAllCategories = async () => {
    const response = await axios.get(`${API_URL}/service/categories`, config);

    // console.log(response);
    return response.data;
};

export { getAllServices, getAllCategories, getServicesByCategory };
