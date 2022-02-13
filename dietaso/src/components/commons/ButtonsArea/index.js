import { exportXlsx } from '../../../utils/exportXlsx';

import { Button } from 'antd';

const ButtonsArea = ({ xlsxData }) => {
    const excelDataSource = () => {
        console.log('click', xlsxData);
        if (xlsxData) {
            exportXlsx({ ...xlsxData });
        }
    };

    return <Button onClick={() => excelDataSource()}>Exportar archivo</Button>;
};

export default ButtonsArea;
