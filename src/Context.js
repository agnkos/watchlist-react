import { useState, createContext, useEffect, useCallback } from 'react';

const Context = createContext();
let totalPages;
let page;

function ContextProvider({ children }) {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [watched, setWatched] = useState(function () {
        return JSON.parse(localStorage.getItem('watchedMovies')) || []
    });
    const [queue, setQueue] = useState(function () {
        return JSON.parse(localStorage.getItem('queuedMovies')) || []
    });
    const [favorites, setFavorites] = useState(function () {
        return JSON.parse(localStorage.getItem('favoriteMovies')) || []
    });


    function searchMovies() {
        page = 1;
        const url = `https://api.themoviedb.org/3/search/multi?api_key=/ your API key /&language=en-US&query=${query}&page=${page}
        &include_adult=false`;
        setMovies([]);
        if (query !== '') {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    console.log(data.total_pages)
                    if (data.total_pages < 2) {
                        setQuery('');
                    }
                    if (data.results !== []) {
                        const searchResults = data.results.filter(item => item.media_type !== 'person');
                        setMovies(searchResults);
                        totalPages = data.total_pages;
                    }
                }
                )
        }
    }
    const handleGetMoreMovies = useCallback(
        () => {
            fetch(`https://api.themoviedb.org/3/search/multi?api_key=/ your API key /&language=en-US&query=${query}&page=${page}&include_adult=false`)
                .then(res => res.json())
                .then(data => {
                    const searchResults = data.results.filter(item => item.media_type !== 'person');
                    setMovies(prev => [...prev.concat(searchResults)]);
                })
        }, [query]
    )

    useEffect(() => {
        function loadMoreMovies() {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                if (page < totalPages) {
                    page += 1;
                    handleGetMoreMovies();
                } else setQuery('');
            }
        }

        window.addEventListener('scroll', loadMoreMovies);

        return function () {
            window.removeEventListener('scroll', loadMoreMovies);
        }
    }, [handleGetMoreMovies])


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
        setFavorites(prev => [...prev, movie]);
    }

    function removeFromFavorites(id) {
        setFavorites(prev => prev.filter(movie => movie.id !== id));
    }

    useEffect(function () {
        localStorage.setItem('favoriteMovies', JSON.stringify(favorites));
        localStorage.setItem('queuedMovies', JSON.stringify(queue));
        localStorage.setItem('watchedMovies', JSON.stringify(watched));
    }, [favorites, watched, queue]);

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