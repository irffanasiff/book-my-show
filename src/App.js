import { Route } from 'react-router-dom';
import axios from 'axios';
import HomePage from './pages/Home.page.jsx';
import MoviePage from './pages/Movie.page.jsx';
import DefaultHOC from './HOC/Default.HOC.jsx';
import MovieHOC from './HOC/Movie.HOC.jsx';
import PlaysPage from './pages/Plays.pages.jsx';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//axios default settings
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {};
axios.defaults.params['api_key'] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
      <DefaultHOC path='/' exact component={HomePage} />
      <MovieHOC path='/movie/:id' exact component={MoviePage} />
      <DefaultHOC path='/plays' exact component={PlaysPage} />
    </>
  );
}

export default App;
