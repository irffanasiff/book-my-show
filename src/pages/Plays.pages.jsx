import React from 'react';
import PlaysFilters from '../components/PlaysFilters/PlaysFilters.component';
import Poster from '../components/Poster/Poster.component';

const PlaysPage = () => {
  return (
    <>
      <div className='container mx-auto px-4'>
        <div className='w-full lg:flex lg:flex-row-reverse'>
          <div className='lg:w-8/12'>
            <h2 className='text-2xl font-bold mb-4'>Plays In Jammu</h2>
            <div className='flex flex-wrap justify-items-center'>
              <div className='w-1/2 md:w-1/3 my-3  '>
                <Poster
                  src='https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jungle-cruise-et00081136-01-06-2021-05-03-44.jpg'
                  title='lorem ipsum dior'
                  subtitle='Hollywood ₹300'
                />
              </div>
              <div className='w-1/2 md:w-1/3 lg:w-1/4 my-3  '>
                <Poster
                  src='https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jungle-cruise-et00081136-01-06-2021-05-03-44.jpg'
                  title='lorem ipsum dior'
                  subtitle='Hollywood ₹300'
                />
              </div>
              <div className='w-1/2 md:w-1/3 lg:w-1/4 my-3  '>
                <Poster
                  src='https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jungle-cruise-et00081136-01-06-2021-05-03-44.jpg'
                  title='lorem ipsum dior'
                  subtitle='Hollywood ₹300'
                />
              </div>
              <div className='w-1/2 md:w-1/3 lg:w-1/4 my-3  '>
                <Poster
                  src='https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jungle-cruise-et00081136-01-06-2021-05-03-44.jpg'
                  title='lorem ipsum dior'
                  subtitle='Hollywood ₹300'
                />
              </div>
              <div className='w-1/2 md:w-1/3 lg:w-1/4 my-3  '>
                <Poster
                  src='https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jungle-cruise-et00081136-01-06-2021-05-03-44.jpg'
                  title='lorem ipsum dior'
                  subtitle='Hollywood ₹300'
                />
              </div>
              <div className='w-1/2 md:w-1/3 lg:w-1/4 my-3  '>
                <Poster
                  src='https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jungle-cruise-et00081136-01-06-2021-05-03-44.jpg'
                  title='lorem ipsum dior'
                  subtitle='Hollywood ₹300'
                />
              </div>
              <div className='w-1/2 md:w-1/3 lg:w-1/4 my-3  '>
                <Poster
                  src='https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jungle-cruise-et00081136-01-06-2021-05-03-44.jpg'
                  title='lorem ipsum dior'
                  subtitle='Hollywood ₹300'
                />
              </div>
              <div className='w-1/2 md:w-1/3 lg:w-1/4 my-3  '>
                <Poster
                  src='https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jungle-cruise-et00081136-01-06-2021-05-03-44.jpg'
                  title='lorem ipsum dior'
                  subtitle='Hollywood ₹300'
                />
              </div>
            </div>
          </div>
          <div className='lg:w-1/4'>
            <h2 className='text-2xl font-bold mb-4'>Filters</h2>
            <PlaysFilters
              title=' Date'
              tags={['Today', 'Tommorow', 'Wednesday']}
            />

            <PlaysFilters
              title='Language '
              tags={['Hindi', 'Tamil', 'Hindi', 'English', 'Marathi']}
            />
            <PlaysFilters
              title='Categories '
              tags={['Romance', 'Drama', 'Action']}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaysPage;

