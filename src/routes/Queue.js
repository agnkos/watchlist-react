import { useContext } from 'react';
import { Context } from '../Context';
import MovieCard from '../components/MovieCard';
import { HomeStyled } from '../components/styles/Home.styled';

export default function Queue() {

    const { queue } = useContext(Context);

    const queueHtml = queue.map(movie => <MovieCard key={movie.id} movie={movie} />);
    
    return (
        <>
            {queue.length === 0 &&
                <HomeStyled><p>Add movies to your queue.</p></HomeStyled>}
            {queueHtml}
        </>
    )
}