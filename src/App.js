import React from 'react';
import NavBar from './components/NavBar';
import Accounts from './components/Accounts';
import Form from './components/Form';
import Foot from './components/Foot';
import iosd_logo from './resources/pics/iosd.png';
import nsut_logo from './resources/pics/nsut.png';
import apple from './resources/pics/apple.png';
import amazon from './resources/pics/amazon.png';
import fb from './resources/pics/fb.png';
import google from './resources/pics/google.png';
import netflix from './resources/pics/netflix.png';
import './App.css';

function App() {
	return (
		<div className='App'>
			<header>
				<span id='icons'>
					<img src={iosd_logo} className='nav-logo' alt='iosd' />
					<img src={nsut_logo} className='nav-logo' alt='nsut' />
				</span>
				<NavBar />
			</header>

			<main>
				<section id='logos'>
					<img src={fb} alt='Facebook' className='main-logo' />
					<img src={apple} alt='Apple' className='main-logo' />
					<img src={amazon} alt='Amazon' className='main-logo' />
					<img src={netflix} alt='Netflix' className='main-logo' />
					<img src={google} alt='Google' className='main-logo' />
				</section>
				<article id='description'>
					<p>
						We are here to Connect you with your seniors to get technical
						advice and guidance. Listen to their experiences of tech
						interviews and get yourself prepared. Join our mailing list to
						never miss our weekly blogs and interview updates.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
						do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute
						irure dolor in reprehenderit in voluptate velit esse cillum
						dolore eu fugiat nulla pariatur. Excepteur sint occaecat
						cupidatat non proident, sunt in culpa qui officia deserunt
						mollit anim id est laborum.
					</p>
				</article>
				<section id='accounts-section'>
					<h3 className='title'>Most Recent Experiences</h3>
					<Accounts />
				</section>
				<section id='signup'>
					<Form />
				</section>
			</main>
			<section id='footer'>
				<Foot />
			</section>
		</div>
	);
}

export default App;
