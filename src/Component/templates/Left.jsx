import React, { useState } from "react";
import { Link } from "react-router-dom";

const Left = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className="h-full w-full lg:w-[20%] lg:min-w-[250px] border-r-2 border-zinc-400 p-10">
			<div className="absolute top-1 left-1 lg:hidden">
				<button onClick={() => setIsMenuOpen(!isMenuOpen)}>
					<i className="text-[#F9E800] ri-menu-line text-3xl"></i>
				</button>
			</div>
			<div className={`lg:block ${isMenuOpen ? "block" : "hidden"}`}>
				<h1 className="text-2xl lg:text-3xl text-white font-bold">
					<i className="text-[#F9E800] ri-mac-fill mr-2"></i>
					<span className="font-serif">MovieCosmos</span>
				</h1>
				<nav className="flex flex-col text-zinc-400 mt-8 lg:mt-12">
					<h1 className="text-xl lg:text-2xl text-white font-semibold mb-3">
						News Feed
					</h1>
					<Link
						to="/trending"
						className="hover:bg-[#3f3f3f] hover:text-white duration-300 rounded-lg p-3">
						<i className="ri-fire-fill"></i> Trending
					</Link>
					<Link
						to="/popular"
						className="hover:bg-[#3f3f3f] hover:text-white duration-300 rounded-lg p-3">
						<i className="mr-2 ri-bard-fill"></i>
						Popular
					</Link>
					<Link
						to="/movie"
						className="hover:bg-[#3f3f3f] hover:text-white duration-300 rounded-lg p-3">
						<i className="mr-2 ri-movie-2-fill"></i>
						Movies
					</Link>
					<Link
						to="/tv"
						className="hover:bg-[#3f3f3f] hover:text-white duration-300 rounded-lg p-3">
						<i className="mr-2 ri-tv-2-fill"></i>
						Tv Shows
					</Link>
					<Link
						to="/person"
						className="hover:bg-[#3f3f3f] hover:text-white duration-300 rounded-lg p-3">
						<i className="mr-2 ri-team-fill"></i>
						People
					</Link>
				</nav>
				<hr className="border-none h-[1px] bg-zinc-400 mt-3" />
				<nav className="flex flex-col text-zinc-400 mt-8 lg:mt-12">
					<h1 className="text-white font-semibold text-xl lg:text-2xl mb-5">
						Website Information
					</h1>
					<Link
						to="/About"
						className="hover:bg-[#3f3f3f] hover:text-white duration-300 rounded-lg p-3">
						<i className="mr-2 ri-team-fill"></i>
						About MovieCosmos
					</Link>
					<Link
						to="/Contact"
						className="hover:bg-[#3f3f3f] hover:text-white duration-300 rounded-lg p-3">
						<i className="mr-2 ri-team-fill"></i>
						Contact Us
					</Link>
				</nav>
			</div>
		</div>
	);
};

export default Left;
