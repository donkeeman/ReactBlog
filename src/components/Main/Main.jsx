import Posts from "./Posts";
import About from "./About";
import data from "../../database/data.json";

const Main = () => {
    return(
        <main>
			{/* <!-- posts --> */}
			<div class="max-width">
				<h2 class="a11y-hidden">Post</h2>
				<Posts posts={data.posts} />
				{/* <!-- //posts --> */}
				{/* <!-- about --> */}
				<About user={data.users[1]} />
				{/* <!-- //about --> */}
			</div>
		</main>
    );
};

export default Main;