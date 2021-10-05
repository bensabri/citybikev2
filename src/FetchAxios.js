import React, { useEffect } from 'react';
import axios from 'axios';
import { useGlobalContext } from './context';

const FetchAxios = () => {
	const { setUserData, counter, setLoading } = useGlobalContext();

	useEffect(() => {
		axios
			.get('https://citybike2.herokuapp.com/profil/api/user')
			.then((res) => {
				setUserData(res.data);
				setLoading(false);
			});
	}, [counter]);

	return <div></div>;
};

export default FetchAxios;
