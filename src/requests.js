const API_KEY = "394b2c946570929231181ac0ba08ab4d";

const requests = {
    fetchNetlfixOriginals: `discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en-us`,
    fetchTopRated: `movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchActionMovies : `discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComdeyMovies : `discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies : `discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies : `discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries : `discover/movie?api_key=${API_KEY}&with_genres=99`,
}
export default requests;
