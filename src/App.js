import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

function App() {
    let state=useSelector(state=>state)
    console.log(state);

    let dispatch = useDispatch();
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
            dispatch({type:'LOAD_USERS',payload:value})
                });

    },[])
    // dispatch({type:'CHOOSE_USER',payload:1})

    return (
        <div>

        </div>
    );
}

export default App;