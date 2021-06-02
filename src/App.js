import './App.css';
import Maps from './components/map/Maps';

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
			<Maps />
		</>
	);
}

export default App;
