import axios from "axios";

export default axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: 'b11027c07eef0fa27665e605faaf1c8a'
    },
});