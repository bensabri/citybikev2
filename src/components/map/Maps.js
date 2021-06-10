import React, { useEffect } from 'react';
import './Maps.css';
import axios from 'axios';
import Selectcity from './Selectcity';
import { useGlobalContext } from './../../context';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { greenBike, orangeBike, redBike } from './MapIcons';
import { withAuthenticationRequired } from '@auth0/auth0-react';

const Maps = () => {
	const { data, setData, isFetch, setIsFetched, query, status, setStatus } =
		useGlobalContext();

	const URL = `https://api.jcdecaux.com/vls/v1/stations?contract=${query}&apiKey=55d7b7d4946a320c591ffa19aee2bbab6049dca3`;

	useEffect(() => {
		axios.get(URL).then((res) => {
			setData(res.data);
			setIsFetched(true);
		});
	}, [query]);

	const [first] = data;

	return (
		<>
			<Selectcity />
			<div className="grid-container">
				{isFetch && (
					<div className="leaflet-container">
						<Map
							center={[first.position.lat, first.position.lng]}
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
											`${bike.available_bikes} Vélo disponible dans cette station`
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
				<div className="detail dark:bg-gray-7-00">
					<h2 className="dark:text-black detail-station">
						Detail de la station
					</h2>
					<p className="dark:text-black">{status}</p>
				</div>
			</div>
		</>
	);
};

export default withAuthenticationRequired(Maps, {
	onRedirecting: () => <h1>Loading ...</h1>,
});
