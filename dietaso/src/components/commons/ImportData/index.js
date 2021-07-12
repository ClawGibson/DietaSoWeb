import React, { useState } from 'react';

import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import DataLayout from '../../layouts/DataLayout';

const Index = () => {
  const [file, setFile] = useState('');
  const props = {
    action: '//jsonplaceholder.typicode.com/posts/',
    listType: 'picture',
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        console.log(`${info.file.name} file uploaded successfully`);
        setFile(info.file);
      } else if (info.file.status === 'error') {
        console.log(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <DataLayout>
      <Upload {...props} maxCount={1} accept={'.xlsx'}>
        <Button icon={<UploadOutlined />}>Seleccionar archivo</Button>
      </Upload>
      ,
    </DataLayout>
  );
};

export default Index;
