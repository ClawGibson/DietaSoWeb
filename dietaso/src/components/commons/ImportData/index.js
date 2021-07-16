import React, { useState } from 'react';

import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import DataLayout from '../../layouts/DataLayout';

const Index = () => {
  const axios = require('axios');
  const [file, setFile] = useState(null);

  const onChange = async (info) => {
    const nextState = {};
    switch (info.file.status) {
      case 'uploading':
        nextState.selectedFileList = [info.file];
        console.log(`Subiendo el archivo ${info.file.name}...`);
        break;
      case 'done':
        nextState.selectedFile = info.file;
        console.log(`Archivo ${info.file.name} subido exitosamente`);
        console.log('nextState', nextState);
        break;

      default:
        // error or removed
        nextState.selectedFile = null;
        console.log(`El archivo ${info.file.name} no se pudo subir`);
    }
    await setFile(nextState);
  };

  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess('ok');
    }, 0);
  };

  const handleImport = async () => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MGJkMDc3YjNmZGM0ZjI1YmMzZGE3MjMiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2MjYzOTY3MTcsImV4cCI6MTY1Nzk1NDMxN30.uZ0YzVKYa1XDpUN2sQo_OndqfqcNiMv_OMS9yBc1j6Q';
    try {
      const response = await axios.post(
        'https://dietasoapiv1.herokuapp.com/api/v2/equivalencias',
        file,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log('response', response);
    } catch (err) {
      console.log('Ocurrió un error al querer importar los datos: ', err);
    }
  };
  console.log(typeof file);
  return (
    <DataLayout>
      <Upload
        customRequest={dummyRequest}
        maxCount={1}
        accept={'.xlsx'}
        onChange={onChange}
      >
        <Button icon={<UploadOutlined />}>Seleccionar archivo</Button>
      </Upload>
      <Button onClick={() => handleImport()}>Importar archivo</Button>
    </DataLayout>
  );
};

export default Index;
