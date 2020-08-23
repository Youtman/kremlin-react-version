import React from 'react';
import Heroimg from '../assets/img/krem_hero-dark.png';

const Hero = () => {
	return (
		<section class='hero'>
			<img src={Heroimg} class='img-fluid' alt='hero' />
			<div class='hero-text p-5'>
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
