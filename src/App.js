import React from 'react';
import './App.css';
import './assets/css/style.css';
import Nav from './components/Nav.js';
import Home from './views/home';
import Footer from './components/Footer';

const App = () => (
	<div>
		<Nav />
		<Home />
		<Footer />
	</div>
);

export default App;
