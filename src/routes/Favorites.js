import { useContext } from 'react';
import { Context } from '../Context';
import MovieCard from '../components/MovieCard';

export default function Favorites() {

    const { favorites } = useContext(Context);

    const favoritesHtml = favorites.map(movie => <MovieCard key={movie.id} movie={movie} />);

    return (
        <div>
            <h1>My favorites</h1>
            {favoritesHtml}
        </div>
    )
}