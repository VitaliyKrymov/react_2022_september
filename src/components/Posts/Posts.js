const Posts = ({posts}) => {

    return (
        <div>
            <hr/>
            <h4>Posts:</h4>
            {posts.map(value => value.title)}
        </div>
    );
};

export {Posts};