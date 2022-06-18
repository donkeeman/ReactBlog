import styles from "./about.module.css";

const About = ({user}) => {
    return(
        <aside class={styles["about"]}>
                <h2>About Me</h2>
                <img src={user.profileImg} alt="" className={styles["user-profile"]} />
                <p className={styles["user-name"]}>{user.name}</p>
                <p className={styles["user-description"]}>{user.userInfo}</p>
                <h3>Categories</h3>
                <ul className={styles["categories"]}>
                    {
                        user.category.map( (x, i) => <li key={i}><a href="#">{x}</a></li>)
                    }
                </ul>
                <h3>Follow</h3>
                <ul className={styles["sns"]}>
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

export default About;