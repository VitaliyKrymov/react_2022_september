import {useLocation} from "react-router-dom";

export default  function DrillB() {
    let location = useLocation();
    console.log(location);
    return (
        <div>
            DrillB
        </div>
    );
}