import React from "react";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import useScrollHeight from "../hooks/useHeight";
import { Link } from "react-router-dom";

const SocialMediaLinks = () => {
	const isHeight = useScrollHeight("");
	return (
		<React.Fragment>
			{isHeight ? (
				<div className="fixed flex mx-auto md:hidden shadow-md p-3 bottom-3 max-w-[160px] -left-1/2 -right-1/2  z-40 bg-white w-full items-center rounded-md space-x-3 justify-center ">
					<Link to="/"><FaWhatsapp className="text-3xl cursor-pointer text-green-500"></FaWhatsapp></Link>
					<Link to="/"><FaFacebook className="text-3xl cursor-pointer text-blue-500"></FaFacebook></Link>
					<Link to="/"><FaLinkedin className="text-3xl cursor-pointer text-blue-800"></FaLinkedin></Link>
				</div>
			) : null}
		</React.Fragment>
	);
};

export default SocialMediaLinks;
