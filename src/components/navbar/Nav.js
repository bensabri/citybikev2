import React from 'react';
import Switcher from './SwitchNight';
import './Nav.css';
import logo from '../../images/BikeCity.jpg';
import AuthenticationButton from '../buttons/Authentication-button';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import UserName from './UserName';

const Nav = () => {
	const { isAuthenticated } = useAuth0();

	return (
		<div className="nav-bar dark:bg-gray-700 ">
			<img src={logo} alt="city-bike" />
			<Switcher />
			<ul className="nav-list">
				<li>
					<Link to="/">Acceuil</Link>
				</li>
				{isAuthenticated && (
					<li>
						<Link to="/profil">Profil</Link>
					</li>
				)}

				<li>
					<Link to="/contact">Contact</Link>
				</li>
				<li>
					<Link to="/apropos">A propos</Link>
				</li>
			</ul>
			{isAuthenticated && <UserName />}

			<AuthenticationButton />
		</div>
	);
};

export default Nav;
