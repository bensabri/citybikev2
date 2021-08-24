import React, { useState, useContext } from 'react';
// import { useAuth0 } from '@auth0/auth0-react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [isFetch, setIsFetched] = useState(false);
	const [data, setData] = useState([]);
	const [position, setPosition] = useState([]);
	const [query, setQuery] = useState('nantes');
	const [status, setStatus] = useState('');
	const [night, setNight] = useState(true);
	const [userData, setUserData] = useState([]);
	const [counter, setCounter] = useState(1);
	const [loading, setLoading] = useState(true);
	const [isEditing, setIsEditing] = useState(false);
	const [signed, setSigned] = useState(false);
	const [hideBtnMap, setHideBtnMap] = useState(false);

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
				userData,
				setUserData,
				counter,
				setCounter,
				loading,
				setLoading,
				isEditing,
				setIsEditing,
				signed,
				setSigned,
				hideBtnMap,
				setHideBtnMap,
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
