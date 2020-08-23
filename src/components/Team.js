import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Rebekah from '../assets/img/team1.png';
import Lincoln from '../assets/img/team2.png';
import Mary from '../assets/img/team3.png';
import { Link } from 'react-router-dom';

const Team = () => {
	return (
		<section class='team py-5'>
			<div class='container'>
				<h2 class='team-heading'>
					Check out our <span>team</span>
				</h2>
				<div class='row my-3'>
					<div class='col-md-4'>
						<article class='shadow p-0'>
							<img src={Rebekah} class='img-fluid' alt='' />
							<div class='team-content p-3'>
								<h3>Rebekah Krem</h3>
								<p>
									Laboriosam deleniti nulla illum ex, ratione repellat
									ipsum praesentium fugit ea nesciunt quasi nihil
									magnam impedit labore.
								</p>
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
					<div class='col-md-4'>
						<article class='shadow p-0'>
							<img src={Lincoln} class='img-fluid' alt='' />
							<div class='team-content p-3'>
								<h3>Lincoln Obach</h3>
								<p>
									Laboriosam deleniti nulla illum ex, ratione repellat
									ipsum praesentium fugit ea nesciunt quasi nihil
									magnam impedit labore.
								</p>
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
					<div class='col-md-4'>
						<article class='shadow p-0'>
							<img src={Mary} class='img-fluid' alt='' />
							<div class='team-content p-3'>
								<h3>Mary Waceke</h3>
								<p>
									Laboriosam deleniti nulla illum ex, ratione repellat
									ipsum praesentium fugit ea nesciunt quasi nihil
									magnam impedit labore.
								</p>
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
				</div>
			</div>
		</section>
	);
};

export default Team;
