interface Props {
    movie: Record<string, any>;
}

function MovieCard({ movie }: Props) {
    function onFavoriteClick() {
        alert("Added to favorites");
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title} />
                <div className="movie-overlay">
                    <button
                        className="btn favorite-btn"
                        onClick={onFavoriteClick}
                    >
                        🤍
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3 className="movie-title">{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>
        </div>
    );
}

export default MovieCard;

