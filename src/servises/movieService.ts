import axios from "axios";
import type { Movie } from "../types/movie";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

interface FetchMoviesResp {
  hits: Movie[];
}

export const fetchMovies = async (query: string): Promise<Movie[]> => {
    
    const myKey = import.meta.env.VITE_API_KEY;
  
    const response = await axios.get<FetchMoviesResp>(`/movie?query=${query}`, {
        params: {},
        headers: {
            Authorization: `Bearer ${myKey}`,
        }
    });
    return response.data.hits;
};
