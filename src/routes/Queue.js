import { useContext } from 'react';
import { Context } from '../Context';
import MovieCard from '../components/MovieCard';

export default function Queue() {

    const { queue } = useContext(Context);

    const queueHtml = queue.map(movie => <MovieCard key={movie.id} movie={movie} />);
    return (
        <div>
            <h1>I want to watch:</h1>
            {queueHtml}
        </div>
    )
}