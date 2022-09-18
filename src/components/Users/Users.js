import {useEffect, useState} from "react";

import User from "../User/User";

export default function Users() {
    let [users, setUsers] = useState([]);
    let [user, setUser] = useState(null);
    // let [user,setUser]=useState({});

    let lift = (obj) => {
        console.log(obj);
        setUser(obj)

    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                console.log(value);
                setUsers(value);
            });
    }, [])

    return (
        <div>
            <hr/>
            {/*{user && <div>{JSON.stringify(user)}</div>}*/}
            {/*{user? <div> user is </div> : <div> no user </div>}*/}
            {/*{JSON.stringify(user)}*/}
            <h3>{user?.username}</h3>
            <hr/>
            {users.map((user, index) => (<User
                item={user}
                key={index}
                lift={lift}/>))};

        </div>
    );
};

