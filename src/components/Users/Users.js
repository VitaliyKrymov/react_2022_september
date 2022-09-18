import {useEffect, useState} from "react";

import User from "../User/User";

export  default function Users () {
    let [users,setUsers]=useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                console.log(value);
                setUsers(value);
            });
    },[])

    return (
        <div>
            {users.map((user,index)=>(<User item={user} key={index}/>))}
        </div>
    );
};

