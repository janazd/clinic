import axios from "axios";

const API_URL = "http://localhost:5000";
const config = {
    headers: {
        "Content-Type": "application/json",
    },
};

const loginUser = async (user) => {
    const { email, password } = user;

    try {
        const response = await axios.post(
            `${API_URL}/user/login`,
            { email, password },
            config
        );
        console.log(response);

        localStorage.setItem("userInfo", JSON.stringify(response.data.token));

        return { status: response.status, data: response.data };
    } catch (err) {
        console.error(err);
        return { status: err.response.status, data: err.response.data };
    }
};

export { loginUser };
