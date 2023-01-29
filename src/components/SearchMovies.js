import { SearchBarStyled } from './styles/SearchBar.styled';
import { useState, useContext } from 'react';
import { Context } from '../Context';
import { Link } from 'react-router-dom';

export default function SearchMovies() {
    // const [query, setQuery] = useState('');
    const { query, setQuery } = useContext(Context);
    const { searchMovies } = useContext(Context);

    function handleChange(e) {
        setQuery(e.target.value);
        // console.log(query);
    }

    // function searchMovies() {
    //     const url = `https://api.themoviedb.org/3/search/movie?api_key=cc721563ec4dce4dce8d3059800aa1af&language=en-US&query=${query}&page=1&include_adult=false`;

    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }

    return (
        <SearchBarStyled>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
                type="text"
                value={query}
                onChange={handleChange}>
            </input>
            <Link to="searchResults"><div onClick={searchMovies}>Search</div></Link>
        </SearchBarStyled>
    )
}