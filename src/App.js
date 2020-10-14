import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Foot from './components/Foot/Foot';

import Home from './components/Home/Home';
import Login from './components/Login/Login';

import './App.css';

function App() {
	return (
		<div className='App'>
			<header>
				<NavBar />
			</header>

			<main>
				<Switch>
					<Route path='/blogwebsite/login' component={Login} />
					<Route path='/blogwebsite' component={Home} />
					<Redirect to='/blogwebsite'></Redirect>
				</Switch>
			</main>
			<Foot />
		</div>
	);
}

export default App;
