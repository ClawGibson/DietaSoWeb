import { exportXlsx } from '../../../utils/exportXlsx';

import { Button } from 'antd';

const ButtonsArea = ({ xlsxData }) => {
    const excelDataSource = () => {
        exportXlsx({ ...xlsxData });
    };

    return (
        <>
            <div>
                <Button onClick={() => excelDataSource()}>
                    Exportar archivo
                </Button>
            </div>
        </>
    );
};

export default ButtonsArea;
