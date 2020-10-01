import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
			<span id='nav-span'>
				<span className='fas fa-bars' onClick={handleToggle} />
				<Link id='loginLink' to='/login'>
					Log In
				</Link>
			</span>
			<ul className={toggle ? 'nav-list active' : 'nav-list'}>
				<li>
					<Link className='nav-link' to='/home'>
						Home
					</Link>
				</li>
				<li id='company'>
					<button onClick={handleDropDown}>
						<span className='nav-link'>
							Companies
							<i
								className={
									dropDown
										? 'fa fa-angle-down rotate'
										: 'fa fa-angle-down'
								}
								aria-hidden='true'
							></i>
						</span>
					</button>
					<ul className={dropDown ? 'companyList active' : 'companyList'}>
						<li>
							<Link className='nav-link' to='/apple'>
								Apple
							</Link>
						</li>
						<li>
							<Link className='nav-link' to='/amazon'>
								Amazon
							</Link>
						</li>
						<li>
							<Link className='nav-link' to='/facebook'>
								Facebook
							</Link>
						</li>
						<li>
							<Link className='nav-link' to='google'>
								Google
							</Link>
						</li>
						<li>
							<Link className='nav-link' to='netflix'>
								Netflix
							</Link>
						</li>
					</ul>
				</li>
				<li>
					<Link className='nav-link' to='/blog'>
						Blog
					</Link>
				</li>
				<li>
					<Link className='nav-link' to='/contactus'>
						Contact Us
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
