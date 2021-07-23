/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import DataLayout from '../../layouts/DataLayout';
import ImportData from '../../commons/ImportData';

const Home = () => {
	const [fileData, setFileData] = useState([]);

	const axios = require('axios');
	const url = process.env.REACT_APP_API_URL;
	const token = process.env.REACT_APP_TOKEN.toString();
	
	const config = {
		headers: { Authorization: `Bearer ${token}` }
	};
	useEffect(() => {
		// eslint-disable-next-line no-unused-expressions
		fileData.length > 0
			? fileData.map(async (row) => {
					const values = Object.values(row);

					const dataToSend = {
						alimento: values[0],
						cantidadSugerida: values[1],
						unidad: values[2],
						pesoNeto: values[3]
					};

					try {
						const response = await axios.post(
							`${url}/equivalencias`,
							dataToSend,
							config
						);
						console.log('response: ', response);
					} catch (e) {
						console.log(e);
					}
			  })
			: null;
	}, [fileData]);

	const onSuccess = (data) => {
		setFileData(data);
	};
	return (
		<DataLayout>
			<ImportData onSuccess={onSuccess} />
		</DataLayout>
	);
};

export default Home;
