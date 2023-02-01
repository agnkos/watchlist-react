import { SearchBarStyled } from './styles/SearchBar.styled';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../Context';
import { Link } from 'react-router-dom';

export default function SearchMovies() {
    const { query, setQuery } = useContext(Context);
    const { searchMovies } = useContext(Context);
    const navigate = useNavigate();

    function handleChange(e) {
        setQuery(e.target.value);
    }

    function handleEnter(e) {
        if (e.key === 'Enter') {
            searchMovies();
            navigate('/searchResults');
        }
    }

    return (
        <SearchBarStyled>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
                type="text"
                value={query}
                onChange={handleChange}
                onKeyDown={handleEnter}>
            </input>
            <Link to="searchResults"><div onClick={searchMovies}>Search</div></Link>
        </SearchBarStyled>
    )
}