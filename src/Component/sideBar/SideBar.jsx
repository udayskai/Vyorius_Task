import React from 'react';
import Logo from '../../uploads/P1.png';

import { Row, Col, Avatar, Typography } from 'antd';
const { Title } = Typography;


function LogoAndTitle() {
    return (
        <Row align="middle" justify="start">
            <Col style={{ marginLeft: "1rem" }}   >
                <Avatar size={40} src={Logo} />
            </Col>
            <Col style={{ marginLeft: "1em" }}>
                <Title level={4} >MICHEL</Title>
            </Col>
        </Row>
    )
}

function AvatarAndName() {
    return (
        < Row justify="center" >
            <Col align="middle">
                <Avatar size={100} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                <Title level={4}>MICHEL</Title>
            </Col>
        </Row >
    )
}


export default function SideBarBox() {
    return (
        <>
            {LogoAndTitle()}

            {AvatarAndName()}
        </>
    )
}


