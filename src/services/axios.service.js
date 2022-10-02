import axios from "axios";
import {baseURL, urls} from "../config/urls";

let axiosInstance = axios.create({baseURL});

const getUsers=() => axiosInstance.get(urls.users);
// const getPostsById=(id)  => axiosInstance.get(`${urls.postsById}${id}`);
const getPostsById=(id)  => axiosInstance.get(urls.postsById+id);

export {getUsers, getPostsById}
