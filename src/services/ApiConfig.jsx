import axios from "axios";

const baseUrl = 'http://localhost:59353/api/';
const api = axios.create({
    baseURL: baseUrl
});

export default api;

