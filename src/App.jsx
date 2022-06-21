import { BrowserRouter , Route } from "react-router-dom";

import Header from "../src/components/Header/Header"
import Footer from "../src/components/Footer/Footer"

import HomePage from "./pages/HomePage";
import PostView from "./pages/PostView";

import data from "../src/database/data.json";

import "./app.css";

function App() {
	return(
		<BrowserRouter>
			<Header profileImg={data.users[1].profileImg} />
			<Route
				path="/" exact
				render={ props => <HomePage {...props} data={data.blog} />}
			/>
			<Route exact
				path="/postview"
				component={ props => <PostView {...props} />}
			/>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
