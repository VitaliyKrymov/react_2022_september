import {createRef, useState} from "react";

function App() {
    const [loginUser, setLoginUser] = useState();
    const [passwordUser, setPasswordUser] = useState();

    let login = createRef();
    let password = createRef();

    function onSubmit(e) {
        console.log(login.current.value);
        console.log(password.current.value);

        setLoginUser(login.current.value);
        setPasswordUser(password.current.value)

        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" name={'login'} ref={login}/>
                <input type="text" name={'password'} ref={password}/>
                <button>Log in</button>
            </form>
            <hr/>
            {loginUser && <div>loginUser: {loginUser}</div>}
            {passwordUser && <div>passwordUser: {passwordUser}</div>}
        </div>
    );
}

export default App;