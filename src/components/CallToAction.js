import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CallToAction = () => {
	return (
		<section class='cta-bg py-5'>
			<div class='container'>
				<div class='row'>
					<div class='col-md-8'>
						<h2 class='cta_title'>
							Welcome to the <span>KREMLIN</span>
						</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Esse, ea. Dolore, aliquid aliquam. Sit nam cumque quas
							culpa repellendus, dicta reiciendis asperiores enim ullam
							est, aliquam fugit.
						</p>
					</div>
					<div class='col-md-4'>
						<a class='btn btn-cta mt-5' href=''>
							<FontAwesomeIcon icon='bullhorn' />
							Get Started
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CallToAction;
