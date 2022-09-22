import React, {useEffect, useState} from 'react';
import {getUserAxios} from "../services/user.api.axios.service";

export default function UserChoser(){

    let [user,setUser] =useState(null);
    let [id,setId] =useState(1);



    const increment =()=>{
        id++;
        setId(id)
        console.log(id);}
    const decrement =()=>{
        id--;
        if(id<1){id=1}
        setId(id)
        console.log(id);}

    useEffect(()=>{
        console.log('effect');
        getUserAxios(id).then(({data})=>{
            setUser(data)
        })
    },[id])

    return (


        <div>
            <h3>{JSON.stringify(user)}</h3>
            <button onClick={()=>{
                decrement(id)
            }}>prev</button>
            <button onClick={()=>{
                increment(id)
            }}>next</button>

        </div>
    );
}

// export {UserChoser};