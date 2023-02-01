import { Route, Routes } from 'react-router-dom';
import { ContentContainer } from './styles/ContentContainer.styled';
import Home from '../routes/Home';
import Queue from '../routes/Queue';
import Watched from '../routes/Watched';
import Favorites from '../routes/Favorites';
import SearchResults from '../routes/SearchResults';
import ButtonUp from './ButtonUp';

export default function Main() {

    return (
        <ContentContainer>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="searchResults" element={<SearchResults />}></Route>
                <Route path="queue" element={<Queue />}></Route>
                <Route path="watched" element={<Watched />}></Route>
                <Route path="favorites" element={<Favorites />}></Route>
            </Routes>
            <ButtonUp />
        </ContentContainer>
    )
}