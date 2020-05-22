import React from 'react'
import { Row } from 'antd';


import SwitchBox from './SwitchBox';

// maintain here and send cicon form here


export default function Nav2() {


    return (
        <>
            <Row justify="space-between">
                <SwitchBox title="Aircraft Down" color="red" />
                <SwitchBox title="Inseption Due" color="orange" />
                <SwitchBox title="Aircraft Up" color="green" />
            </Row>
        </>
    )
}


//  style={{ border: "1px solid red" }}