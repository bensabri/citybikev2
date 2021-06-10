import './App.css';
import Maps from './components/map/Maps';
import Nav from './components/navbar/Nav';
import Sliders from './components/carousel/Sliders';
import { useGlobalContext } from './context';
import { useAuth0 } from '@auth0/auth0-react';
import { Route, Switch } from 'react-router-dom';
import Contact from './components/contact/Contact';
import Apropos from './components/a-propos/A-propos';
// import ProtectedRoute from './auth/ProtectedRoute';
import Profile from './components/authentication/Profile';

function App() {
	const { night } = useGlobalContext();
	const { isLoading, isAuthenticated } = useAuth0();

	if (isLoading) {
		return <h1>Loading...</h1>;
	}
	return (
		<div className={`App ${night ? 'light' : 'dark'}`}>
			<section className="dark:bg-gray-900 dark:text-white">
				<Nav />
				<Switch>
					<Route path="/" exact component={Sliders} />
				</Switch>
				{isAuthenticated && (
					<div>
						<Route path="/profil" component={Profile} />
						<Maps />
					</div>
				)}
				<Switch>
					<Route path="/contact" component={Contact} />
					<Route path="/apropos" component={Apropos} />
				</Switch>
			</section>
		</div>
	);
}

export default App;
