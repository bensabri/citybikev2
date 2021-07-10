import React, { useEffect } from 'react';
import axios from 'axios';
import { useGlobalContext } from './context';

const FetchAxios = () => {
	const { setUserData, counter, setLoading } = useGlobalContext();

	useEffect(() => {
		axios.get('http://localhost:5000/profil/api/v1/newuser').then((res) => {
			setUserData(res.data);
			setLoading(false);
		});
	}, [counter]);

	return <div></div>;
};

export default FetchAxios;
