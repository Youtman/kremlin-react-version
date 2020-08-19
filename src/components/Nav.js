import React from 'react';
import logo from '../assets/img/kremlin_logo_light.png';

const Nav = () => (
	<div>
		<nav id='header' class='navbar navbar-expand-lg fixed-top'>
			<div class='container'>
				<a class='navbar-brand' href='/'>
					<img src={logo} alt='kremlin_logo' />
				</a>
				<button
					class='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span class='navbar-toggler-icon'></span>
				</button>

				<div class='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul class='navbar-nav ml-auto'>
						<li class='nav-item active'>
							<a class='nav-link' href='/'>
								Home <span class='sr-only'>(current)</span>
							</a>
						</li>
						<li class='nav-item'>
							<a class='nav-link' href='/about'>
								About
							</a>
						</li>
						<li class='nav-item'>
							<a class='nav-link' href='/shop'>
								Shop
							</a>
						</li>
						<li class='nav-item'>
							<a class='nav-link' href='/contact'>
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
);

export default Nav;
