import React from 'react';

const Hero = () => {
	return (
		<section class='hero'>
			<img
				src={require('../../assets/img/krem_hero-dark.png')}
				class='img-fluid'
				alt='hero'
			/>
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
