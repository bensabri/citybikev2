import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [isFetch, setIsFetched] = useState(false);
	const [data, setData] = useState([]);
	const [position, setPosition] = useState([]);
	const [query, setQuery] = useState('nantes');

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
