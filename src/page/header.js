import React from 'react'
import {Row, Col, Avatar, Input, Menu, Dropdown, Icon} from 'antd';
import 'antd/dist/antd.css';  
import Tooltip from '../component/tooltip'
import MyNews from '../component/myNews'
const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank"  href="https://github.com/hongkongyue/react-admin-andesign">访问源码</a>
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
                               <Col span={8}><Input placeholder="请输入" /></Col>
                            <Col span={6}>
                                <Avatar style={{backgroundColor: '#87d068',marginRight:20}}  icon="user"/>
                                <Dropdown overlay={menu}>
                                    <span className="ant-dropdown-link" href="#" style={{color:'#fff',cursor:'pointer'}}>
                                       管理员 <Icon type="down" />
                                    </span>
                                </Dropdown>
                            </Col>
                        </Row>
            	)
	}   
}