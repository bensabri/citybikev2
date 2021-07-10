import React, { useState } from 'react';
import CreateProfil from './CreateProfil';
import GetProfil from './GetProfil';
import { useAuth0 } from '@auth0/auth0-react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { useGlobalContext } from '../../context';
import './Profile.css';

const Profile = () => {
	const { userData, loading } = useGlobalContext();
	const { user } = useAuth0();
	const { sub } = user;

	const [postUserData, setPostUserData] = useState({
		firstname: '',
		lastname: '',
		email: '',
		age: '',
		address: '',
		gender: '',
		authid: sub,
	});

	let userCreated = userData.find((user) => user.authid === sub);

	return (
		<>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<div>
					<GetProfil />
					{!userCreated && (
						<CreateProfil
							postUserData={postUserData}
							setPostUserData={setPostUserData}
						/>
					)}
				</div>
			)}
		</>
	);
};

export default withAuthenticationRequired(Profile, {
	onRedirecting: () => <h1>Loading ...</h1>,
});
