import { memo } from 'react';

import { Table } from 'antd';

const EquivalencesTable = ({ data }) => {
	return (
		<Table
			sticky
			columns={columns}
			pagination={false}
			dataSource={data}
			scroll={{ x: 600, y: 400 }}
			onRow={(record) => {
				return {
					onClick: () => {
						console.log(record);
					}
				};
			}}
		/>
	);
};

export default memo(EquivalencesTable);

export const columns = [
	{
		title: 'Alimento',
		dataIndex: 'alimento',
		width: 50,
		key: 'alimento',
		sorter: (a, b) => {
			return a.alimento.localeCompare(b.alimento);
		}
	},
	{
		title: 'Cantidad sugerida',
		dataIndex: 'cantidadSugerida',
		width: 50,
		key: 'cantidadSugerida'
	},
	{
		title: 'Unidad',
		dataIndex: 'unidad',
		width: 30,
		key: 'unidad',
		sorter: (a, b) => a.unidad.length - b.unidad.length
	},
	{
		title: 'Peso neto (kg)',
		dataIndex: 'pesoNetoKg',
		width: 50,
		key: 'pesoNetoKg',
		sorter: (a, b) => a.pesoNetoKg - b.pesoNetoKg
	}
];
