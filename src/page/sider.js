import React from 'react';
import {Link } from 'react-router'  //引入路由函数
import menuConfig from './mock/menu.js'
import { Menu, Icon } from 'antd';
import './css/slider.css'
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
        const menuList = this.recursionMenu(menuConfig);
        this.setState({menuList})
    }
	//递归循环左侧菜单栏按钮
	recursionMenu=(data)=>{
		   return data.map((item)=>{
			       if(!!item.children&&item.children.length>0){
					   return (
					      <SubMenu key={item.id} title={<span><Icon type={item.type}/>{item.title}</span>}>
							      {this.recursionMenu(item.children)}
						  </SubMenu>
					   )
				   }else{
					    return(<MenuItem key={item.id} title={item.title}> <Link to ={item.name}>{item.title}</Link></MenuItem>) 
				   }
		   }) 
	}
    render () {
				return (
						 <Menu theme='dark' onClick={this.handleClick}  onChange ={this.getValue} style={{height:'93.2vh',overflowY:'hidden'}} mode="inline">
                             {this.state.menuList}
                         </Menu>
				);
			}
	 }
	 
