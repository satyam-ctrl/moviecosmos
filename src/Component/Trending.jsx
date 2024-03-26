import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Top from "./templates/Top";
import Dropdown from "./templates/Dropdown";
import axios from "../utils/axios";
import Cards from "./templates/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {
	document.title = "MovieCosmos | Trending";
	const navigate = useNavigate();
	const [category, setCategory] = useState("all");
	const [duration, setDuration] = useState("day");
	const [trending, setTrending] = useState([]);
	const [page, setPage] = useState(1);
	const [hasMore, setHasMore] = useState(true);

	const getTrending = async () => {
		try {
			const { data } = await axios.get(
				`/trending/${category}/${duration}?page=${page}`
			);

			if (data.results.length > 0) {
				setTrending((prevState) => [...prevState, ...data.results]);
				setPage(page + 1);
			} else {
				setHasMore(false);
			}
		} catch (error) {
			console.log("Error: ", error);
		}
	};

	const refreshHandler = () => {
		setPage(1);
		setTrending([]);
		setHasMore(true);
		getTrending();
	};

	useEffect(() => {
		refreshHandler();
	}, [category, duration]);

	return trending.length > 0 ? (
		<div className="w-full h-full">
			<div className="px-4 md:px-8 lg:px-12 py-4 lg:py-6 flex justify-between items-center">
				<h1 className="text-2xl font-semibold text-zinc-400">
					<i
						onClick={() => navigate(-1)}
						className="hover:text-[#6556CD] ri-arrow-left-line cursor-pointer"></i>{" "}
					Trending
				</h1>
				<div className="flex items-center w-[80%] md:w-auto">
					<Top />
					<div className="relative">
						<Dropdown
							className="bg-black"
							title="Category"
							options={["movie", "tv", "all"]}
							onChange={(value) => setCategory(value)}
						/>
					</div>
					<div className="w-2"></div>
					<Dropdown
						title="Duration"
						options={["week", "day"]}
						func={(e) => setDuration(e.target.value)}
					/>
				</div>
			</div>

			<InfiniteScroll
				dataLength={trending.length}
				next={getTrending}
				hasMore={hasMore}
				loader={<Loading />}>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-12 py-4">
					{trending.map((item) => (
						<Cards key={item.id} data={item} title={category} />
					))}
				</div>
			</InfiniteScroll>
		</div>
	) : (
		<Loading />
	);
};

export default Trending;
