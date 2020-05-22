import React from 'react';
import { Button, Row, Col } from 'antd';

import { SettingFilled, BellFilled, UserOutlined } from '@ant-design/icons';

export default function IconsMenu({ span }) {
    return (
        <>
            <Col span={span}  >
                <Row justify="space-around" align="middle">
                    <Button className="button" shape="circle" icon={<UserOutlined />}> </Button>
                    <Button className="button" shape="circle" icon={<BellFilled />}> </Button>
                    <Button className="button" shape="circle" icon={<SettingFilled />}> </Button>
                </Row>
            </Col>

        </>
    )
}
