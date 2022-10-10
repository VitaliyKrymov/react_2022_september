import {Route, Routes, Link} from "react-router-dom";

import css from './App.module.css'

import {Users} from "./users";
import {UserDetails} from "./userDetails/UserDetails";
import {Home} from "./Home/Home";
import {Posts} from "./Posts/Posts";
import {UserDetailsV2} from "./userDetails/UserDetailsV2";
import PostDetails from "./components/PostDetails/PostDetails";
import DrillA from "./components/DrillA/DrillA";
import DrillB from "./components/DrillB/DrillB";

// function UserPosts() {
//     return <div>Posts of user</div>;
// }

// function PostDetails() {
//     return null;
// }

function UserPosts() {
    return null;
}

function App() {

    return (
        <div>
            <ul>
                <li><Link className={css.link} to={'/'}>home page</Link></li>
                <li><Link to={'/users'}>users</Link></li>
                <li><Link to={'/posts'}>posts page</Link></li>
                <li><Link to={'/drill'}>drill</Link></li>
            </ul>

            <hr/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'users'} element={<Users/>}/>
                <Route path={'users/:id'} element={<UserDetails/>}/>
                <Route path={'users/:id/posts'} element={<UserPosts/>}/>
                <Route path={'users/v2/:id'} element={<UserDetailsV2/>}/>
                <Route path={'posts'} element={<Posts/>}>
                    {/*/posts/1/*/}
                    <Route path={':id'} element={<PostDetails/>}>
                    </Route>
                </Route>

                <Route path={'drill'} element={<DrillA/>}>
                    <Route path={'drillB'} element={<DrillB/>}/>
                </Route>

            </Routes>
            <hr/>
        </div>
    );
}

export default App;