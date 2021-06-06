import React from 'react';
import Switch from './Switch';
import './Nav.css';
import logo from '../../images/BikeCity.jpg';
import LoginButton from '../buttons/LoginButton';
import LogoutButton from '../buttons/LogOutButton';
import { useAuth0 } from '@auth0/auth0-react';

const Nav = () => {
	const { isAuthenticated } = useAuth0();
	return (
		<div className="nav-bar dark:bg-gray-700 ">
			<img src={logo} alt="city-bike" />
			<Switch />
			<ul className="nav-list">
				<li>Acceuil</li>
				<li>Réservation</li>
				<li>Contact</li>
				<li>A propos</li>
			</ul>
			{isAuthenticated ? <LogoutButton /> : <LoginButton />}
		</div>
	);
};

export default Nav;
