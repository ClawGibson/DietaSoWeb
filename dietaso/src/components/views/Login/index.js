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

  const history = useHistory();
  const dispatch = useDispatch();
  const { TabPane } = Tabs;

  const onLogIn = async (data) => {
    const response = await apiURL.post('/usuarios/login', data);
    console.log('response: ', response);

    if (response.status === 200) {
      dispatch(addAuthorizationAction(response.data));
      message.success(`Login successful`);
      history.replace('/home');
    }
  };

  const onRegister = async (data) => {
    await apiURL
      .post('/user/register', data)
      .then((response) => {
        if (response.status === 200) message.success('Register successful');
      })
      .catch((error) => {
        message.error(error.response.data.message);
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
              <Button type='primary' htmlType='submit' icon={<LoginOutlined />}>
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
              <Button type='primary' htmlType='submit'>
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
