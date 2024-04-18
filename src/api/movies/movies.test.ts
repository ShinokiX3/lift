import { API_KEY, BASE_URL } from "./movies.const";
import movieService from "./movies.service";

describe("movieService", () => {
    test("getMovies fetches movies successfully", async () => {
        const title = "Batman";
        const mockResponse = {
            Response: true,
            Search: [
                {
                    Title: "Batman Begins",
                    Poster: "http://example.com/batman-begins-poster.jpg",
                    Type: "movie",
                    Year: "2005",
                    imdbID: "tt0372784"
                },
                {
                    Title: "The Dark Knight",
                    Poster: "http://example.com/the-dark-knight-poster.jpg",
                    Type: "movie",
                    Year: "2008",
                    imdbID: "tt0468569"
                }
            ],
            totalResults: 2
        };

        global.fetch = jest.fn().mockResolvedValue({
            ok: true,
            json: jest.fn().mockResolvedValue(mockResponse)
        });

        const result = await movieService.getMovies(title);

        expect(result).toEqual(mockResponse);
        expect(fetch).toHaveBeenCalledWith(`${BASE_URL}/?s=${title}&apikey=${API_KEY}`);
    });

    test("getMovies throws an error when fetching movies fails", async () => {
        const title = "Non-existent-movie";

        global.fetch = jest.fn().mockResolvedValue({
            ok: false
        });

        await expect(movieService.getMovies(title)).rejects.toThrow("Failed to fetch movies");
        expect(fetch).toHaveBeenCalledWith(`${BASE_URL}/?s=${title}&apikey=${API_KEY}`);
    });
});