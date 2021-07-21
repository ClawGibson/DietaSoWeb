import React from 'react';

import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import DataLayout from '../../layouts/DataLayout';
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const props = {
  name: 'file',
  action: 'http:example.com',
  headers: {
    authorization: 'token'
  },
  onChange(info) {

    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }

    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded succesfully.`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }

  },
};



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
