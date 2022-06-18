import styles from "./header.module.css";
import Logined from "./Logined";
import Logouted from "./Logouted";

import Logo from "../../assets/Logo.svg";

const Header = ({profileImg, login}) => {
    return(
    <header>
        <div className={styles["max-width"]}>
            <h1>
                <a href="../">
                    <img src={Logo} alt="My Blog" />
                </a>
            </h1>
            {login ? <Logined profileImg={profileImg}/> : <Logouted />}
        </div>
    </header>
    );
}

export default Header;