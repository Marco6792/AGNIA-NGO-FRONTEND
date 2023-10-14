import React, { useReducer } from "react";
import LOGO from "../../../assets/AGNIA-LOGO.jpg"
import { FaBars, FaX } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { REDUCER_ACTION_TYPE, initState, reducer } from "../../../hooks/toggleNavBar";
import { motion, AnimatePresence } from "framer-motion";

const Mobile = () => {
	const [state, dispatch] = useReducer(reducer, initState);

	const handleToggleNav = (): void | any => {
		dispatch({ type: REDUCER_ACTION_TYPE.TOGGLENAV });
	};

	const item = {
		exit: {
			opacity: 0,
			height: 0,
			transition: {
				ease: "easeInOut",
				duration: 0.5,
				delay: 0.5,
			},
		},
	};

	return (
		<React.Fragment>
			<div className="z-40 fixed shadow-sm flex w-full justify-between top-0 items-centerw-full p-2 backdrop-blur-lg backdrop-filter bg-opacity-80 ">
				<div className="text-2xl cursor-pointer">
					<Link to="/"><img src={LOGO} alt="AGNIA"  className="w-[3.5rem] h-[3.5rem] rounded-full"/></Link>
				</div>
				<div
					className="text-3xl rounded-md border px-2 cursor-pointer flex items-center w-12 h-12 justify-center"
					onClick={handleToggleNav}>
					<FaBars></FaBars>
				</div>
			</div>
			<AnimatePresence>
				{state.toggle ? (
					<motion.div
						className="fixed h-screen pt-16 w-full flex flex-col place-items-center z-50 inset-0  bg-black text-white space-y-14"
						variants={item}
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "100vh", opacity: 1 }}
						transition={{ delay: .7 }}
						exit="exit">
						<div
							className="text-xl absolute right-2 top-2 border-2 rounded-md p-2  bg-white text-slate-900 cursor-pointer "
							onClick={handleToggleNav}>
							<FaX />
						</div>
						<ul className="flex space-y-12 flex-col  items-center">
							<motion.li
								initial={{ y: 80, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: 1.1 }}
								exit={{
									opacity: 0,
									y: 90,
									transition: {
										ease: "easeInOut",
										delay: 1,
									},
								}}
								onClick={handleToggleNav}>
								<Link to="/">Home</Link>
							</motion.li>
							<motion.li
								initial={{ y: 80, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: 1 }}
								exit={{
									opacity: 0,
									y: 90,
									transition: {
										ease: "easeInOut",
										delay: 0.8,
									},
								}}
								onClick={handleToggleNav}>
								<Link to="/Branches">Branche</Link>
							</motion.li>
							<motion.li
								initial={{ y: 80, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.9 }}
								exit={{
									opacity: 0,
									y: 90,
									transition: {
										ease: "easeInOut",
										delay: 0.7,
									},
								}}
								onClick={handleToggleNav}>
								<Link to="/blog">Blog</Link>
							</motion.li>
							<motion.li
								initial={{ y: 80, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.8 }}
								exit={{
									opacity: 0,
									y: 90,
									transition: {
										ease: "easeInOut",
										delay: 0.6,
									},
								}}
								onClick={handleToggleNav}>
								<Link to="/about">About</Link>
							</motion.li>
							<motion.li
								initial={{ y: 80, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.7 }}
								exit={{
									opacity: 0,
									y: 90,
									transition: {
										ease: "easeInOut",
										delay: 0.5,
									},
								}}
								onClick={handleToggleNav}>
								<Link to="/contact">Contact Us</Link>
							</motion.li>
						</ul>
						<motion.button
							className="px-3 py-2 rounded-md bg-blue-400"
							initial={{ y: 80, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: .7 }}
							exit={{
								opacity: 0,
								y: 90,
								transition: {
									ease: "easeInOut",
									delay: 0.4,
								},
							}}
							onClick={handleToggleNav}>
							Become a member
						</motion.button>
					</motion.div>
				) : null}
			</AnimatePresence>
		</React.Fragment>
	);
};

export default Mobile;
