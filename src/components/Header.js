import { Link } from 'react-router-dom';
import { StyledHeader } from './styles/Header.styled';
import SearchMovies from './SearchMovies'

export default function Header() {
    return (
        <>
            <StyledHeader>
                <Link to="/">
                    <i className="fa-solid fa-film"></i><span>My watchlist</span>
                </Link>
                <nav>
                    <ul>
                        <li>
                            <Link to="/queue">
                                <i className="fa-solid fa-list"></i>Queue
                            </Link>
                        </li>
                        <li>
                            <Link to="/watched">
                                <i className="fa-solid fa-square-check"></i>Watched
                            </Link>
                        </li>
                        <li>
                            <Link to="/favorites">
                                <i className="fa-solid fa-heart"></i>Favorites
                            </Link>
                        </li>
                    </ul>
                </nav>
                <SearchMovies />
            </StyledHeader>

        </>
    )
}