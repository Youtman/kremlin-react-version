import React from 'react';
import Hero from '../components/Home/Hero';
import CallToAction from '../components/Home/CallToAction';
import Services from '../components/Home/Services';
import Testimonials from '../components/Home/Testimonials';
import Team from '../components/Home/Team';

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
