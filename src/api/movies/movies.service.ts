import { API_KEY, BASE_URL } from "./movies.const";

const movieService = {
    getMovies: async (title: string) => {
        const query = `s=${title}`;
        try {
            const response = await fetch(`${BASE_URL}/?${query}&apikey=${API_KEY}`)
            
            if (!response.ok) throw new Error('Failed to fetch movies');

            return await response.json();
        } catch (error) {
            console.error('Error fetching movies:', error);
            throw error;
        }
    }
};

export default movieService;