interface Props {
    movie: Record<string, any>;
}

function MovieCard({ movie }: Props) {
    function onFavoriteClick() {
        alert("Added to favorites");
    }

    return (
        <>
            <div className="card flex shadow-sm">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt={movie.title}
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{movie.title}</h2>
                    <p>{movie.release_date}</p>
                    <div className="card-actions justify-end">
                        <button
                            className="btn btn-ghost"
                            onClick={onFavoriteClick}
                        >
                            🤍
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MovieCard;

