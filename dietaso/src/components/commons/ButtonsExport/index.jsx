import { Button } from 'antd';
import './ButtonsExport.scss'

const ButtonsExport = ({titulo}) => {
    return (
        <>
            <div class="bordeBE">
                <h3>{titulo}</h3>
                <Button>
                    boton
                </Button>
            </div>
        </>
    );
};

export default ButtonsExport;
