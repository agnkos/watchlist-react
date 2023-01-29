import { useState, createContext, useEffect } from 'react';

const Context = createContext();

function ContextProvider({ children }) {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [watched, setWatched] = useState(function () {
        return JSON.parse(localStorage.getItem('watchedMovies')) || []
    })
    const [queue, setQueue] = useState(function () {
        return JSON.parse(localStorage.getItem('queuedMovies')) || []
    });
    const [favorites, setFavorites] = useState(function () {
        return JSON.parse(localStorage.getItem('favoriteMovies')) || []
    });

    function searchMovies() {
        const url = `https://api.themoviedb.org/3/search/multi?api_key=/* API Key */&language=en-US&query=${query}&page=1&include_adult=false`;
        setMovies([]);
        if (query !== '') {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    console.log(data.results);
                    setQuery('');
                    if (data.results !== []) {
                        setMovies(data.results);
                    }
                }
                )
        }
    }

    function addToWatched(id, movie) {
        setWatched(prev => [...prev, movie]);
    }

    function removeFromWatched(id) {
        setWatched(prev => prev.filter(movie => movie.id !== id));
    }

    function addToQueue(id, movie) {
        setQueue(prev => [...prev, movie]);
    }

    function removeFromQueue(id) {
        setQueue(prev => prev.filter(movie => movie.id !== id));
    }

    function addToFavorites(id, movie) {
        console.log(id, 'add to favorites');
        setFavorites(prev => [...prev, movie])
        // const newFavorite = movies.filter(movie => movie.id === id)
        console.log(favorites)
    }

    function removeFromFavorites(id) {
        console.log(id, 'removed from favorites')
        setFavorites(prev => prev.filter(movie => movie.id !== id));
        console.log(favorites)
    }

    useEffect(function () {
        localStorage.setItem('favoriteMovies', JSON.stringify(favorites));
        localStorage.setItem('queuedMovies', JSON.stringify(queue));
        localStorage.setItem('watchedMovies', JSON.stringify(watched));
    }, [favorites, watched, queue])

    return (
        <Context.Provider value={{
            searchMovies,
            query,
            setQuery,
            movies,
            favorites,
            addToFavorites,
            removeFromFavorites,
            queue,
            addToQueue,
            removeFromQueue,
            watched,
            addToWatched,
            removeFromWatched,
        }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }