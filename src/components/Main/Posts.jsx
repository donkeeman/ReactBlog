import Post from "./Post";

const Posts = ({posts}) => {
    return (
        <ul class="posts">
            {posts.map( x => {
                return(
                <li key={x.id}>
                    <Post
                    thumbnail={x.thumbnail}
                    title={x.title}
                    mainBg={x.mainBg}
                    category={x.category}
                    profileImg={x.profileImg}
                    contents={x.contents}
                    userName={x.userName}
                    created={x.created}
                    />
                </li>
                );
            })}
        </ul>
    );
}

export default Posts;