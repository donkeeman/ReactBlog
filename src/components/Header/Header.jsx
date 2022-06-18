import Logined from "./Logined";
import Logouted from "./Logouted";

const Header = ({profileImg, login}) => {
    return(
    <header>
        <div className="max-width">
            <h1>
                <a href="../">
                    <img src="../assets/Logo.svg" alt="My Blog" />
                </a>
            </h1>
            {login ? <Logined profileImg={profileImg}/> : <Logouted />}
        </div>
    </header>
    );
}

export default Header;