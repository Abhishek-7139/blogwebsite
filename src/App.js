import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import Foot from './components/Foot';

import Home from './components/Home';
import Login from './components/Login';

import iosd_logo from './resources/pics/iosd.png';
import nsut_logo from './resources/pics/nsut.png';
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
				<Switch>
					<Route path='/login' component={Login} />
					<Route path='/' component={Home} />
				</Switch>
			</main>
			<section id='footer'>
				<Foot />
			</section>
		</div>
	);
}

export default App;
