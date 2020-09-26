import React from 'react';

const Testimonials = () => {
  return (
    <section className='cta-bg py-5'>
      <div className='container'>
        <div className='slider-item active-slider-item'>
          <div className='row'>
            <div className='col-md-8'>
              <h2 className='cta_title'>
                This is what <span>Stacy</span> thinks
              </h2>
              <p>
                <i className='fa fa-quote-left mr-2' aria-hidden='true'></i>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
                eius consequuntur mollitia recusandae! Rerum sit voluptas
                sapiente esse quo accusamus, ab nesciunt vitae velit repellat,
                architecto voluptates. Commodi, labore in.
                <i className='fa fa-quote-right ml-2' aria-hidden='true'></i>
              </p>
            </div>
            <div className='col-md-4'>
              <img
                src={require('../../assets/img/person1.jpg')}
                className='img-fluid rounded-circle'
                alt=''
              />
            </div>
          </div>
        </div>
        <div className='slider-item'>
          <div className='row'>
            <div className='col-md-8'>
              <h2 className='cta_title'>
                This is what <span>Alicia</span> thinks
              </h2>
              <p>
                <i className='fa fa-quote-left mr-2' aria-hidden='true'></i>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
                eius consequuntur mollitia recusandae! Rerum sit voluptas
                sapiente esse quo accusamus, ab nesciunt vitae velit repellat,
                architecto voluptates. Commodi, labore in.
                <i className='fa fa-quote-right ml-2' aria-hidden='true'></i>
              </p>
            </div>
            <div className='col-md-4'>
              <img
                src={require('../../assets/img/person2.jpg')}
                className='img-fluid rounded-circle'
                alt=''
              />
            </div>
          </div>
        </div>
        <div className='slider-item'>
          <div className='row'>
            <div className='col-md-8'>
              <h2 className='cta_title'>
                This is what <span>Kimberly</span> thinks
              </h2>
              <p>
                <i className='fa fa-quote-left mr-2' aria-hidden='true'></i>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
                eius consequuntur mollitia recusandae! Rerum sit voluptas
                sapiente esse quo accusamus, ab nesciunt vitae velit repellat,
                architecto voluptates. Commodi, labore in.
                <i className='fa fa-quote-right ml-2' aria-hidden='true'></i>
              </p>
            </div>
            <div className='col-md-4'>
              <img
                src={require('../../assets/img/person3.jpg')}
                className='img-fluid rounded-circle'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
