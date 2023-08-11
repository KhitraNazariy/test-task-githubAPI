import axios from "axios";
import {baseURL} from "../configs";

const axiosService = axios.create({baseURL})

axiosService.interceptors.request.use(response=> {
    response.headers.Authorization = 'Authorization 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'
    return response
})

export {axiosService}