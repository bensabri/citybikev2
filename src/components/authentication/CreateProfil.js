import React from 'react';
import axios from 'axios';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { useGlobalContext } from '../../context';
import './Profile.css';

const CreateProfil = ({ postUserData, setPostUserData }) => {
	const { counter, setCounter } = useGlobalContext();

	const submitForm = () => {
		axios.post('http://localhost:5000/profil/api/v1/newuser', postUserData);
		setCounter(counter + 1);
	};

	return (
		<div>
			{
				<div className="create-profile-container">
					<h2 className="text-center text-xl font-bold">
						Créer vos information Personnel
					</h2>
					<div className="form-container dark:text-black">
						<label htmlFor="firstname">Nom</label>
						<input
							type="text"
							name="firstname"
							id="firstname"
							required
							value={postUserData.firstname}
							onChange={(e) =>
								setPostUserData({
									...postUserData,
									firstname: e.target.value,
								})
							}
						/>

						<label htmlFor="lastname">Prénon</label>
						<input
							type="text"
							name="lastname"
							id="lastname"
							required
							value={postUserData.lastname}
							onChange={(e) =>
								setPostUserData({
									...postUserData,
									lastname: e.target.value,
								})
							}
						/>

						<label htmlFor="email">Email</label>
						<input
							type="text"
							name="email"
							id="email"
							required
							value={postUserData.email}
							onChange={(e) =>
								setPostUserData({
									...postUserData,
									email: e.target.value,
								})
							}
						/>

						<label htmlFor="age">Age</label>
						<input
							type="text"
							name="age"
							id="age"
							required
							value={postUserData.age}
							onChange={(e) =>
								setPostUserData({
									...postUserData,
									age: e.target.value,
								})
							}
						/>

						<label htmlFor="address">Address</label>
						<input
							type="text"
							name="address"
							id="address"
							value={postUserData.address}
							onChange={(e) =>
								setPostUserData({
									...postUserData,
									address: e.target.value,
								})
							}
						/>

						<label htmlFor="gender">Gender</label>
						<select
							name="gender"
							id="gender"
							value={postUserData.gender}
							onChange={(e) =>
								setPostUserData({
									...postUserData,
									gender: e.target.value,
								})
							}
						>
							<option value=""></option>
							<option value="male">Homme</option>
							<option value="female">Femme</option>
						</select>

						<button
							type="submit"
							className="bg-green-400 text-white py-1.5 px-2.5 my-5 rounded-md"
							onClick={submitForm}
						>
							Create
						</button>
					</div>
				</div>
			}
		</div>
	);
};

export default withAuthenticationRequired(CreateProfil, {
	onRedirecting: () => <h1>Loading ...</h1>,
});
