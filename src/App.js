import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faBullhorn, faFire } from '@fortawesome/free-solid-svg-icons';
import './assets/css/style.css';
import Nav from './components/Nav.js';
import Home from './views/home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';

library.add(fab, faBullhorn, faFire);

const App = () => (
	<div>
		<Nav />
		<Router>
			<Route exact path='/' component={Home} />

			{/* <Home /> */}
		</Router>
		<Footer />
	</div>
);

export default App;
