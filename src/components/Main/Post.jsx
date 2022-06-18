import styles from "./post.module.css";
import "./category.css";
import "./author.css";

const Post = ({thumbnail, title, mainBg, category, profileImg, contents, userName, created}) => {
    return(
        <a href="post-view.html" className={styles["post"]}>
            <article>
                <img src={thumbnail} alt="" />
                <div className={styles["contents-wrap"]}>
                    {/* <!-- category --> */}
                    <dl className="category">
                        <dt className="a11y-hidden">Category</dt>
                        {
                            category.map( (x, i) => <dd key={i}>{x}</dd>)
                        }
                    </dl>
                    {/* <!-- //category --> */}

                    <h3>{title}</h3>

                    {/* <!-- author --> */}
                    <dl className="author-wrap">
                        <dt className="a11y-hidden">Author</dt>
                        <dd className="author"><img src={profileImg} alt="" /> Chilli</dd>
                        <dt className="a11y-hidden">Created</dt>
                        <dd className="created">{created}</dd>
                    </dl>
                    {/* <!-- //author --> */}

                    <p className={styles["post-description"]}>
                        {contents[0].text}
                    </p>
                </div>
            </article>
        </a>
    );
}

export default Post;