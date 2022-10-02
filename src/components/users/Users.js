import {useEffect, useState} from "react";

import {userService} from "../../services";
import {User} from "../user/User";

const Users = () => {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(users => setUsers(users.data))
    }, [])

    return (
        <div>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }


        </div>
    );
};

export {Users};