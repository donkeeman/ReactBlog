const Logouted = () => {
    return (
        <ul>
        {/* <!-- 로그아웃 --> */}
            <li>
                <a href="#" className="button gray">
                    <img src="../assets/icon-login.svg" alt="" />
                    <span>Login</span>
                </a>
            </li>
            <li class="only-pc">
                <a href="#" className="button gray">
                    <img src="../assets/icon-register.svg" alt="" />
                    <span>Register</span>
                </a>
            </li>
            {/* <!--// 로그아웃 --> */}
        </ul>
    );
}

export default Logouted;