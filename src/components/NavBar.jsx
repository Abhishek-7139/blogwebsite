import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends React.Component {
	state = { toggle: false, dropDown: false };

	handleToggle = () => {
		this.setState({ toggle: !this.state.toggle });
	};

	handleDropDown = () => {
		this.setState({ dropDown: !this.state.dropDown });
	};

	render() {
		return (
			<nav id='nav-bar'>
				<span className='fas fa-bars' onClick={this.handleToggle} />
				<ul className={this.state.toggle ? 'nav-list active' : 'nav-list'}>
					<li>
						<Link className='nav-link' to='/home'>
							Home
						</Link>
					</li>
					<li id='company'>
						<button onClick={this.handleDropDown}>
							<span className='nav-link'>Companies</span>
						</button>
						<ul
							className={
								this.state.dropDown
									? 'companyList active'
									: 'companyList'
							}
						>
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
	}
}

export default NavBar;
