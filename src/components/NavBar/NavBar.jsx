import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import iosd_logo from '../../resources/pics/iosd.png';
import nsut_logo from '../../resources/pics/nsut.png';

import './NavBar.css';

const NavBar = () => {
	const [toggle, setToggle] = useState(false);
	const [dropDown, setDropDown] = useState(false);

	const handleToggle = () => {
		setToggle(!toggle);
	};

	const handleDropDown = () => {
		setDropDown(!dropDown);
	};

	return (
		<nav id='nav-bar'>
			<span id='icons'>
				<img src={iosd_logo} className='nav-logo' alt='iosd' />
				<img src={nsut_logo} className='nav-logo' alt='nsut' />
			</span>
			<span className='fas fa-bars' onClick={handleToggle} />

			<ul className={toggle ? 'nav-list active' : 'nav-list'}>
				<li>
					<Link className='nav-link' to='/blogwebsite'>
						Home
					</Link>
				</li>
				<li id='company' className='nav-link'>
					<button
						id='company-button'
						className='dropdown'
						onClick={handleDropDown}
					>
						<span>Companies</span>
						<i
							className={
								dropDown
									? 'fa fa-angle-down rotate'
									: 'fa fa-angle-down'
							}
							aria-hidden='true'
						></i>
					</button>
					<ul
						className={dropDown ? 'company-list active' : 'company-list'}
					>
						<li>
							<Link className='nav-link' to='/blogwebsite/apple'>
								Apple
							</Link>
						</li>
						<li>
							<Link className='nav-link' to='/blogwebsite/amazon'>
								Amazon
							</Link>
						</li>
						<li>
							<Link className='nav-link' to='/blogwebsite/facebook'>
								Facebook
							</Link>
						</li>
						<li>
							<Link className='nav-link' to='/blogwebsite/google'>
								Google
							</Link>
						</li>
						<li>
							<Link className='nav-link' to='/blogwebsite/netflix'>
								Netflix
							</Link>
						</li>
					</ul>
				</li>
				<li>
					<Link className='nav-link' to='/blogwebsite/blog'>
						Blog
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
