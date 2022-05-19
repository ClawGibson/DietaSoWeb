import React from 'react';
import { Spin, Row } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import styles from './Loading.module.scss';

const Loading = ({ size }) => {
    const antIcon = <LoadingOutlined style={{ fontSize: size ?? 24 }} spin />;

    return (
        <Row className={styles.overrideSpinning}>
            <Spin indicator={antIcon} />
        </Row>
    );
};

export default Loading;
