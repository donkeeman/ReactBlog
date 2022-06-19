import styles from "./main.module.css";
import Posts from "./Posts";
import About from "./About";
import data from "../../database/data.json";

const Main = () => {
    return(
        <main>
			{/* <!-- posts --> */}
			<div class={`${styles["max-width"]} ${"max-width"}`}>
				<h2 class="a11y-hidden">Post</h2>
				<Posts posts={data.posts} />
				{/* <!-- //posts --> */}
				{/* <!-- about --> */}
				<About user={data.users[0]} />
				{/* <!-- //about --> */}
			</div>
		</main>
    );
};

export default Main;