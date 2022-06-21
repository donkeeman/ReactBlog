import styles from "./banner.module.css";

const PostBanner = () => {
    return (
        <div className={styles["banner"]} style={{"backgroundImage": "url(/assets/post-background6.jpg)"}}>
			<div className={styles["max-width"]}>
				<div className={styles["banner-contents"]}>
					<p className={styles["today"]}>May <em>25</em> Wednesday</p>
				</div>
			</div>
		</div>
    );
}

export default PostBanner;