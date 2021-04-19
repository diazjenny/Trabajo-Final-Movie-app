import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/",
    params: {
        api_key: '5d9308da17518f6708778aaf67c4951a',
        language: 'es',
        page: 1
    }
});

const apiSearch = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '5d9308da17518f6708778aaf67c4951a',
        language: 'es',
        page: 1
    }
});

export { api, apiSearch };