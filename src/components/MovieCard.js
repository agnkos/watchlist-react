import { useState, useRef, useEffect } from 'react';
import { MovieCardStyled } from './styles/MovieCard.styled';
import UserPanel from './UserPanel';

export default function MovieCard({ movie }) {

    const [showMore, setShowMore] = useState(false);
    const [showBtn, setShowBtn] = useState(false);
    const paraRef = useRef();
    let poster = '';

    if (movie.poster_path === null || movie.poster_path === undefined) {
        poster = './images/film.png';
    } else {
        poster = `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`;
    }

    useEffect(() => {
        if (movie.overview.length > 400) {
            setShowBtn(true);
        } else setShowBtn(false);
    }, [movie.overview.length])

    return (
        <>
            <MovieCardStyled>
                <img
                    src={poster}
                    alt={movie.title + ' poster'} />
                <div>
                    <h3>{movie.title || movie.name}</h3>
                    <p><small>RELEASE DATE: {movie.release_date}</small></p>
                    <p><small>RATING: <img src="../images/star.png" alt='' />{movie.vote_average}</small></p>
                </div>
                <p ref={paraRef} className='overview'>{showBtn ? showMore ? movie.overview : movie.overview.substring(0, 400).concat('...') : movie.overview}
                    {showBtn && <span onClick={() => setShowMore(!showMore)} className='show'>
                        {showMore ? 'show less' : 'show more'}
                    </span>}</p>
                <UserPanel id={movie.id} movie={movie} />
            </MovieCardStyled>
        </>
    )
}