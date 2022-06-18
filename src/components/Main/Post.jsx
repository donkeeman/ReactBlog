const Post = ({thumbnail, title, mainBg, category, profileImg, contents, userName, created}) => {
    return(
        <a href="post-view.html" class="post">
            <article>
                <img src={thumbnail} alt="" />
                <div class="contents-wrap">
                    {/* <!-- category --> */}
                    <dl class="category">
                        <dt class="a11y-hidden">Category</dt>
                        {
                            category.map( (x, i) => <dd key={i}>{x}</dd>)
                        }
                    </dl>
                    {/* <!-- //category --> */}

                    <h3>{title}</h3>

                    {/* <!-- author --> */}
                    <dl class="author-wrap">
                        <dt class="a11y-hidden">Author</dt>
                        <dd class="author"><img src={profileImg} alt="" /> Chilli</dd>
                        <dt class="a11y-hidden">Created</dt>
                        <dd class="created">{created}</dd>
                    </dl>
                    {/* <!-- //author --> */}

                    <p class="post-description">
                        {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est
                        facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta
                        corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
                        illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum
                        dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis
                        dolor quas odio cum incidunt repudiandae vel." */}
                        {contents[0].text}
                    </p>
                </div>
            </article>
        </a>
    );
}

export default Post;