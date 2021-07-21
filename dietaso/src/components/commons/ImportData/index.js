import React from 'react';
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
      <Upload {...props}>
        <Button icon={<UploadOutlined />} className="btn">Click to upload</Button>
      </Upload>
    </DataLayout>
  );
};

export default index;
