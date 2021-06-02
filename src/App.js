import './App.css';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
import Nav from './components/navbar/Nav';

function App() {
	return (
		<>
			<div className="bg-green-200 flex justify-around py-3">
				<h1>acceuil</h1>
				<h1>contact</h1>
				<h1>hello</h1>
				<h1>hello world</h1>
			</div>
			<div className="leaflet-container">
				<Map center={[45.4, -75.7]} zoom={12}>
					<TileLayer
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					/>
				</Map>
			</div>
		</>
	);
}

export default App;
