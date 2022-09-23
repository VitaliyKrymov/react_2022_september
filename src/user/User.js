import React from 'react';
import {Link} from "react-router-dom";

const User = () => {
    let {item:user}=props;
    return (
        <div>
            <h2>{user.name}</h2>
            <link to={'/users'+user.id} state={{...user}}>details</link>
        </div>
    );
};

export {User};