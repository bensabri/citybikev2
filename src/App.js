import './App.css';
import Maps from './components/map/Maps';
import Nav from './components/navbar/Nav';
import { useGlobalContext } from './context';

function App() {
	const { night, setNight } = useGlobalContext();
	return (
		<div className={`App ${night ? 'light' : 'dark'}`}>
			<section className="dark:bg-gray-900 dark:text-white">
				<Nav />
				<Maps />
			</section>
		</div>
	);
}

export default App;
