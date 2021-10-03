import React from 'react';

import { useDispatch } from 'react-redux';
import { addAuthorizationAction } from '../../../../redux/actions/authorizationAction';

import { Form, Input, Button, message, Row } from 'antd';
import { LoginOutlined } from '@ant-design/icons';

import apiURL from '../../../../axios/axiosConfig';

const LogIn = ({ loading, setLoading }) => {
    const [ form ] = Form.useForm();

    const dispatch = useDispatch();

    const onLogIn = async (data) => {
        try {
            setLoading(true);
            const response = await apiURL.post('/usuarios/login', data);

            if (response.status === 200 && response.data.admin) {
                setLoading(false);
                dispatch(addAuthorizationAction(response.data));
                message.success(`Login successful`);
            } else {
                setLoading(false);
                message.error('Something went wrong');
            }
        } catch (error) {
            setLoading(false);
            message.error('Wrong password');
        }
    };

    return (
        <Form form={form} onFinish={onLogIn}>
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
