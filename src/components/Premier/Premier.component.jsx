import React from 'react';
import Slider from 'react-slick';
import { settings, Images } from '../config';
import Poster from '../Poster/Poster.component.jsx';

export const Premier = () => {
  return (
    <>
      <div className='flex flex-col items-start py-4'>
        <h3 className='text-white text-xl font-bold'>Premiers</h3>
        <p className='text-white text-sm'>Brand new release every Friday</p>
      </div>
      <Slider {...settings}>
        {Images.map((image) => (
          <Poster {...image} isDark={false} isCircle={true}/>
        ))}
      </Slider>
    </>
  );
};

export default Premier;
