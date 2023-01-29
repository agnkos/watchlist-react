import { MovieCardStyled } from './styles/MovieCard.styled';
import UserPanel from './UserPanel';

export default function MovieCard({ movie }) {
    return (
        <>
            <MovieCardStyled>
                <img
                    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                    alt={movie.title + ' poster'} />
                <div>
                    <h3>{movie.title}</h3>
                    <p><small>RELEASE DATE: {movie.release_date}</small></p>
                    <p><small>RATING: <img src="../images/star.png" />{movie.vote_average}</small></p>
                    <p>{movie.overview}</p>
                </div>
                <UserPanel id={movie.id} movie={movie}/>
            </MovieCardStyled>
        </>
    )
}