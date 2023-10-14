import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./components/Home/HomePage";
import About from "./components/About";
import Blog from "./components/Blog";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import useScrollHeight from "./hooks/useHeight";

function App() {

	const height = useScrollHeight("100px")
	console.log({ "scroll-height": height });
	
	const scrollPosition = window.pageYOffset;
	console.log(scrollPosition);
	
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path="/about" element={<About />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/contact" element={<Contact />} />
			</Route>
		</Routes>
	);
}

export default App;
