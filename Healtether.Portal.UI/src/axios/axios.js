import axios from 'axios'
const SERVER_URL = import.meta.env.VITE_SERVER_URL;
console.log(SERVER_URL)
const axiosInstance = axios.create({
    baseURL: SERVER_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});
export default axiosInstance