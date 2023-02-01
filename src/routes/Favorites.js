import { useContext } from 'react';
import { Context } from '../Context';
import MovieCard from '../components/MovieCard';
import { HomeStyled } from '../components/styles/Home.styled';

export default function Favorites() {

    const { favorites } = useContext(Context);

    const favoritesHtml = favorites.map(movie => <MovieCard key={movie.id} movie={movie} />);

    return (
        <>
            {favorites.length === 0 &&
                <HomeStyled><p>Place for your favorite movies</p></HomeStyled>}
            {favoritesHtml}
        </>
    )
}