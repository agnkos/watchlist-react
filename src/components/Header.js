import { Link, NavLink } from 'react-router-dom';
import { StyledHeader } from './styles/Header.styled';
import SearchMovies from './SearchMovies';

export default function Header() {

    const activeStyle = {
        color: "#ffbe0b",
        borderBottom: "2px solid #ffbe0b",
        paddingBottom: ".25em",
    }
    
    return (
        <>
            <StyledHeader>
                <Link to="/">
                    <i className="fa-solid fa-film"></i><span>My watchlist</span>
                </Link>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/queue" style={({ isActive }) => isActive ? activeStyle : undefined}>
                                <i className="fa-solid fa-list"></i>Queue
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/watched" style={({ isActive }) => isActive ? activeStyle : undefined}>
                                <i className="fa-solid fa-square-check"></i>Watched
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/favorites" style={({ isActive }) => isActive ? activeStyle : undefined}>
                                <i className="fa-solid fa-heart"></i>Favorites
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <SearchMovies />
            </StyledHeader>

        </>
    )
}