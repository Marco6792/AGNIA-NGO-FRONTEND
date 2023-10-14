import React from "react";
import VIDEO1 from "../assets/VID-20231008-WA0001.mp4"
import VIDEO2 from "../assets/VID-20231012-WA0002.mp4"
const Blog = () => {
	return (
		<div className="flex flex-col justify-center items-center pt-10  md:max-w-4xl mx-auto relative">
			<h1 className="text-2xl text-slate-700 shadow-md p-4 rounded-md from-blue-50 to-purple-50 bg-gradient-to-bl">
				Our Latest Posts
			</h1>
			<div className="mt-10 w-full max-sm:space-y-5 px-4 pb-6  grid grid-cols-2 gap-10 pt-10 max-sm:grid-cols-1 text-white max-sm:px-1">
				<div className="border max-sm:w-full rounded-md z-20 from-slate-300 to-slate-800 bg-gradient-to-r">
					<p className="underline text-slate-700">article: 1</p>
					<video src={VIDEO2} typeof="mp4" controls className="w-full h-[100%]" title="introduction"></video>
				</div>
				<div className="border p-10 max-sm:w-full rounded-md z-20 from-slate-300 to-slate-800 bg-gradient-to-r">
					<h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem soluta delectus, tempore dolorem dolores quibusdam eos ab fugit itaque deserunt eveniet nostrum? Id, voluptate hic. Aliquam, accusantium non? Cum, numquam?</h1>
				</div>
				<div className="border max-sm:w-full rounded-md z-20 from-slate-300 to-slate-800 bg-gradient-to-r">
				<p className="underline text-slate-700">article: 1</p>
				<video src={VIDEO1} typeof="mp4" controls className="w-full h-[100%]" title="introduction"></video>
				</div>
				<div className="border p-10 max-sm:w-full rounded-md z-20 from-slate-300 to-slate-800 bg-gradient-to-r">
					<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci explicabo blanditiis nemo culpa modi ipsum id at pariatur sit tenetur, incidunt quis eaque dolor obcaecati. Officia similique illum ipsam id?</h1>
				</div>
			</div>
			<div className="from-orange-50 to-purple-200 bg-gradient-to-bl p-6 fixed  md:right-80 opacity-10 h-[400px] w-[400px] rounded-full left-1/2 right-1/2 top-1/2 max-sm:left-0"></div>
		</div>
	);
};

export default Blog;
