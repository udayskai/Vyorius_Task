import React from 'react';
import { RocketTwoTone } from '@ant-design/icons';
import { Col, Typography, Switch } from 'antd';

const { Text } = Typography;



export default function SwitchBox({ color, title }) {


    function onChangeClick(checked) {
        console.log(`switch to ${checked}`);
    }

    return (
        <>
            <Col className="box" span={8}>
                <RocketTwoTone twoToneColor={color} style={{ fontSize: "2rem" }} />
                <Text type="secondary">{title} </Text>
                <Switch onChange={onChangeClick} size={"small"} />
            </Col>
        </>
    )
}


