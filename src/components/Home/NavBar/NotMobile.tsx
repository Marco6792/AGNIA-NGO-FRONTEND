import React from "react";
import { Link } from "react-router-dom";
import LOGO from "../../../assets/AGNIA-LOGO.jpg";

const NotMobile = () => {
	return (
		<React.Fragment>
			<div className="z-40 fixed backdrop-blur-lg backdrop-filter bg-opacity-30 w-full top-0 ">
				<div className="max-w-4xl w-full mx-auto flex justify-between items-center border-b px-2 py-4 border-slate-50 shadow-sm shadow-slate-50">
					<div>
						<Link to="/">
							<img src={LOGO} alt="AGNIA" className="w-[3.5rem] h-[3.5rem] rounded-full" />
						</Link>
					</div>
					<div className="flex space-x-5 items-center">
						<ul className="flex space-x-4 text-slate-700 font-semibold">
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/blog">Blog</Link>
							</li>
							<li>
								<Link to="/about">About</Link>
							</li>
							<li>
								<Link to="/projects">Projects</Link>
							</li>
							<li>
								<Link to="/contact">Contact Us</Link>
							</li>
						</ul>
						<button className="bg-blue-400 text-white px-3 py-2 rounded-[50px] cursor-pointer hover:bg-blue-500 transition">
							Become a member
						</button>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default NotMobile;
