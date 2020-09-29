import React from 'react';
import NavBar from './components/NavBar';
import Accounts from './components/Accounts';
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
					We are here to Connect you with your seniors to get technical
					advice and guidance. Listen to their experiences of tech
					interviews and get yourself prepared. Join our mailing list to
					never miss our weekly blogs and interview updates.
				</article>
				<Accounts />
			</main>
		</div>
	);
}

export default App;
