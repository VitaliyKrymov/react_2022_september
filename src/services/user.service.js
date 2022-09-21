import {axiosService} from "./axios.service";

const userService= {
    getAll: () => axiosService.get('')
}
export {userService}