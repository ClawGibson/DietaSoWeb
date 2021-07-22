/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import DataLayout from '../../layouts/DataLayout';
import ImportData from '../../commons/ImportData';

const Home = () => {
	const [fileData, setFileData] = useState([]);

	const axios = require('axios');
	const url = 'https://dietasoapiv1.herokuapp.com/api/v2';
	const token =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MGJkMDc3YjNmZGM0ZjI1YmMzZGE3MjMiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2MjY5MjI3MTMsImV4cCI6MTY1ODQ4MDMxM30.WkloGypYOqBsl5AI9IAQH4vKfiByZCXDJmMqEu2VW7A';
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
