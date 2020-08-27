import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import members from '../../data/team.js';

const Team = () => {
	return (
		<section class='team py-5'>
			<div class='container'>
				<h2 class='team-heading'>
					Check out our <span>team</span>
				</h2>
				<div class='row my-3'>
					{members.map((member) => {
						return (
							<div class='col-md-4' key={member.id}>
								<article class='shadow p-0'>
									<img
										src={member.image}
										class='img-fluid'
										alt={member.name}
									/>
									<div class='team-content p-3'>
										<h3>{member.name}</h3>
										<p>{member.description}</p>
										<Link class='btn btn-team' to=''>
											Read more
										</Link>
									</div>
									<div class='team-social-links p-2'>
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
