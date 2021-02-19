const API_KEY = '2baecc0e771cce824124a2e59172629d';
const requests = {
    fetchTrending: `/trending/all/day?api_key=${API_KEY}`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networds=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}`,
    fetchComedyMovies:`/discover/tv?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&page=2`,
    fetchRomanceMovies:`/discover/tv?api_key=${API_KEY}&with_genres=10749`,
    FetchDocumentaries:`/discover/tv?api_key=${API_KEY}&with_genres=99`,
}

export default requests;