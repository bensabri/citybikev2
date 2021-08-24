import React from 'react';
import axios from 'axios';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { useGlobalContext } from '../../context';
import './Profile.css';

const CreateProfil = ({ postUserData, setPostUserData }) => {
	const { counter, setCounter, setIsFetched } = useGlobalContext();

	const submitForm = (e) => {
		e.preventDefault();
		try {
			axios.post('http://localhost:5000/profil/api/user', postUserData);
			setCounter(counter + 1);
			setIsFetched(true);
		} catch (error) {
			alert(`L'adresse email est déjà utilisée`);
		}
	};

	return (
		<>
			<form onSubmit={submitForm}>
				<div className="form-container dark:text-black">
					<div className="flex-personel-info">
						<h2 className="text-center text-xl font-bold">
							Créer vos information Personnel
						</h2>
						<label htmlFor="firstname">Nom*:</label>
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

						<label htmlFor="lastname">Prénon*:</label>
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

						<label htmlFor="email">Email*:</label>
						<input
							type="email"
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

						<label htmlFor="age">Age*:</label>
						<input
							type="number"
							name="age"
							id="age"
							required
							min="1"
							value={postUserData.age}
							onChange={(e) =>
								setPostUserData({
									...postUserData,
									age: e.target.value,
								})
							}
						/>

						<label htmlFor="address">Address*:</label>
						<input
							type="text"
							name="address"
							id="address"
							required
							value={postUserData.address}
							onChange={(e) =>
								setPostUserData({
									...postUserData,
									address: e.target.value,
								})
							}
						/>
						<label htmlFor="gender">Gender*</label>
						<select
							name="gender"
							id="gender"
							value={postUserData.gender}
							required
							onChange={(e) =>
								setPostUserData({
									...postUserData,
									gender: e.target.value,
								})
							}
						>
							<option value="">Selectionner</option>
							<option value="male">Homme</option>
							<option value="female">Femme</option>
						</select>
						<button
							type="submit"
							className="bg-green-400 text-white py-1.5 px-2.5 my-5 rounded-md"
						>
							Creer
						</button>
					</div>
				</div>
			</form>
		</>
	);
};

export default withAuthenticationRequired(CreateProfil, {
	onRedirecting: () => <h1>Loading ...</h1>,
});
