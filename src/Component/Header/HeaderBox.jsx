
import React from 'react';

import Nav1 from '../Nav1/Nav1';
import Nav2 from '../Nav2/Nav2';
import Nav3 from '../Nav3/Nav3';

import { Layout, Row, Col } from 'antd';
const { Header } = Layout;


export default function HeaderBox() {

    let Navholder = (props) =>
        (<Row >
            <Col span={24}>
                {props.children}
            </Col>
        </Row>);


    return (
        <>
            <Header style={{ padding: "0px", height: "fit-content", backgroundColor: "white" }}>
                <Row>
                    <Col span={24}>
                        <Navholder>  <Nav1 /> </Navholder>
                        <Navholder>  <Nav2 /> </Navholder>
                        <Navholder>  <Nav3 /> </Navholder>
                    </Col>
                </Row>
            </Header>
        </>
    )
}
