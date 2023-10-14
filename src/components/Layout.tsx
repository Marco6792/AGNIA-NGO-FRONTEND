import React, { useCallback, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./Home/NavBar";
import ScrollToTopButton from "./ScrollToTopButton";
import SocialMediaLinks from "./SocialMediaLinks";
import Footer from "./Footer";

import { useBottomScrollListener } from "react-bottom-scroll-listener";

const Layout = () => {
	const [bottom, setBottom] = useState<boolean>(false);

	const handleOnDocumentBottom = useCallback(() => {
		console.log("I am at bottom! " + Math.round(performance.now()));
		setBottom(true);
	}, []);
	useBottomScrollListener(handleOnDocumentBottom);

	console.log(bottom);

	return (
		<React.Fragment>
			<NavBar />
			<ScrollToTopButton />
			<SocialMediaLinks />
			<Outlet />
			<Footer />
		</React.Fragment>
	);
};
export default Layout;
