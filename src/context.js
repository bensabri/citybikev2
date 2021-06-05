import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [isFetch, setIsFetched] = useState(false);
	const [data, setData] = useState([]);
	const [position, setPosition] = useState([]);
	const [query, setQuery] = useState('nantes');
	const [status, setStatus] = useState('');
	const [night, setNight] = useState(true);

	return (
		<AppContext.Provider
			value={{
				data,
				setData,
				position,
				setPosition,
				isFetch,
				setIsFetched,
				query,
				setQuery,
				status,
				setStatus,
				night,
				setNight,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
