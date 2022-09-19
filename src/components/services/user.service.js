import {axiosService} from "./axios.service";

const {userService} from "./axios.service";
import {urls} from "../config/urls";

const userService=
    getAll: ()=>axiosService.get(users)
