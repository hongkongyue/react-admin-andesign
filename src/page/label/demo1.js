import React from 'react';

import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

export default class Label extends React.Component {
    render () {
        return (
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Tab 1" key="1">
                            这是tab1的切换页面<br/>
                            <h1>请听题，我的小家伙啊</h1>
                </TabPane>
                <TabPane tab="Tab 2" key="2">
                            这是tab2的切换页面<br/>
                            <h1>请听题，我的小宝贝</h1>
                </TabPane>
                <TabPane tab="Tab 3" key="3">
                            这是tab2的切换页面<br/>
                            <h1>请听题，我的小宝贝啊</h1>
                </TabPane>
            </Tabs>
        )
    }
}
