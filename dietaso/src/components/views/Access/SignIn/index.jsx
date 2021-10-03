import React from 'react';

import { Form, Row, Input, Button, message } from 'antd';

import apiURL from '../../../../axios/axiosConfig';

const SignIn = ({ loading, setLoading }) => {
    const [ form ] = Form.useForm();

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
        <Form form={form} onFinish={onRegister}>
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
                            message: 'Please enter your email address.',
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
                            message: 'Ingresa tu contraseña por favor.',
                        },
                    ]}>
                    <Input placeholder='contrasena' type='password' />
                </Form.Item>
                <Button type='primary' htmlType='submit' loading={loading}>
                    Sign In
                </Button>
            </Row>
        </Form>
    );
};

export default SignIn;
