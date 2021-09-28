import React from 'react';
import HeroSlider from 'react-slick';
import { NextArrow, PrevArrow } from './Arrows.component.jsx';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroCarousel = () => {
  const settingsLg = {
    arrows: true,
    autoplay: true,
    centerMode: true,
    slidesToShow: 1,
    centerPadding: '300px',
    infinite: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToshow: 1,
    slidersToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const images = [
    'https://images.unsplash.com/photo-1608889825513-02c913792693?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fG1vdmllJTIwc2hvd3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    'https://images.unsplash.com/photo-1518715303843-586e350765b2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fG1vdmllJTIwc2hvd3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    'https://images.unsplash.com/photo-1602743297108-4c9061884285?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fG1vdmllJTIwc2hvd3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    'https://images.unsplash.com/photo-1544159389-0c0082749488?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1592685530142-c09bbd31cb32?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
  ];

  return (
    <>
      <div className='lg:hidden'>
        <HeroSlider {...settings}>
          {images.map((image) => {
            return (
              <div className='w-full h-64 md:h-80 py-3'>
                <img
                  src={image}
                  alt='texting'
                  id={image}
                  className='w-full h-full rounded-md'
                />
              </div>
            );
          })}
        </HeroSlider>
      </div>
      <div className='hidden lg:block'>
        <HeroSlider {...settingsLg}>
          {images.map((image) => {
            return (
              <div className='w-full h-96 px-2 py-3'>
                <img
                  src={image}
                  alt='texting'
                  id={image}
                  className='w-full h-full rounded-md'
                />
              </div>
            );
          })}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousel;
