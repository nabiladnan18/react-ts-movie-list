import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies: Record<string, any>[] = [
        { id: 1, title: "John Wick", release_date: "2020" },
        {
            id: 2,
            title: "Harry Potter and the Sorcerer's Stone",
            release_date: "2010",
        },
        { id: 3, title: "The Godfather", release_date: "1978" },
        { id: 4, title: "The Matrix", release_date: "1998" },
    ];

    const handleSearch = () => {
        alert(searchQuery);
    };

    return (
        <>
            <div className="justify-center flex items-center gap-1 p-2">
                <label className="input">
                    <svg
                        className="h-[1em] opacity-50"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input
                        type="search"
                        className="grow"
                        placeholder="Search for a movie"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleSearch();
                            }
                        }}
                    />
                </label>
                <button className="btn btn-primary" onClick={handleSearch}>
                    Search
                </button>
            </div>

            <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* Filtering on the UI  */}
                {movies
                    .filter((movie) =>
                        movie.title
                            .toLowerCase()
                            .includes(searchQuery.toLowerCase())
                    )
                    .map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
            </div>
        </>
    );
}

export default Home;

