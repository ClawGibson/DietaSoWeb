import React, {useState} from 'react';
import DataLayout from '../../layouts/DataLayout';
import { Upload, message, Button,  Row, Col, Table } from 'antd';
import { UploadOutlined, SaveOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

function UpFile() {

  const [state, setState] = useState({
    dataSource:[],
    columns:[]
  });

  const props = {
    name: 'file',
    action: 'https://30127cf56157.ngrok.io/upload',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {

      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
  
      if (info.file.status === 'done') {
        
        const { heders, body } = info.file.response.data.table;
        
        let columns = [];
        
        for(let header of heders ){
          columns.push({
            title: header,
            dataIndex: header,
            key: header
          });
        }

        message.success(`${info.file.name} file uploaded successfully`);

        setState({
          columns,
          dataSource: body
        })

      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };


  return (
    <DataLayout>
      <Row>
        <Col span={6} className="column">
          <Upload {...props}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Col>
      </Row>
      <Row>
        <Col span={24} className="column">
        <Table dataSource={state.dataSource} columns={state.columns} />;
        </Col>
      </Row>
      <Row>
        <Col span={6} className="column">
            <Button type="primary" icon={<SaveOutlined />}>Save</Button>
        </Col>
      </Row>
    </DataLayout>
  );

}

export default UpFile;
