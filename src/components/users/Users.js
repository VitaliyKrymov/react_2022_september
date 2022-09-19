import {useEffect, useState} from "react";

import {userService}

const Users=()=>{

    const Users=useState([]);
    const [user,setUser] = useState([])

    useEffect(()=>{
        get

    },[])

    return(
        <div>
            {

                users.map(user=><User key={user.id} user={user} showUser={showUser}/>)
            }
            {
                user && <UserDetails key ={user.id} />
            }
        </div>
    )

}
export {Users}