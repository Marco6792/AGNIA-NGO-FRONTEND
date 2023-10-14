import React from "react";
import useMediaQuery from "../../../hooks/useMediaQuery";
import Mobile from "./Mobile";
import NotMobile from "./NotMobile";

const NavBar = () => {
  const isAboveMobileScreen = useMediaQuery("(min-width: 700px)");
	// console.log({ isAboveMobileScreen: isAboveMobileScreen });

	return (
		<React.Fragment>
			{isAboveMobileScreen ? <NotMobile /> : <Mobile />}
			<div className="flex justify-center fixed left-2/4 right-2/4">
				<div className="bg-purple-200 h-[150px] w-[400px] fixed top-2 bg-opacity-10 opacity-35 mx-auto rounded-full max-w-md "></div>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
