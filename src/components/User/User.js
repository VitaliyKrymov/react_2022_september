import {useState} from "react";

import {Posts} from "../Posts/Posts";
import {getPostsById} from "../../services/axios.service";

const User = ({user}) => {
    const [posts, setPosts] = useState(null);

    const showPosts = () => {
        // console.log('Posts')
        getPostsById(user.id).then(posts => setPosts(posts.data))
    }

    const [hidden, setHidden] = useState(false);

return (
    <div>
        <div>{user.id}</div>
        <div>{user.name}</div>
        <div>{user.email}</div>
        <div>{user.username}</div>

        {
            posts && <Posts key={posts.id} id={posts.id} posts={posts}/>
        }

        {!hidden && <button onClick={() => {
            setHidden(true);
            showPosts(posts);
        }}>Posts</button>}

        <hr/>
        <hr/>
    </div>
);
}


export {User}