import { Context } from '../Context';
import { useContext } from 'react';
import { HomeStyled } from '../components/styles/Home.styled';
import MovieCard from '../components/MovieCard';

export default function SearchResults() {
    const { movies } = useContext(Context);

    const movieElements = movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
    ));

    return (
        <>
            {movies.length === 0 &&
                <HomeStyled><p>Unable to find what you're looking for. Please try another search.</p></HomeStyled>}
            <div> {movieElements}</div>
        </>
    )
}