import {useEffect, useState} from "react";

import User from "../User/User";
import {getUsers} from "../services/user.api.service";
import {getPostsAxios, getUsersAxios} from "../services/user.api.axios.service";

export default function Users() {
    let [users, setUsers] = useState([]);
    let [user, setUser] = useState(null);
    // let [user,setUser]=useState({});

    let lift = (obj) => {
        console.log(obj);
        setUser(obj)
    }

    useEffect(() => {
        // getUsers().then(value => setUsers(value));
    getUsersAxios().then(value=>setUsers(value.data));
    getPostsAxios().then(value => console.log(value))
    }, [])

    return (
        <div>
            <hr/>
            {/*{user && <div>{JSON.stringify(user)}</div>}*/}
            {/*{user? <div> user is </div> : <div> no user </div>}*/}
            <h3>{user?.username}</h3>    {/*? - кастування до булевого значення. Якщо немає то нічого не робити*/}
            <hr/>
            {users.map((user, index) => (<User
                item={user}
                key={index}
                lift={lift}/>))};
        </div>
    )
};

