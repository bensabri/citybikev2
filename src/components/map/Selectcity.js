import React from 'react';
import Villes from '../../Villes';
import { useGlobalContext } from './../../context';
import './Maps.css';

const Selectcity = () => {
	const { query, setQuery, hideBtnMap } = useGlobalContext();

	return (
		<div
			className={`select-container dark:bg-gray-700 ${
				hideBtnMap ? 'hide' : ''
			}`}
		>
			<div className="option-container">
				<label htmlFor="select-city">Selectionner une Ville:</label>
				<select
					className="text-black"
					name="city"
					id="select-city"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				>
					<option value=""></option>
					{Villes.sort().map((ville, index) => (
						<option key={index} value={ville}>
							{ville}
						</option>
					))}
				</select>
			</div>
			<h1 className="title">
				<strong>Selectionner une station sur la carte</strong>
			</h1>
		</div>
	);
};

export default Selectcity;
