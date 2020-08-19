import React from 'react';

const Footer = () => (
	<footer class='footer-bg py-5'>
		<div class='container'>
			<div class='row'>
				<div class='col-md-6'>
					<a class='footer-logo' href='index.html'>
						<img src='img/kremlin_logo_light.png' alt='kremlin_logo' />
					</a>
					<p class='footer-info'>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						Nobis, vel sit. Nesciunt minus, quae est libero nobis natus
						repellendus deserunt officia vero laboriosam dolorum quos?
						Fuga totam labore nam enim.
					</p>
					<p>
						Address: 1234 Strt, Ulaya <br />
						P.O Box 09876 (0009) <br />
						Berlin, Germany.
					</p>
					<p>
						Email: <span>info@kremlin.com</span>
					</p>
					<p>
						Phone Number: <span>(+3) 084 800 490</span>
					</p>
					<div class='footer-social-links p-2'>
						<a href='#'>
							<i class='fa fa-facebook px-2'></i>
						</a>
						<a href='#'>
							<i class='fa fa-instagram px-2'></i>
						</a>
						<a href='#'>
							<i class='fa fa-twitter px-2'></i>
						</a>
						<a href='#'>
							<i class='fa fa-youtube px-2'></i>
						</a>
						<a href='#'>
							<i class='fa fa-linkedin px-2'></i>
						</a>
					</div>
				</div>
				<form class='col-md-6' action=''>
					<h2 class='text-center'>
						Get <span>In touch</span>
					</h2>
					<div class='form-group'>
						<input
							type='text'
							class='form-control'
							id='name'
							placeholder='Enter your name'
							required
						/>
					</div>
					<div class='form-group'>
						<input
							type='email'
							class='form-control'
							id='Email'
							placeholder='example@mail.com'
							required
						/>
					</div>
					<div class='form-group'>
						<textarea
							class='form-control'
							id='message'
							rows='3'
							placeholder='Enter your message'
							required
						></textarea>
					</div>
					<button type='submit' class='btn btn-primary'>
						Submit
					</button>
				</form>
			</div>
			<div class='attribution text-center p-3'>
				<p>Powered by Kryptonite CREATIVES @2020. All Rights Reserved.</p>
			</div>
		</div>
	</footer>
);

export default Footer;
