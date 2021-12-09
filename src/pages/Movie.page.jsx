import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { settings, Images } from '../components/config';
import FilmyPass from '../components/FilmyPass/FilmyPass.component.jsx';
import MovieHero from '../components/MovieHero/MovieHero.component.jsx';
import Poster from '../components/Poster/Poster.component.jsx';

const Movie = () => {
  const [moviedata, setMoviedata] = useState([]);
  var pathArray = window.location.pathname.split('/');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const movie_path = pathArray[2];
  // const movie_path = (thePath) =>
  //   thePath.substring(thePath.lastIndexOf('/') + 1);

  useEffect(() => {
    const callfunction = async () => {
      await console.log((await axios.get(`${movie_path}`)).data);
      // const getMovieName = await axios.get(`${movie_path}`);
      // setMoviedata(getMovieName.data.results);
    };
    callfunction();
  }, [movie_path]);

  return (
    <>
      <MovieHero
        backdrop_path={moviedata.poster_path}
        poster_path={moviedata.poster_path}
      />
      <div className='my-12 container mx-auto max-w-full lg:w-1/2 lg:ml-64'>
        <div className='flex flex-col gap-3'>
          <h2 className='text-grey-800 font-bold text-2xl'>
            Lorem ipsum dolor sit.
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            expedita assumenda dolores eum quaerat molestias ut reiciendis
            deleniti nemo distinctio velit nulla, sint eligendi, accusamus,
            possimus sunt ipsum architecto dolorem!
          </p>
        </div>

        <div className='my-8'>
          <hr />
        </div>

        <div>
          <h1 className='text-2xl font-bold mb-4'>Applicable offers</h1>
          <FilmyPass />
        </div>

        <div className='my-8'>
          <hr />
        </div>

        <div>
          <h1 className='text-2xl font-bold mb-4'>Cast</h1>
          <Slider {...settings}>
            {Images.map((image) => (
              <Poster {...image} isDark={false} isCircle={true} />
            ))}
          </Slider>
        </div>

        <div className='my-8'>
          <hr />
        </div>

        <div>
          <h1 className='text-2xl font-bold mb-4'>Crew</h1>
          <Slider {...settings}>
            {moviedata.map((image) => (
              <Poster {...image} isDark={false} isCircle={true} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Movie;
