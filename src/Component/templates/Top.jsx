import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimage from "/No_image.jpg";

const Top = () => {
	const [query, setQuery] = useState("");
	const [searches, setSearches] = useState([]);
	const [isSearchOpen, setIsSearchOpen] = useState(false);

	const getSearches = async () => {
		try {
			const { data } = await axios.get(`/search/multi?query=${query}`);
			setSearches(data.results);
		} catch (error) {
			console.log("Error: ", error);
		}
	};

	useEffect(() => {
		if (query.trim() !== "") {
			getSearches();
		} else {
			setSearches([]);
		}
	}, [query]);

	return (
		<div className="relative w-full mx-auto md:max-w-[80%] lg:max-w-[60%] mt-4">
			<div className="flex items-center">
				<i
					className="text-zinc-400 text-3xl ri-search-line mr-2 cursor-pointer"
					onClick={() => setIsSearchOpen(!isSearchOpen)}></i>
				<input
					onChange={(e) => setQuery(e.target.value)}
					value={query}
					className="flex-grow text-zinc-200 p-3 md:p-5 text-xl outline-none border-none bg-transparent"
					type="text"
					placeholder="Search anything"
				/>
				{query.length > 0 && (
					<i
						onClick={() => setQuery("")}
						className="text-zinc-400 text-3xl ri-close-fill cursor-pointer"></i>
				)}
			</div>
			{isSearchOpen && (
				<div className="z-[100] absolute w-full bg-[#3F3F3F] text-white mt-2 overflow-auto rounded-lg">
					{searches.map((s, i) => (
						<Link
							to={`/${s.media_type}/details/${s.id}`}
							key={i}
							className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold p-3 md:p-5 flex items-center border-b-2 border-zinc-100">
							<img
								className="w-14 h-14 md:w-[10vh] md:h-[10vh] object-cover rounded mr-3 md:mr-5 shadow-lg"
								src={
									s.backdrop_path || s.profile_path
										? `https://image.tmdb.org/t/p/original/${
												s.backdrop_path || s.profile_path
										  }`
										: noimage
								}
								alt=""
							/>
							<span className="truncate w-full">
								{s.name || s.title || s.original_name || s.original_title}
							</span>
						</Link>
					))}
				</div>
			)}
		</div>
	);
};

export default Top;
