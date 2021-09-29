import React from 'react';
import {
  BiChevronleft,
  BiChevronDown,
  BiShareAlt,
  BiSearch,
  BiMenu,
  BiChevronLeft,
} from 'react-icons/bi';
import logo from './masterlogo.png';

const NavSm = () => {
  return (
    <>
      <div className='text-white flex item-center justify-between'>
        <div className='w-8 h-8 self-center '>
          <BiChevronLeft className='w-full h-full' />
        </div>
        <div className='w-4 h-4 self-center '>
          <BiShareAlt className='w-full h-full' />
        </div>
      </div>
    </>
  );
};

const NavLg = () => {
  return (
    <div className='container mx-auto px-4 flex items-center justify-between'>
      <div className='flex items-center w-1/2'>
        <div className='w-40 h-auto'>
          <img src={logo} alt='logo' />
        </div>
        <div className='w-full flex items-center bg-white gap-3 px-3 py-2 rounded-sm'>
          <BiSearch />
          <input
            type='search'
            className='w-full focus:outline-none'
            placeholder='Search for movies, events, plays, sports and activities'
          />
        </div>
      </div>
      <div className='flex items-center gap-3'>
        <span className='text-gray-400 flex items-center text-4xs hover:text-white cursor-pointer'>
          Jammu <BiChevronDown />
        </span>
        <button className='bg-buttonCol-400 text-white text-sm rounded px-2 py-1'>
          Sign in
        </button>
        <div>
          <div className='w-8 h-8 text-white'>
            <BiMenu className='w-full h-full ' />
          </div>
        </div>
      </div>
    </div>
  );
};

const MovieNavbar = () => {
  return (
    <>
      <nav className='absolute inset-x-0 z-333 bg-grey-100 px-4 py-2 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative bg-navCol-800'>
        <div className='md:hidden '>
          <NavSm />
        </div>
        <div className='hidden lg:hidden md:block'>
          <NavSm />
        </div>
        <div className='hidden lg:flex'>
          <NavLg />
        </div>
      </nav>
    </>
  );
};

export default MovieNavbar;
