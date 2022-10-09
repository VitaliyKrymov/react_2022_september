import {Link, useNavigate} from "react-router-dom";

export default function Post({post}) {
    let navigate = useNavigate();
    return (
        <div>
            <Link to={`/posts/${post.id}`}><h3>{post.title}</h3>/></Link>
            <button onClick={() => {
                // /posts/:id
                navigate(post.id.toString(), {state: {...post}});
            }}>{post.title}</button>
        </div>
    );
}

