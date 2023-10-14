import React from "react";
import HeroPage from "./HeroPage";
import Blog from "../Blog";
import Projects from "../Projects";
import About from "../About";

const HomePage = () => {
	return (
		<React.Fragment>
			<HeroPage />
			<Blog />
			<Projects />
			<About />
		</React.Fragment>
	);
};

export default HomePage;
