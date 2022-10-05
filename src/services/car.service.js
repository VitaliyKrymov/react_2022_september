import {axiosService} from "./axios.service";

import {urls} from "../configs";

const carService={
    getAll:()=>axiosService.get(urls.cars),
    create:(car)=>axiosService.post(urls.cars,car),
    getById:(id)=>axiosService.get(`S{urls.cars}/S{id}`),
    updateById:(id)=>axiosService.put(`${urls.car}/${id}`),
    deleteById:(id)=>axiosService.delete(`${urls.car}/${id}`)
}

export {carService}

