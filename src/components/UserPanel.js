import { UserPanelStyled } from './styles/UserPanel.styled';
import { Context } from '../Context';
import { useContext } from 'react';

export default function UserPanel({ id, movie }) {

    const { addToFavorites, removeFromFavorites, favorites, watched, removeFromWatched, addToWatched, queue, addToQueue, removeFromQueue } = useContext(Context);

    function manageFavorites() {
        const favorited = favorites.some(item => item.id === id);
        if (favorited) {
            return <i className="fa-solid fa-heart favorited" onClick={() => removeFromFavorites(id)}></i>

        } else return <i className="fa-solid fa-heart" onClick={() => addToFavorites(id, movie)}></i>
    }

    function manageQueue() {
        const queued = queue.some(item => item.id === id);
        if (queued) {
            return <i className="fa-solid fa-circle-minus" onClick={() => removeFromQueue(id)}></i>

        } else return <i className="fa-solid fa-circle-plus" onClick={() => addToQueue(id, movie)}></i>
    }

    function manageWatched() {
        const watchedMovie = watched.some(item => item.id === id);
        if (watchedMovie) {
            return <i className="fa-solid fa-circle-minus" onClick={() => removeFromWatched(id)}></i>

        } else return <i className="fa-solid fa-circle-plus" onClick={() => addToWatched(id, movie)}></i>
    }

    return (
        <UserPanelStyled>
            <div>{manageQueue()}<span>Queue</span></div>
            <div>{manageWatched()}<span>Watched</span></div>
            <div> {manageFavorites()}<span>Favorites</span></div>

        </UserPanelStyled>
    )
} 