import { Form, Input, Button, Select, Row, Col, Card } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { useState } from 'react';

import UploadImgs from '../../../commons/UploadImgs';

const AddFoodForm = () => {
    const { TextArea } = Input;

    const [form] = Form.useForm();
    const [requiredMark, setRequiredMarkType] = useState('optional');

    const onRequiredTypeChange = ({ requiredMarkValue }) => {
        setRequiredMarkType(requiredMarkValue);
    };

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <Form
            form={form}
            layout='vertical'
            initialValues={{
                requiredMarkValue: requiredMark,
            }}
            onValuesChange={onRequiredTypeChange}
            requiredMark={requiredMark}
            onFinish={onFinish}
            text>
            <Form.Item label={<label style={{ color: 'black' }}>Nombre</label>} required>
                <Input placeholder='Ingrese el nombre del alimento' />
            </Form.Item>
            <Form.Item
                name='image'
                wrapperCol={{ sm: 24 }}
                label={<label style={{ color: 'black' }}>Imagen</label>}
                tooltip={{
                    title: 'Seleccione una imagen del alimento',
                    icon: <InfoCircleOutlined />,
                }}>
                <UploadImgs />
            </Form.Item>

            {/*ÍCONOS*/}
            <Card title='Íconos'>
                <Row>
                    <Col span={12}>
                        <Form.Item
                            wrapperCol={{ sm: 24 }}
                            label={<label style={{ color: 'black' }}>Ícono nutricional</label>}
                            tooltip={{
                                title: 'Seleccione el ícono nutricional',
                                icon: <InfoCircleOutlined />,
                            }}>
                            <Input placeholder='Cargue el ícono nutricional del alimento' />
                            <Button type='primary'>Cargar ícono</Button>
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item
                            wrapperCol={{ sm: 24 }}
                            label={<label style={{ color: 'black' }}>Ícono ambiental</label>}
                            tooltip={{
                                title: 'Seleccione el ícono ambiental',
                                icon: <InfoCircleOutlined />,
                            }}>
                            <Input placeholder='Cargue el ícono ambiental del alimento' />
                            <Button type='primary'>Cargar ícono</Button>
                        </Form.Item>
                    </Col>
                </Row>

                <Row>
                    <Col span={12}>
                        <Form.Item
                            wrapperCol={{ sm: 24 }}
                            label={<label style={{ color: 'black' }}>Ícono economía</label>}
                            tooltip={{
                                title: 'Seleccione el ícono de economía',
                                icon: <InfoCircleOutlined />,
                            }}>
                            <Input placeholder='Cargue el ícono de economía' />
                            <Button type='primary'>Cargar ícono</Button>
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item
                            wrapperCol={{ sm: 24 }}
                            label={<label style={{ color: 'black' }}>Ícono de cultura sociedad</label>}
                            tooltip={{
                                title: 'Seleccione el ícono de cultura sociedad',
                                icon: <InfoCircleOutlined />,
                            }}>
                            <Input placeholder='Cargue el ícono de cultura sociedad' />
                            <Button type='primary'>Cargar ícono</Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Card>
            {/*OPCIONES DE PREPARACIÓN AQUÍ*/}
            <br />
            {/*CANTIDAD DE ALIMENTOS*/}
            <Card title='Cantidad de alimento'>
                <Form.Item label={<label style={{ color: 'black' }}>Cantidad sugerida</label>} required>
                    <Select defaultValue='0' style={{ width: 120 }}>
                        {Array.from({ length: 15 }).map((_, index) => (
                            <option value={index} key={index}>
                                {index}
                            </option>
                        ))}
                    </Select>
                </Form.Item>
                <Row gutter={[8, 8]}>
                    <Col span={12}>
                        <Form.Item label={<label style={{ color: 'black' }}>Unidad</label>} required>
                            <Input placeholder='Ingrese la unidad' />
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item label={<label style={{ color: 'black' }}>Peso neto</label>} required>
                            <Input placeholder='Ingrese el peso neto' />
                        </Form.Item>
                    </Col>
                </Row>
            </Card>
            <br />

            {/*CALORÍAS MACRONUTRIENTES*/}
            <Card title='Cantidad de alimento'>
                <Row gutter={[8, 8]}>
                    <Col span={12}>
                        <Form.Item label={<label style={{ color: 'black' }}>Energía</label>} required>
                            <Input placeholder='Ingrese la cantidad de energía' />
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item label={<label style={{ color: 'black' }}>Proteínan</label>} required>
                            <Input placeholder='Ingrese la cantidad de proteína' />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={[8, 8]}>
                    <Col span={12}>
                        <Form.Item label={<label style={{ color: 'black' }}>Grasas saturadas</label>} required>
                            <Input placeholder='Ingrese la cantidad de grasas saturadas' />
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item label={<label style={{ color: 'black' }}>Grasas monoinsaturados</label>} required>
                            <Input placeholder='Ingrese la cantidad de grasas monoinsaturados' />
                        </Form.Item>
                    </Col>
                </Row>
            </Card>

            <Form.Item label={<label style={{ color: 'black' }}>Grupo exportable</label>} required>
                <Input placeholder='Ingrese el grupo exportable' />
            </Form.Item>
            <Form.Item label={<label style={{ color: 'black' }}>Sub grupo exportable</label>} required>
                <Input placeholder='Ingrese el grupo sub exportable' />
            </Form.Item>
            <Form.Item label={<label style={{ color: 'black' }}>Clasificación exportable</label>} required>
                <Input placeholder='Ingrese la clasificación exportable' />
            </Form.Item>
            <Form.Item label={<label style={{ color: 'black' }}>Grupo de alimento</label>} required>
                <Input placeholder='Ingrese el grupo de alimento al que pertenece' />
            </Form.Item>
            <Form.Item label={<label style={{ color: 'black' }}>Mensaje</label>} required>
                <TextArea rows={2} placeholder='Ingrese el mensaje' />
            </Form.Item>
            <Form.Item label={<label style={{ color: 'black' }}>Opciones de preparación</label>} required>
                <Input placeholder='Ingrese las opciones de preparación' />
            </Form.Item>

            <Form.Item label={<label style={{ color: 'black' }}>Calorías de alimentos</label>} required>
                <Select defaultValue='0' style={{ width: 120 }}>
                    {Array.from({ length: 15 }).map((_, index) => (
                        <option value={index} key={index}>
                            {index}
                        </option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item>
                <Button type='primary' htmlType='submit'>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default AddFoodForm;
