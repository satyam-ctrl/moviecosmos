import React from "react";
import { Link } from "react-router-dom";
const About = () => {
	document.title = "MovieCosmos | About";

	return (
		<div className="flex flex-col min-h-screen">
			<div className="container mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 flex-grow">
				<div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
					<div>
						<h2 className="text-3xl font-extrabold tracking-tight text-white  sm:text-4xl">
							About Movie Cosmos
						</h2>
						<p className="mt-3 max-w-3xl text-lg text-gray-500">
							Welcome to Movie Cosmos, your ultimate destination for discovering
							and enjoying movies and TV shows. Our platform offers a vast
							collection of titles spanning various genres and languages,
							ensuring that there's something for everyone to enjoy. Whether
							you're in the mood for the latest blockbusters, timeless classics,
							or hidden gems, Movie Cosmos has you covered
						</p>
						<p className="mt-3 max-w-3xl text-lg text-gray-500">
							Movie Cosmos is your ultimate destination for exploring movies and
							TV shows. With a vast collection of titles from various genres and
							languages, we strive to provide you with the best entertainment
							experience.
						</p>
						<p className="mt-3 max-w-3xl text-lg text-gray-500">
							Our platform offers comprehensive information about movies and TV
							shows, including details about cast and crew, ratings, reviews,
							trailers, and more. Whether you're looking for the latest
							blockbuster or a classic film, Movie Cosmos has you covered.
						</p>
					</div>
					<div className="mt-10 sm:mt-0">
						<div className="flex justify-center">
							<img
								className="h-64 w-auto"
								src="/film.png"
								alt="About Movie Cosmos"
							/>
						</div>
					</div>
				</div>
			</div>
			{/* Footer */}
			<footer className="bg-gray-900 text-gray-300 mt-auto">
				<div className="container mx-auto flex justify-between items-start py-4">
					<div className="flex-grow">
						<p className="p-3">
							&copy; {new Date().getFullYear()} Movie Cosmos. All rights
							reserved.
						</p>
					</div>
					<div className="flex items-center mx-10">
						<div className="p-3">
							<a href="#" className="text-blue-600">
								Privacy
							</a>
						</div>
						<div className="p-3">
							<a href="#" className="text-blue-600">
								Terms
							</a>
						</div>
						<div className="p-3">
							<a href="#" className="text-blue-600">
								Contact
							</a>
						</div>
						<div className="p-3">
							<a href="#" className="text-blue-600">
								FAQ
							</a>
						</div>
					</div>
					<p className="p-3">
						Made with ❤️ by{" "}
						<a href="#" className="text-blue-600">
							SATYAM SHARMA
						</a>
					</p>
				</div>
			</footer>
		</div>
	);
};

export default About;
