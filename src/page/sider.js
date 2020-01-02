import React from 'react';
import {Link } from 'react-router'  //引入路由函数
import menuConfig from './mock/menu.js'
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;



export default class Sider extends React.Component {
	constructor (props) {
		 super(props)
		 this.state={menuList:[]}
	}
    handleClick = (e) => {
		console.log('点击了',e)
	}
	componentWillMount() {
        const menuList = this.renderMenu(menuConfig);
        this.setState({menuList})
    }
	//使用递归
    renderMenu = (data) => {
        return data.map((item) => {
            if (!!item.children&&item.children.length>0) {
                return (
                    <SubMenu key={item.id}  title={<span><Icon type={item.type}/><span>{item.title}</span></span>}>
                         {this.renderMenu(item.children)}
                    </SubMenu>
                )
            } else {
                return (
                    <MenuItem key={item.name} title={item.title}>
                         <Link to = {item.name}>{item.title}</Link>
                    </MenuItem>
                )
            }
        })
    };
    render () {
				return (
						 <Menu theme='dark' onClick={this.handleClick} onChange = {this.getValue} style={{height:'93.2vh',overflowY:'hidden'}} mode="inline">
                             {this.state.menuList}
                         </Menu>
				);
			}
	 }
	 
