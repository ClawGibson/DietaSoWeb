import React from 'react';
import { Col, Input, Row, Space, Search } from 'antd';
import { AudioOutlined } from '@ant-design/icons';



const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);
const onSearch = value => console.log(value);
/*const onSearch = ({target}) => {
  setFilterData(
      data.filter((ejercicios) =>
          ejercicios.nombre.includes(target.value)
      )
  );

};

<Space direction="vertical" style={{width:'90%', padding:20}}>
                    <Search  size="large"placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
                
                </Space>*/
const search = () => {

    return (
        <div>
            <Row>
                <Col span={4}>
                </Col>
                <Col span={20}>
                
                </Col>
                
            </Row>
        </div>
    );

};


export default search;