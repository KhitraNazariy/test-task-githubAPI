import {axiosService} from "./axios.service";
import {baseURL} from "../configs";
import GithubUserData from "../types/user.type";

export const userService = {
    getByName:(name:string)=> axiosService.get<GithubUserData>(`${baseURL}/${name}`)
}