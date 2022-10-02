const Posts = ({posts}) => {

    return (
        <div>
            <hr/>
            <h3>Posts:</h3>
            {posts.map(value => value.title)}

        </div>
    );
};

export {Posts};