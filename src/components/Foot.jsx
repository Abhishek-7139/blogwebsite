import React from 'react';
import './Foot.css';

const Foot = () => {
	return (
		<footer>
			<div id='logo'>
				<h2>IOSD</h2>
				<h4>Netaji Subhas University of Technology, Dwarka-3</h4>
				<h4>Delhi-110078</h4>
			</div>
			<div id='connections'>
				<a
					href='https://www.facebook.com/iosddtu/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<i className='fa fa-facebook-official' aria-hidden='true'></i>
				</a>
				<a
					href='https://www.instagram.com/iosdofficial/?hl=en'
					target='_blank'
					rel='noopener noreferrer'
				>
					<i className='fa fa-instagram' aria-hidden='true'></i>
				</a>
				<a
					href='https://twitter.com/iosdofficial?lang=en'
					target='_blank'
					rel='noopener noreferrer'
				>
					<i className='fa fa-twitter' aria-hidden='true'></i>
				</a>
				<a
					href='https://github.com/IOSD'
					target='_blank'
					rel='noopener noreferrer'
				>
					<i className='fa fa-github' aria-hidden='true'></i>
				</a>
				<a
					href='https://in.linkedin.com/company/iosdofficial'
					target='_blank'
					rel='noopener noreferrer'
				>
					<i className='fa fa-linkedin' aria-hidden='true'></i>
				</a>
				<a
					href='http://bit.ly/IOSDYT'
					target='_blank'
					rel='noopener noreferrer'
				>
					<i className='fa fa-youtube-play' aria-hidden='true'></i>
				</a>
				<a
					href='https://m.twitch.tv/iosdofficial/profile'
					target='_blank'
					rel='noopener noreferrer'
				>
					<i className='fa fa-twitch' aria-hidden='true'></i>
				</a>
			</div>
		</footer>
	);
};

export default Foot;
