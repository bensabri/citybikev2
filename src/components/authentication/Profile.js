import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';

const Profile = () => {
	// const { user } = useAuth0();
	// const { name, picture, email } = user;

	return (
		<div>
			<label htmlFor="name">Enter name</label>
			<input type="text" name="name" id="name" />
		</div>
	);
};

export default withAuthenticationRequired(Profile, {
	onRedirecting: () => <h1>Loading ...</h1>,
});
