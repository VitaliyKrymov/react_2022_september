import {Route, BrowserRouter, Routes, Link, Outlet} from "react-router-dom";
import {Users} from "./users";
import {UserDetails} from "./userDetails/UserDetails";

function App() {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>home page</Link></li>
                <li><Link to={'/users'}>users</Link></li>
                <li><Link to={'/posts'}>posts page</Link></li>
            </ul>

            <hr/>
            <Routes>
                <Route path={'/'} element={'Home'}/>

                <Route path={'users'} element={<Users/>}/>
                <Route path={'users/:id'} element={<UserDetails/>}/>
                <Route path={'users/v2/:id'} element={<UserDetailsV2/>}/>
                <Route path={'posts'} element={<Posts/>}>
                    <Route/>
                    <Route/>


                </Routes>
                    <hr/>
                    </div>
                    );
                }

                       export default App;