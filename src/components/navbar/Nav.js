import React, { useState } from 'react';
import Switcher from './SwitchNight';
import './Nav.css';
import logo from '../../images/BikeCity.jpg';
import AuthenticationButton from '../buttons/Authentication-button';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import UserName from './UserName';

const Nav = () => {
	const { isAuthenticated } = useAuth0();
	const [menu, setMenu] = useState(false);

	return (
		<div className="nav-bar dark:bg-gray-800 ">
			<img src={logo} alt="city-bike" />
			<Switcher />
			<ul
				className={`nav-list ${menu ? 'active lg:dark:bg-black' : ''}`}
				onClick={() => setMenu(!menu)}
			>
				<li className="hover:text-blue-400 hover:bg-white dark:hover:text-black">
					<Link to="/">Acceuil</Link>
				</li>
				{isAuthenticated && (
					<li className="hover:text-blue-400 hover:bg-white dark:hover:text-black">
						<Link to="/profil/api/user">Profil</Link>
					</li>
				)}

				<li className="hover:text-blue-400 hover:bg-white dark:hover:text-black">
					<Link to="/contact">Contact</Link>
				</li>
				<li className="hover:text-blue-400 hover:bg-white dark:hover:text-black">
					<Link to="/apropos">A propos</Link>
				</li>
			</ul>
			{isAuthenticated && <UserName />}

			<AuthenticationButton />
			<div
				className={`toggle ${menu ? 'active' : ''}`}
				onClick={() => setMenu(!menu)}
			></div>
		</div>
	);
};

export default Nav;
