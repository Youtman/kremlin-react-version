import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CallToAction = () => {
  return (
    <section className='cta-bg py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8'>
            <h2 className='cta_title'>
              Welcome to the <span>KREMLIN</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ea.
              Dolore, aliquid aliquam. Sit nam cumque quas culpa repellendus,
              dicta reiciendis asperiores enim ullam est, aliquam fugit.
            </p>
          </div>
          <div className='col-md-4'>
            <Link className='btn btn-cta mt-5' to=''>
              <FontAwesomeIcon icon='bullhorn' />
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
