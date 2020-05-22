import React from 'react';
import IconsMenu from './IconsMenu';

import { Row, Col, Input, Typography } from 'antd';
const { Title } = Typography;


export default function Nav1() {
    return (
        <>
            {/* className="level1"  */}
            <Row justify="space-between" align="middle">

                <Col span={12}>
                    <Title level={3} style={{ color: "#bac2bc", marginTop: "5px" }}> MAINTANCE SUMMARY </Title>
                </Col>

                <Col span={12} >
                    <Row justify="end" align="middle" >
                        <Col className="input" span={8} >
                            <Input placeholder="Search.." />
                        </Col>
                        <IconsMenu span="10" />
                    </Row>
                </Col>
            </Row>
        </>
    )
}
