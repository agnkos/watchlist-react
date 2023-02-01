import { UserPanelStyled } from './styles/UserPanel.styled';
import { Context } from '../Context';
import { useContext } from 'react';

export default function UserPanel({ id, movie }) {

    const { addToFavorites, removeFromFavorites, favorites, watched, removeFromWatched, addToWatched, queue, addToQueue, removeFromQueue } = useContext(Context);

    function manageQueue() {
        const queued = queue.some(item => item.id === id);
        if (queued) {
            return <span onClick={() => removeFromQueue(id)}><i className="fa-solid fa-circle-minus"></i>Queue</span>
        } else return <span onClick={() => addToQueue(id, movie)}><i className="fa-solid fa-circle-plus"></i>Queue</span>
    }

    function manageWatched() {
        const watchedMovie = watched.some(item => item.id === id);
        if (watchedMovie) {
            return <span onClick={() => removeFromWatched(id)}><i className="fa-solid fa-circle-minus"></i>Watched</span>
        } else return <span onClick={() => addToWatched(id, movie)}><i className="fa-solid fa-circle-plus"></i>Watched</span>
    }

    function manageFavorites() {
        const favorited = favorites.some(item => item.id === id);
        if (favorited) {
            return <span onClick={() => removeFromFavorites(id)}><i className="fa-solid fa-heart favorited"></i>Favorites</span>
        } else return <span onClick={() => addToFavorites(id, movie)}><i className="fa-solid fa-heart"></i>Favorites</span>
    }

    return (
        <UserPanelStyled>
            <div>{manageQueue()}</div>
            <div>{manageWatched()}</div>
            <div> {manageFavorites()}</div>
        </UserPanelStyled>
    )
} 