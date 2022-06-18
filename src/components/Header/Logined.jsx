import styles from "./header.module.css";
import "./button.css"
import Write from "../../assets/icon-modify-white.svg";
import Logout from "../../assets/icon-logout.svg";

const Logined = ({profileImg}) => {
    return (
        <ul>
            {/* <!-- 로그인 --> */}
            <li className={styles["profile-img"]} >
                <a href="#">
                    <img src={profileImg} alt="My Page" />
                </a>
            </li>
            <li>
                <a href="#" className={`${"button"} ${styles["button"]}`}>
                    <img src={Write} alt="" />
                    <span>Write</span>
                </a>
            </li>
            <li>
                <button className={`${"button white"} ${styles["button"]}`}>
                    <img src={Logout} alt="" />
                    <span>Logout</span>
                </button>
            </li>
            {/* <!-- //로그인 --> */}
        </ul>
    );
}

export default Logined;