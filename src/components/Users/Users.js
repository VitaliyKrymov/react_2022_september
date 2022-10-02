import {useEffect, useState} from "react";

import {User} from "../User/User"
import {getUsers} from "../../services/axios.service";

const Users = () => {
    const [users,setUsers]=useState([]);

    useEffect(()=>{
        getUsers().then(users =>setUsers(users.data))} ,[] )
    // console.log(users);

    return (
        <div>
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users}