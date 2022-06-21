import Banner from "../components/Banner/Banner";
import Main from "../components/Main/Main"

const HomePage = ({data}) => {
    return(
        <>
            <Banner mainTitle={data.mainTitle} subTitle={data.subTitle} description={data.description}/>
            <Main />
        </>
    );
}

export default HomePage;