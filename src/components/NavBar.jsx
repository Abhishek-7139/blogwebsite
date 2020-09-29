import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends React.Component {
	state = { toggle: false };

	handleToggle = () => {
		this.setState({ toggle: !this.state.toggle });
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
						<button>
							<span className='nav-link'>Companies</span>
						</button>
						<ul className='companyList'>
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
