import axios from "axios";


const axiosApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers:{
        'Content-Type':'application/json'
    }
});

axiosApi.interceptors.request.use(function (config){
    return config;
}, function(error){
    return Promise.reject(error);
})




axiosApi.interceptors.response.use(function (response){
    return response;
}, function(error){
    return Promise.reject(error);
})