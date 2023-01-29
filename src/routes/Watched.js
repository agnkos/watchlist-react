import { useContext } from 'react';
import { Context } from '../Context';
import MovieCard from '../components/MovieCard';

export default function Watched() {

    const { watched } = useContext(Context);

    const watchedHtml = watched.map(movie => <MovieCard key={movie.id} movie={movie} />)
    return (
        <div>
            <h1>Films that I've already watched</h1>
            {watchedHtml}
        </div>
    )
}