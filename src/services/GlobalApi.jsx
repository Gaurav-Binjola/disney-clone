import axios from "axios";


const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=58c9b02f42e43e88fd51bfb12bf5c9f9';
const movieBaseUrl = "https://api.themoviedb.org/3"
const api_key = "58c9b02f42e43e88fd51bfb12bf5c9f9"

const getTrendingVedios = axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`);

const getMovieByGenreId=(id)=> axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default {
    getTrendingVedios, getMovieByGenreId
}