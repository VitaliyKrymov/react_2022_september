import {ComponentB} from "../ComponentB/ComponentB";

const ComponentA = ({drill}) => {
    return (
        <div>
            ComponentA worked
            <ComponentB drill={drill}/>
        </div>
    );
};

export {ComponentA};