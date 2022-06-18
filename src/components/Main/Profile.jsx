const Profile = ({user}) => {
    return(
        <aside class="about">
                <h2>About Me</h2>
                <img src={user.profileImg} alt="" class="user-profile" />
                <p class="user-name">{user.name}</p>
                <p class="user-description">{user.userInfo}</p>
                <h3>Categories</h3>
                <ul class="categories">
                    {
                        user.category.map( (x, i) => <li key={i}><a href="#">{x}</a></li>)
                    }
                </ul>
                <h3>Follow</h3>
                <ul class="sns">
                    {
                        Object.entries(user.sns).map((x, i) => {
                            return (
                                <li key={i}>
                                    <a href={x[1]}>
                                        <img src="./assets/Twitter.svg" alt={x[0]} />
                                    </a>
                                </li>
                            );
                        })
                    }
                </ul>
            </aside>
    );
}

export default Profile;