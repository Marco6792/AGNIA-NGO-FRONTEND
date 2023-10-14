import { FaQuoteLeft} from "react-icons/fa6";

const Projects = () => {
	return (
		<div className="py-10 flex flex-col justify-center items-center pt-10  md:max-w-4xl mx-auto relative max-sm:px-2">
			<h1 className="text-2xl text-slate-700 shadow-md p-4 rounded-md from-blue-50 to-purple-50 bg-gradient-to-bl">
				Our Projects and Missions
      </h1>
      <p className="py-10 px-4 md:max-w-xl shadow-md  rounded-md">
      <FaQuoteLeft className="text-slate-700 text-4xl"></FaQuoteLeft>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, expedita autem? Ipsa facere nisi, veritatis aliquid numquam debitis provident voluptate eum aliquam praesentium labore. Sequi ut sint accusantium recusandae impedit!
      </p>
		</div>
	);
};

export default Projects;
