import styles from "./footer.module.css";

const Footer = () => {
    return (
        <footer>
			<div class={styles["max-width"]}>
				<h2>©Weniv Corp.</h2>
				<button class={styles["top-button"]}>TOP</button>
			</div>
		</footer>
    );
}

export default Footer;