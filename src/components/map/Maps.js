import React, { useEffect } from 'react';
import './Maps.css';
import axios from 'axios';
import Selectcity from './Selectcity';
import { useGlobalContext } from './../../context';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { greenBike, orangeBike, redBike } from './MapIcons';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import DetailStation from './DetailStation';

const Maps = () => {
	const {
		data,
		setData,
		isFetch,
		setIsFetched,
		query,
		setStatus,
		hideBtnMap,
	} = useGlobalContext();

	const URL = `https://api.jcdecaux.com/vls/v1/stations?contract=${query}&apiKey=55d7b7d4946a320c591ffa19aee2bbab6049dca3`;

	useEffect(() => {
		axios.get(URL).then((res) => {
			setData(res.data);
			setIsFetched(true);
			console.log(res.data);
		});
	}, [query]);

	const [first] = data;

	return (
		<>
			<div>
				<Selectcity />
				<div className="grid-container">
					{isFetch && (
						<div
							className={`leaflet-container ${
								hideBtnMap && 'close'
							}`}
						>
							<Map
								center={[
									first.position.lat,
									first.position.lng,
								]}
								zoom={12}
								scrollWheelZoom={true}
							>
								<TileLayer
									url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
									attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
								/>
								{data.map((bike, index) => (
									<Marker
										key={index}
										position={bike.position}
										icon={
											bike.available_bikes === 0
												? redBike
												: bike.available_bikes <= 5
												? orangeBike
												: greenBike
										}
										onClick={() =>
											setStatus(
												`${
													bike.available_bikes === 0
														? 'Désole plus aucun vélo disponible'
														: `${
																bike.available_bikes
														  } Vélo disponible a la station ${bike.name.slice(
																4,
																50
														  )}`
												}`
											)
										}
									>
										<Popup
											key={index}
											position={[
												bike.position.lat,
												bike.position.lng,
											]}
										>
											<div>
												<h2>
													<strong>
														Address:
														<br />
													</strong>
													{bike.address}
												</h2>
												<p>{`${bike.available_bikes} Vélo disponible dans cette station`}</p>
											</div>
										</Popup>
									</Marker>
								))}
							</Map>
						</div>
					)}
					<DetailStation />
				</div>
			</div>
		</>
	);
};

export default withAuthenticationRequired(Maps, {
	onRedirecting: () => <h1>Loading ...</h1>,
});
