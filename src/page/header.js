import React from 'react'
import {Row, Col, Avatar, Input, Menu, Dropdown, Icon} from 'antd';
import 'antd/dist/antd.css';  
import Tooltip from '../component/tooltip'
import MyNews from '../component/myNews'
const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.cnblogs.com/hai-cheng/">我的博客</a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Hi-Sen">我的 GitHub</a>
        </Menu.Item>
        <Menu.Item>
            <MyNews/>
        </Menu.Item>
        <Menu.Item>
            <Tooltip/>
        </Menu.Item>
    </Menu>
);
export default class Header extends React.Component{
	render(){
            return(
                        <Row>
                            <Col span={10}>
                                     <h1 style={{color:'#fff'}}>后台管理系统</h1>
                            </Col>
                            <Col span={8}><Input placeholder="请输入你想要的......" /></Col>
                            <Col span={6}>
                                <Avatar style={{backgroundColor: '#87d068',marginRight:20}}  icon="user"/>
                                <Dropdown overlay={menu}>
                                    <span className="ant-dropdown-link" href="#" style={{color:'#fff',cursor:'pointer'}}>
                                        Hi-Sen <Icon type="down" />
                                    </span>
                                </Dropdown>
                            </Col>
                        </Row>
            	)
	}   
}