import {ComponentA} from "./components/ComponentA/ComponentA";
import {createContext, useEffect, useState} from "react";

export let MyContext = createContext('default info');

function App() {
    let drill='some info';
    const [users,setUsers]=useState([]);
    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
                .then(value => value.json())
                .then(value => {
                    console.log(value)
                    setUsers(value);
                });
    },[])


    return (
        <div>
           App component
            <MyContext.Provider value={users}>
                <ComponentA drill={drill}/>
            </MyContext.Provider>

        </div>
    );
}

export default App;
