import axios from "axios";

export const getNewsDataAsync = async () => {
    try {
        const responseNews = await axios.get(process.env.REACT_APP_DATA_SERVICE_URL);
        return responseNews.data.response.results;
    }
    catch (e) {
        return { error: `Error` };
    }
}