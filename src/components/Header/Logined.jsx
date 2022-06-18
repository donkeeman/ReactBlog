// import styled from "styled-components";

// const profileImg = styled.li`

// `;

const Logined = ({profileImg}) => {
    return (
        <ul>
            {/* <!-- 로그인 --> */}
            <li className="profile-img" >
                <a href="#">
                    <img src={profileImg} alt="My Page" />
                </a>
            </li>
            <li>
                <a href="#" className="button">
                    <img src="../assets/icon-modify-white.svg" alt="" />
                    <span>Write</span>
                </a>
            </li>
            <li>
                <button className="button white">
                    <img src="../assets/icon-logout.svg" alt="" />
                    <span>Logout</span>
                </button>
            </li>
            {/* <!-- //로그인 --> */}
        </ul>
    );
}

export default Logined;