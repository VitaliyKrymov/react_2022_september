import {useSelector} from "react-redux";

function App() {
    let state = useSelector(state => state);
    console.log(state);
    return (
        <div>

        </div>
    );
}

export default App;