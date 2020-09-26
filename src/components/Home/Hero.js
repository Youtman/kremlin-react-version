import React from 'react';

const Hero = () => {
  return (
    <section className='hero'>
      <img
        src={require('../../assets/img/krem_hero-dark.png')}
        className='img-fluid'
        alt='hero'
      />
      <div className='hero-text p-5'>
        <h1>
          Krem De
          <br />
          la Krem
        </h1>
      </div>
    </section>
  );
};

export default Hero;
