import React from 'react'
import {Row, Col, Avatar, Input, Menu, Dropdown, Icon} from 'antd';
import 'antd/dist/antd.css';  
import './header.css'
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
                            <Col span={6}><span style={{color:'#fff',textAlign:'left'}}>管理系统</span></Col>
                            <Col span={18} className="headerAvatar">
                                <Avatar size="small" style={{backgroundColor: '#87d068',marginRight:20,fontSize:6}}  icon="user"/>
                                <Dropdown overlay={menu}>
                                    <span className="ant-dropdown-link" href="#" style={{color:'#fff',cursor:'pointer'}}>管理员 <Icon type="down"/></span>
                                </Dropdown>
                            </Col>
                        </Row>
            	)
	}   
}