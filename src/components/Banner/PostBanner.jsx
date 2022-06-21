import styles from "./banner.module.css";

const PostBanner = () => {
    return (
        <div className={styles["banner"]} style={{"backgroundImage": "url(../../../public/assets/post-background6.jpg)"}}>
			<div class={styles["max-width"]}>
				<div class={styles["banner-contents"]}>
					<p class={styles["today"]}>May <em>25</em> Wednesday</p>
				</div>
			</div>
		</div>
    );
}

export default PostBanner;