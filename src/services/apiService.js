import axios from "axios";

export const API_BASE_URL = "https://test.create.diagnal.com/";

const api = axios.create({
    baseURL: API_BASE_URL
});

export const fetchContentPage = async(page) => {
    try {
        const response = await api.get(`data/page${page}.json`);
        return response.data;
    } catch(error) {
        console.error(`Error Fetching page ${page}`, error);
        throw error;
    }
}

export default api;