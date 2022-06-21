import styles from "./view.module.css";
import "./author.css";
import "./category.css";
import "../Header/button.css";
import "./wrapbox.css";

const View = () => {
    return(
        <div class="view">
			<div class="max-width">
				<section class="wrap-box">
					<div class="inner">
						{/* <!-- author --> */}
						<dl className={`${styles["author-wrap"]} ${"author-wrap"}`}>
							<dt class="a11y-hidden">Author</dt>
							<dd class="author"><img src="../../public/assets/profile.jpg" alt="" /> Chilli</dd>
							<dt class="a11y-hidden">Created</dt>
							<dd class="created">2022.05.25</dd>
						</dl>
						{/* <!-- //author --> */}

						{/* <!-- category --> */}
						<dl class={`${styles["category"]} ${"category"}`}>
							<dt class="a11y-hidden">Category</dt>
							<dd>Life</dd>
							<dd>Style</dd>
						</dl>
						{/* <!-- //category --> */}
						<div class={styles["title-wrap"]}>
							<h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
							<button class="btn-like">Like</button>
						</div>
						<hr />
						<div class="view-contents">
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est
								facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti
								dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum
								nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit
								amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio
								cum incidunt repudiandae vel.
							</p>
							<img src="../../../public/assets/post-background6.jpg" alt="" />
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est
								facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti
								dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum
								nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit
								amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio
								cum incidunt repudiandae vel.
							</p>
						</div>
						<div class="btn-group">
							<a href="/" class="btn-modify">
								<span class="a11y-hidden">modify</span>
							</a>
							<button type="button" class="btn-delete">
								<span class="a11y-hidden">delete</span>
							</button>
						</div>
						<a href="./" class={`${styles["btn-back"]} ${"btn-back"}`}>
							<span class="a11y-hidden">Back</span>
						</a>
					</div>
				</section>
			</div>
		</div>
    );
}

export default View;