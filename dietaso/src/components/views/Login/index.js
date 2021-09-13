import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { addAuthorizationAction } from '../../../redux/actions/authorizationAction';

import apiURL from '../../../axios/axiosConfig';

import { Input, Row, Form, Button, Tabs, message } from 'antd';
import { LoginOutlined } from '@ant-design/icons';

import './Login.scss';

const Login = () => {
    const [form] = Form.useForm();
    const [form2] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const history = useHistory();
    const dispatch = useDispatch();
    const { TabPane } = Tabs;

    const onLogIn = async (data) => {
        setLoading(true);
        const response = await apiURL.post('/usuarios/login', data);

        if (response.status === 200 && response.data.admin) {
            dispatch(addAuthorizationAction(response.data));
            message.success(`Login successful`);
            setLoading(false);
            history.replace('/home');
        } else {
            message.error(`Something went wrong`);
            setLoading(false);
        }
    };

    const onRegister = async (data) => {
        setLoading(true);
        await apiURL
            .post('/user/register', data)
            .then((response) => {
                if (response.status === 200) {
                    message.success('Register successful');
                    setLoading(false);
                }
            })
            .catch((error) => {
                message.error(error.response.data.message);
                setLoading(false);
            });
    };

    return (
        <div className='loginContainer'>
            <Tabs defaultActiveKey='1' centered>
                <TabPane tab='Log In' key='1' style={{ padding: '1rem' }}>
                    <Form form={form} onFinish={onLogIn}>
                        <Row gutter={(0, 10)} className='form'>
                            <Form.Item
                                name='email'
                                label='Email'
                                className='form__item'
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            'Please enter your email address.',
                                    },
                                ]}>
                                <Input placeholder='Email' />
                            </Form.Item>
                            <Form.Item
                                name='contrasena'
                                label='Contraseña'
                                className='form__item'
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            'Ingresa tu contraseña por favor.',
                                    },
                                ]}>
                                <Input
                                    placeholder='contrasena'
                                    type='password'
                                />
                            </Form.Item>
                            <Button
                                type='primary'
                                htmlType='submit'
                                loading={loading}
                                icon={<LoginOutlined />}>
                                Log In
                            </Button>
                        </Row>
                    </Form>
                </TabPane>
                <TabPane tab='Sign In' key='2' style={{ padding: '1rem' }}>
                    <Form form={form2} onFinish={onRegister}>
                        <Row gutter={(0, 10)} className='form'>
                            <Form.Item
                                name='name'
                                label='Name'
                                className='form__item'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your name.',
                                    },
                                ]}>
                                <Input placeholder='Name' />
                            </Form.Item>
                            <Form.Item
                                name='email'
                                label='Email'
                                className='form__item'
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            'Please enter your email address.',
                                    },
                                ]}>
                                <Input placeholder='Email' />
                            </Form.Item>
                            <Form.Item
                                name='contrasena'
                                label='Contraseña'
                                className='form__item'
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            'Ingresa tu contraseña por favor.',
                                    },
                                ]}>
                                <Input
                                    placeholder='contrasena'
                                    type='password'
                                />
                            </Form.Item>
                            <Button
                                type='primary'
                                htmlType='submit'
                                loading={loading}>
                                Sign In
                            </Button>
                        </Row>
                    </Form>
                </TabPane>
            </Tabs>
        </div>
    );
};

export default Login;
