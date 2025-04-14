import * as dotenv from 'dotenv';
dotenv.config();

const API_KEY: string | undefined = process.env.REACT_APP_API_KEY;
const BASE_URL: string = "https://api.themoviedb.org/3"

export async function getPopularMovies(): Promise<any> {
    try {
        const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json()
        return data.results;
    } catch (error) {
        console.error("Failed to fetch movies:", error);
        throw error;
    }
}

export async function searchMovies(query: string): Promise<any> {
    try {
        const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Failed to fetch movies:", error);
        throw error;
    }
}