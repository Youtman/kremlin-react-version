import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import members from '../../data/team.js';

const Team = () => {
  return (
    <section className='team py-5'>
      <div className='container'>
        <h2 className='team-heading'>
          Check out our <span>team</span>
        </h2>
        <div className='row my-3'>
          {members.map((member) => {
            return (
              <div className='col-md-4' key={member.id}>
                <article className='shadow p-0'>
                  <img
                    src={member.image}
                    className='img-fluid'
                    alt={member.name}
                  />
                  <div className='team-content p-3'>
                    <h3>{member.name}</h3>
                    <p>{member.description}</p>
                    <Link className='btn btn-team' to=''>
                      Read more
                    </Link>
                  </div>
                  <div className='team-social-links p-2'>
                    <Link to=''>
                      <FontAwesomeIcon icon={['fab', 'facebook']} />
                    </Link>
                    <Link to=''>
                      <FontAwesomeIcon icon={['fab', 'instagram']} />
                    </Link>
                    <Link to=''>
                      <FontAwesomeIcon icon={['fab', 'twitter']} />
                    </Link>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
