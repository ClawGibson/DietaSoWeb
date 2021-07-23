/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

import DataLayout from '../../layouts/DataLayout';
import EquivalencesTable from './EquivalencesTable';

const Equivalences = () => {
	const [equivalences, setEquivalences] = useState([]);

	const axios = require('axios');

	useEffect(() => {
		fetchEquivalences();
		return () => {
			setEquivalences([]);
		};
	}, []);

	const fetchEquivalences = async () => {
		const config = {
			headers: { Authorization: `Bearer ${process.env.REACT_APP_TOKEN}` }
		};
		const response = await axios.get(
			`${process.env.REACT_APP_API_URL}/equivalencias`,
			config
		);
		setEquivalences(response.data);
	};

	return (
		<DataLayout>
			<div style={{ padding: '1rem' }}>
				<h1>Equivalences</h1>
				<EquivalencesTable data={equivalences} />
			</div>
		</DataLayout>
	);
};

export default Equivalences;
