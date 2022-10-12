const Details = ({user}) => {
    return (
        <div>
            <h4> {user.name} - {user.username} </h4>
                <h5> {JSON.stringify(user)} </h5>
                <hr/>

        </div>
    );
};

export {Details};