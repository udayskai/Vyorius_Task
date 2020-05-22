import React from 'react'

import { Typography, Col, Button, Row } from 'antd';
const { Title } = Typography;



export default function Nav3() {
    return (
        <>
            <Row justify="space-between" align="middle" style={{ backgroundColor: "#2b2a2a" }}>
                <Col >
                    <Title style={{ color: "#e3e3e3" }} level={3}>Ecosystem</Title>
                </Col>

                <Col >
                    <Button style={{ padding: "0px 5px", color: "white", backgroundColor: "#828181" }}  >
                        Finf-Ecosystem
                     </Button>
                </Col>
            </Row>
        </>
    )
}
