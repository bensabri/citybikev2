import React, { useEffect } from 'react';
import axios from 'axios';
import { useGlobalContext } from './context';

const FetchAxios = () => {
	const { setUserData, counter, setLoading, setIsFetched } =
		useGlobalContext();

	useEffect(() => {
		axios.get('http://localhost:5000/profil/api/user').then((res) => {
			setUserData(res.data);
			setLoading(false);
		});
	}, [counter]);

	return <div></div>;
};

export default FetchAxios;
