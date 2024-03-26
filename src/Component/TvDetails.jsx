import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadtv, removetv } from "../store/actions/tvActions";
import noimage from "/No_image.jpg";
import {
	Link,
	Outlet,
	useLocation,
	useNavigate,
	useParams,
} from "react-router-dom";
import HorizontalCards from "./templates/HorizontalCards";
import Loading from "./Loading";

const TvDetails = () => {
	document.title = "MovieCosmos | Tv Show Details";
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const { id } = useParams();
	const { info } = useSelector((state) => state.tv);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(asyncloadtv(id));
		return () => {
			dispatch(removetv());
		};
	}, [id]);

	return info ? (
		<div className="container mx-auto px-4 sm:px-6 lg:px-8">
			<div className="max-w-5xl mx-auto">
				<nav className="flex items-center justify-between py-4">
					<Link
						onClick={() => navigate(-1)}
						className="text-white hover:text-blue-500">
						<i className="ri-arrow-left-line text-xl"></i>
					</Link>
					<div className="flex items-center gap-4">
						<a
							target="_blank"
							href={info.detail.homepage}
							className="text-white hover:text-blue-500">
							<i className="ri-external-link-fill text-xl"></i>
						</a>
						<a
							target="_blank"
							href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
							className="text-white hover:text-blue-500">
							<i className="ri-earth-fill text-xl"></i>
						</a>
						<a
							target="_blank"
							href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
							className="text-white hover:text-blue-500">
							IMDB
						</a>
					</div>
				</nav>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					<div className="w-full lg:w-1/2">
						<img
							className="w-full h-auto lg:h-[50vh] object-cover shadow-lg rounded-lg"
							src={`https://image.tmdb.org/t/p/original/${
								info.detail.poster_path || info.detail.backdrop_path
							}`}
							alt=""
						/>
					</div>
					<div className="w-full lg:w-1/2">
						<h1 className="text-3xl lg:text-5xl font-bold text-white">
							{info.detail.name ||
								info.detail.title ||
								info.detail.original_name ||
								info.detail.original_title}{" "}
							<span className="text-xl font-semibold text-zinc-200">
								({info.detail.first_air_date.split("-")[0]})
							</span>
						</h1>
						<div className="flex items-center gap-4 mt-3">
							<span className="rounded-full bg-yellow-600 text-white flex items-center justify-center w-12 h-12">
								{(info.detail.vote_average * 10).toFixed()}%
							</span>
							<p className="text-white text-lg">User Score</p>
							<p className="text-white text-lg">{info.detail.first_air_date}</p>
							<p className="text-white text-lg">
								{info.detail.genres.map((g) => g.name).join(",")}
							</p>
							<p className="text-white text-lg">{info.detail.runtime}min</p>
						</div>
						<h2 className="text-xl font-semibold italic text-zinc-200 mt-3">
							{info.detail.tagline}
						</h2>
						<p className="text-lg text-white mt-5">{info.detail.overview}</p>
						<Link
							className="inline-block py-3 px-6 bg-[#6556CD] text-white font-semibold rounded-lg mt-5"
							to={`${pathname}/trailer`}>
							<i className="ri-play-fill text-xl mr-3"></i>
							Play Trailer
						</Link>
					</div>
				</div>
				<div className="mt-8">{/* Rest of your content here */}</div>
			</div>
		</div>
	) : (
		<Loading />
	);
};

export default TvDetails;
