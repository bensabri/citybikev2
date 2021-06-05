import React from 'react';
import Switch from './Switch';
import './Nav.css';
import logo from '../../images/BikeCity.jpg';

const Nav = () => {
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
			<div className="btn-container">
				<button>Login</button>
			</div>
		</div>
	);
};

export default Nav;
