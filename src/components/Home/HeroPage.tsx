import React from "react";

const HeroPage = () => {
	return (
    <div className="pt-[7.5rem] lg:w-[820px] p-4 lg:mx-auto  relative max-sm:w-screen max-md:overflow-hidden mt-20 max-md:mt-12">
      <div>
			<h1 className="text-4xl max-w-[645px] pb-10 text-slate-800 max-sm:text-3xl">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit
			</h1>
			<p className="max-sm:text-slate-100 shadow-md p-6 rounded-md max-sm:from-slate-500 max-sm:to-slate-900 bg-gradient-to-tr bg-opacity-10 text-base max-w-xl md:ml-[3rem] ">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, deserunt nihil.
				Similique reprehenderit laboriosam asperiores rerum molestiae ducimus ipsa perferendis
				praesentium. Facilis amet labore deleniti mollitia porro modi 
			</p>
      </div>
      <div className="from-blue-300 to-blue-400 bg-gradient-to-tr p-6 fixed -top-10  max-md:-right-40 opacity-10 h-[300px] w-[470px] rounded-full -rotate-45 md:hidden">
      </div>
		</div>
	);
};

export default HeroPage;
