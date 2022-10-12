import {MyContext} from "../../App";
import {Details} from "../Details/Details";

const ComponentC = ({drill}) => {
    return (
        <div>
            <hr/>
            ComponentC
            <hr/>
            {drill}
            <MyContext.Consumer>
                {(value)=>value.map(user=><Details key={user.id} user={user}/>)}
            </MyContext.Consumer>
        </div>
    );
};

export {ComponentC};