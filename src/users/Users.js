import {useEffect, useState} from "react";
import {User} from "../user";

const Users = () => {
    const [users, setUsers] = useState();
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                console.log(value)
                setUsers(value);
            });
    }, [])
    return (
        <div>
            {users && users.map((user, index) => (<User item={user} key={index}/>))}

        < /div>
    );
};

export {Users};