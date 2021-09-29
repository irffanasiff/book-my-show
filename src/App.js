import { Route } from 'react-router-dom';
import HomePage from './pages/Home.page.jsx';
import MoviePage from './pages/Movie.page.jsx';
import DefaultHOC from './HOC/Default.HOC.jsx';
import MovieHOC from './HOC/Movie.HOC.jsx';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <>
      <DefaultHOC path='/' exact component={HomePage} />
      <MovieHOC path='/movie/:id' exact component={MoviePage} />
    </>
  );
}

export default App;
