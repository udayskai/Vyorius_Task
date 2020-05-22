import React, { useState } from 'react';
import Imagetest from '../uploads/P2.png';
import { DoubleRightOutlined, DoubleLeftOutlined } from '@ant-design/icons';

import SideBarBox from '../Component/sideBar/SideBar';
import HeaderBox from '../Component/Header/HeaderBox';

import { Layout, Button } from 'antd';
const { Sider } = Layout;




export default function MainPage() {

    // react hooks
    let [state, setState] = useState(false);

    let toggle = () => {
        setState(!state)
    };


    return (
        <>
            <Layout>
                <Sider trigger={null} collapsible collapsed={state} width={280} style={{ backgroundColor: "white" }}>
                    <SideBarBox />
                    <Button block className='trigger' onClick={toggle} type="secondary" icon={state ? <DoubleRightOutlined /> : <DoubleLeftOutlined />}> </Button>
                </Sider>

                <Layout style={{ backgroundColor: "white" }} >
                    <HeaderBox />
                </Layout>
            </Layout>


            {/* extra  */}
            <h1 style={{ marginTop: "15rem", backgroundColor: "gray" }}> Given template for Task</h1>
            <img src={Imagetest} alt="" style={{ width: "100vw" }} />
            {/* extra */}

        </>
    )
}
