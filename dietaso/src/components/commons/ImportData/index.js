import React from 'react';

import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import DataLayout from '../../layouts/DataLayout';

const index = () => {
  return (
    <DataLayout>
      <Upload maxCount={1} accept={'.xlsx'}>
        <Button icon={<UploadOutlined />}>Seleccionar archivo</Button>
      </Upload>
    </DataLayout>
  );
};

export default index;
