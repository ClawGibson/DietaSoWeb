import React, { useState } from 'react';
import DataLayout from '../../layouts/DataLayout';
import { Input, Button } from 'antd';

const Home = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const axios = require('axios');

  const setData = async () => {
    const data = {
      email: user.toString(),
      contrasena: password.toString(),
    };

    try {
      const response = await axios.post(
        'https://dietasoapiv1.herokuapp.com/api/v2/usuarios/login',
        data
      );

      if (!response.data) console.log('No se pudo');
      else console.log('Si se pudo', response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DataLayout>
      <Input placeholder='Usuario' onChange={(e) => setUser(e.target.value)} />
      <Input
        placeholder='Contraseña'
        type='password'
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={() => setData()}>Submit</Button>
    </DataLayout>
  );
};

export default Home;
