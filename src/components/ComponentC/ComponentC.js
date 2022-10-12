import {MyContext} from "../../App";

const ComponentC = ({drill}) => {
    return (
        <div>
            ComponentC
            <hr/>
            {drill}
            <MyContext.Consumer>
                {(value)=>value.map(user=>{
                    return <h4>
                        {user.name}  -  {user.username}
                       <h5> {JSON.stringify(user)}</h5>
                        <hr/>
                    </h4>}
                )}
            </MyContext.Consumer>
        </div>
    );
};

export {ComponentC};