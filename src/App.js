import Header from './components/Header';
import Main from './components/Main';
import Home from './routes/Home';
import Footer from './components/Footer';
import GlobalStyles from './components/styles/Global';
import { Container } from './components/styles/Container.styled'

function App() {
  return (
    <Container>
      <GlobalStyles />
      <Header />
      <Main><Home /></Main>
      <Footer />
    </Container>
  );
}

export default App;
