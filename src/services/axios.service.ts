import axios from "axios";
import {baseURL} from "../configs";

const axiosService = axios.create({baseURL})

axiosService.interceptors.request.use(response=> {
    response.headers.Authorization = 'Authorization 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'
    return response
})

export {axiosService}