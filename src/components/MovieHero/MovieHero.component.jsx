import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { BsFillHeartFill } from 'react-icons/bs';
import logo from './favicon.png';


const launchRazorPay = () => {
  let options = {
    key: 'rzp_test_v8WFeRTfRsPBvp',
    amount: 500,
    currency: 'INR',
    name: 'Book My Show',
    desciption: 'Movie Purchase on Rental',
    image: { logo },
    handler: () => {
      alert('Payment Done');
    },
    theme: { color: '#F24848' },
  };

  let rzp = new window.Razorpay(options);
  rzp.open();
};

const MovieHero = (props) => {

  return (
    <>
      <div className='md:hidden'>
        <img src={`http://image.tmdb.org/t/p/${props.backdrop_path}`} alt='poster' />
      </div>

      <div className='hidden md:block lg:hidden'>
        <img src={`http://image.tmdb.org/t/p/${props.backdrop_path}`} alt='poster' />
      </div>

      <div className='relative hidden lg:block' style={{ height: '40rem' }}>
        <div
          className='absolute h-full w-full z-10'
          style={{
            backgroundImage:
              'linear-gradient(90deg, rgba(34, 34, 34, 0.81) 24.97%, rgba(34, 34, 34, 0.66) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)',
          }}
        />
        <div className='absolute z-30 left-64 top-10 flex items-start'>
          <div className=''>
            <img
              src={`http://image.tmdb.org/t/p/${props.poster_path}`}
              alt='poster'
              className='h-full w-full rounded-xl'
            />
          </div>
          <div
            className='container flex flex-col col-white-500 px-4 col-grey-100'
            style={{ color: 'white' }}
          >
            <h1 className='text-3xl py-3 font-extrabold'>Movie Name Here</h1>
            <h1 className='text-xl py-3 flex gap-4 items-center	'>
              <BsFillHeartFill />
              <h3>91%</h3> <p>5.6k ratings</p>
            </h1>
            <div className='flex justify-between bg-gray-800 py-2 rounded-xl max-w-max'>
              <div className='px-8 rounded flex flex-col justify-center'>
                <h3 className='text-xl '>Add your rating & review</h3>
                <p>Your rating matters</p>
              </div>
              <button className='bg-white text-black rounded px-2 py-2 my-4 mx-10 '>
                Rate now
              </button>
            </div>
            <div>
              <button className='bg-white text-black rounded px-6 py-2 my-4 mx-4 max-w-max'>
                2d
              </button>
              <button className='bg-white text-black rounded px-2 py-2 my-2 mx-4 max-w-max'>
                Hollywood
              </button>
            </div>
            <button
              onClick={launchRazorPay}
              className='bg-buttonCol-400 text-white text-xl rounded px-2 py-3 my-4 mx-4 max-w-max'
            >
              Book Tickets
            </button>
          </div>
        </div>
        <img
          src={props.backdrop_path}
          alt='poster'
          className='w-full h-full'
        />
      </div>
    </>
  );
};

export default MovieHero;
