import React from 'react';

import { useDispatch } from 'react-redux';
import { addAuthorizationAction } from '../../../../redux/actions/authorizationAction';

import { Form, Input, Button, message, Row } from 'antd';
import { LoginOutlined } from '@ant-design/icons';

import apiURL from '../../../../axios/axiosConfig';

import '../Login.scss';

const LogIn = ({ loading, setLoading }) => {
    const [ form ] = Form.useForm();

    const dispatch = useDispatch();

    const onLogIn = async (values) => {
        try {
            setLoading(true);

            const body = {
                email: values.email,
                contrasena: values.contrasena
            };

            const { data, status } = await apiURL.post('/usuarios/login', body);

            if (status === 200 && data.admin) {
                setLoading(false);
                localStorage.setItem('token', data.token);
                dispatch(addAuthorizationAction(data));
                message.success(`Login successful`);
            } else {
                setLoading(false);
                message.error('Something went wrong');
            }
        } catch (error) {
            setLoading(false);
            console.groupCollapsed('Error el login');
            console.error(error);
            console.groupEnd();
            message.error('Wrong password');
        }
    };

    return (
        <Form form={form} onFinish={onLogIn} requiredMark='optional' >
            <Row gutter={(0, 10)} className='form'>
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
                            message: 'Please enter your password.',
                        },
                    ]}>
                    <Input.Password
                        placeholder='Password'
                        type='password'
                        visibilityToggle
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
    );
};

export default LogIn;
