import { Link } from "react-router-dom";

const Header = ({ data }) => {
	// Define a fallback URL for the background image
	const backgroundImageUrl =
		data.backdrop_path ||
		data.profile_path ||
		"https://example.com/default-background.jpg";

	return (
		<div
			style={{
				background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://image.tmdb.org/t/p/original/${backgroundImageUrl})`,
				backgroundPosition: "cover",
				backgroundSize: "cover",
			}}
			className="w-full h-[50vh] flex flex-col justify-end items-start p-[5%]">
			<h1 className="w-[50%] text-3xl font-black text-white">
				{data.name || data.title || data.original_name || data.original_title}
			</h1>
			<p className="w-[70%] mt-3 mb-2 text-white">
				{data.overview.slice(0, 150)} ...
				<Link className="text-indigo-300 text-bold">more</Link>{" "}
			</p>
			<p className="text-white">
				<i className="text-yellow-500 ri-megaphone-fill">
					{" "}
					{data.release_date || "No information available"}
				</i>
				<i className="text-yellow-500 ml-5 ri-film-fill">
					{" "}
					{data.media_type.toUpperCase()}
				</i>
			</p>
			<Link className="bg-blue-600 p-3 rounded-lg text-white mt-2 font-semibold">
				Watch Trailer
			</Link>
		</div>
	);
};

export default Header;
