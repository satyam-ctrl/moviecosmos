import axios from "axios";
const instance = axios.create({
	baseURL: "https://api.themoviedb.org/3/",
	headers: {
		accept: "application/json",
		Authorization:
			"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjdjMzNhM2Y5ZDgzZTVhZjk5YTc4OTk5ZjhkMDNjMSIsInN1YiI6IjY1ZmVmM2FhMWIxZjNjMDE3Yzk5NWZhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4aD0jh-zbDDgoodVfG8n0TT-bEQEaSp0p6PB8Jglu64",
	},
});
export default instance;
