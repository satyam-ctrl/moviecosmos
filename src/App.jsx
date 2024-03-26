import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import Trending from "./Component/Trending";
import Popular from "./Component/Popular";
import Movie from "./Component/Movie";
import Tvshows from "./Component/Tvshows";
import People from "./Component/People";
import Moviedetails from "./Component/Moviedetails";
import TvDetails from "./Component/TvDetails";
import PersonDetails from "./Component/PersonDetails";
import Trailer from "./Component/templates/Trailer";
import NotFound from "./Component/NotFound";
import About from "./Component/About";
import Contact from "./Component/Contact";

const App = () => {
	return (
		<div className="bg-[#1F1E24] w-screen h-screen flex">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/trending" element={<Trending />} />
				<Route path="/popular" element={<Popular />} />
				<Route path="/movie" element={<Movie />} />
				<Route path="/movie/details/:id" element={<Moviedetails />}>
					<Route path="/movie/details/:id/trailer" element={<Trailer />} />
				</Route>
				<Route path="/tv" element={<Tvshows />} />
				<Route path="/tv/details/:id" element={<TvDetails />}>
					<Route path="/tv/details/:id/trailer" element={<Trailer />} />
				</Route>
				<Route path="/person" element={<People />} />
				<Route path="/About" element={<About />} />
				<Route path="/Contact" element={<Contact />} />
				<Route path="/person/details/:id" element={<PersonDetails />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
};

export default App;
