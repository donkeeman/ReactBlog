import styles from "./header.module.css";
import Logined from "./Logined";
import Logouted from "./Logouted";

import Logo from "../../assets/Logo.svg";

import {useState} from "react";

const Header = ({profileImg}) => {

    const [login, setLogin] = useState(true);

    // const handleLogin = () =>{
    //     setLogin(!login);
    //     console.log(login);
    // }

    return(
    <header>
        <div className={`${styles["max-width"]} ${"max-width"}`}>
            <h1>
                <a href="../">
                    <img src={Logo} alt="My Blog" />
                </a>
            </h1>
            {login
            ? <Logined profileImg={profileImg} setLogin={setLogin}/>
            : <Logouted setLogin={setLogin} />}
        </div>
    </header>
    );
}

export default Header;