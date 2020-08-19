import React from 'react';
import Hero from '../components/Hero';
import CallToAction from '../components/CallToAction';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';

const Home = () => {
	return (
		<div>
			{/*  Hero Section */}
			<Hero />
			{/* C.T.A Section */}
			<CallToAction />
			{/* Services Section  */}
			<Services />
			{/* Testimonials Section */}
			<Testimonials />
			{/* Team Section */}
			<Team />
		</div>
	);
};

export default Home;
