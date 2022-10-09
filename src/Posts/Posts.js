import {useEffect, useState} from "react";
import Post from "../Post/Post";
import {Outlet} from "react-router-dom";

function Posts() {

    let [posts, setPosts] = useState([]);
    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setPosts([...value]);
            });

    }, []);
    return (
        <div>

            <Outlet/>
            {
                posts.map(value => <Post key={value.id} post={value}/>)
            }

        </div>
    );
}

export {Posts}