// import { useState } from "react";

import Header from "../components/Header/Header"
import Banner from "../components/Banner/Banner";
import Main from "../components/Main/Main"
import Footer from "../components/Footer/Footer"

import data from "../database/data.json"

// const [login, setLogin] = useState(true);

const Homepage = () => {
    return(
    <>
        <Header profileImg={data.users[1].profileImg} login={false} />
        <Banner mainTitle={data.blog.mainTitle} subTitle={data.blog.subTitle} description={data.blog.description}/>
        <Main />
        <Footer />
    </>
    );
}

export default Homepage;