import React, { useState, useEffect } from 'react';
import EntertainmentCardSlider from '../components/Entertainment/Entertainmentcard.component.jsx';
import Premier from '../components/Premier/Premier.component.jsx';
import PosterSlider from '../components/PosterSlider/PosterSlider.component.jsx';
import { Images } from '../components/config';
import axios from 'axios';

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcommingMovies, setUpcommingMovies] = useState([]);

  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get('/movie/popular');
      console.log('PM', getPopularMovies.data.results);
    };
    requestPopularMovies();
    const requestUpcommingMovies = async () => {
      const getUpcommingMovies = await axios.get('/movie/upcoming');
      setUpcommingMovies(getUpcommingMovies.data.results);
    };
    requestUpcommingMovies();
    
  }, []);

  return (
    <>
      <div className='flex flex-col gap-10'>
        <div className='container mx-auto px-4'>
          <h1 className='text-2xl font-bold text-gray-800'>
            The best of Entertainment
          </h1>
          <EntertainmentCardSlider />
        </div>

        <div className='bg-navCol-1000 pr-16'>
          <div className='container mx-auto px-4'>
            <div className='flex'>
              <img
                src='https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png'
                alt='Rupay'
                className='w-full h-full'
              />
            </div>
            <PosterSlider
              images={popularMovies} //popular movies array
              title='Premiers'
              subtitle='Brand New release every friday'
              isDark={true}
            />
          </div>
        </div>
      </div>
      <div className='container mx-auto px-4'>
        <PosterSlider
          images={upcommingMovies}
          title='Upcomming Movies'
          subtitle='Movies Yet to Come'
          isDark={false}
        />
      </div>
    </>
  );
};

export default HomePage;
