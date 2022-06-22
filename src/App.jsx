import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../src/components/Header/Header"
import Footer from "../src/components/Footer/Footer"

import HomePage from "./pages/HomePage";
import PostView from "./pages/PostView";

import data from "../src/database/data.json";

import "./app.css";

function App() {
	return(
		<BrowserRouter>
			<Header profileImg={data.users[0].profileImg} />
			<Routes>
			<Route
				path="/"
				element={<HomePage data={data.blog} />}
			/>
			<Route
				path="/post-view"
				element={<PostView />}
			/>
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
