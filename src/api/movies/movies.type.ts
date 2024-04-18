export interface Movie {
	Title: string;
	Poster: string;
	Type: string;
	Year: string;
	imdbID: string;
}

export interface APIMovieResponse {
	Response: boolean;
	Search: Movie[];
	totalResults: number;
}