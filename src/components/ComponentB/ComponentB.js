import {ComponentC} from "../ComponentC/ComponentC";

const ComponentB = ({drill}) => {
    return (
        <div>
            ComponentB
            <ComponentC drill={drill}/>
        </div>
    );
};

export {ComponentB};