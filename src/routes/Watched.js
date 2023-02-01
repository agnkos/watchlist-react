import { useContext } from 'react';
import { Context } from '../Context';
import MovieCard from '../components/MovieCard';
import { HomeStyled } from '../components/styles/Home.styled';

export default function Watched() {

    const { watched } = useContext(Context);

    const watchedHtml = watched.map(movie => <MovieCard key={movie.id} movie={movie} />);

    return (
        <>
            {watched.length === 0 &&
                <HomeStyled><p>Time for watch some movies!</p></HomeStyled>}
            {watchedHtml}
        </>
    )
}